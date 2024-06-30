import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CognitoProvider from "next-auth/providers/cognito";
import type { JWT } from "next-auth/jwt";
import type { Account } from "next-auth";

interface ExtendedJWT extends JWT {
	accessToken: string;
	refreshToken: string;
	accessTokenExpires: number;
	provider?: string;
	error?: string;
}

interface ExtendedAccount extends Account {
	access_token: string;
	refresh_token: string;
	expires_in: number;
	provider: string;
}

async function refreshGithubAccessToken(
	token: ExtendedJWT,
): Promise<ExtendedJWT> {
	try {
		const url = `https://github.com/login/oauth/access_token?${new URLSearchParams(
			{
				client_id: process.env.GITHUB_ID as string,
				client_secret: process.env.GITHUB_SECRET as string,
				grant_type: "refresh_token",
				refresh_token: token.refreshToken,
			},
		)}`;

		const response = await fetch(url, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			method: "POST",
		});

		const refreshedTokens = await response.json();

		if (!response.ok) {
			throw refreshedTokens;
		}

		return {
			...token,
			accessToken: refreshedTokens.access_token,
			accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
			refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
		};
	} catch (error) {
		console.error("Error refreshing GitHub access token", error);

		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}

async function refreshCognitoAccessToken(
	token: ExtendedJWT,
): Promise<ExtendedJWT> {
	try {
		const url = `${process.env.NEXT_PUBLIC_AWS_COGNITO_ISSUER}/oauth2/token?${new URLSearchParams(
			{
				grant_type: "refresh_token",
				client_id: process.env.NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID,
				client_secret: process.env.NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_SECRET,
				refresh_token: token.refreshToken,
			},
		)}`;

		const response = await fetch(url, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			method: "POST",
		});

		const refreshedTokens = await response.json();

		if (!response.ok) {
			throw refreshedTokens;
		}

		return {
			...token,
			accessToken: refreshedTokens.access_token,
			accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
			refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
		};
	} catch (error) {
		console.error("Error refreshing Cognito access token", error);

		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}

export const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		CognitoProvider({
			clientId: process.env.NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_SECRET,
			issuer: process.env.NEXT_PUBLIC_AWS_COGNITO_ISSUER,
		}),
	],
	session: {
		strategy: "jwt", // Use JWT for sessions
		maxAge: 24 * 60 * 60, // Set session max age in seconds (24 hours)
		updateAge: 24 * 60 * 60, // Optional: Set session update age in seconds (24 hours)
	},
	callbacks: {
		async jwt({ token, account }) {
			let extendedToken = token as ExtendedJWT;

			if (account) {
				const extendedAccount = account as ExtendedAccount;
				extendedToken = {
					...extendedToken,
					accessToken: extendedAccount.access_token,
					refreshToken: extendedAccount.refresh_token,
					accessTokenExpires: Date.now() + extendedAccount.expires_in * 1000,
					provider: extendedAccount.provider,
				};
			}

			if (Date.now() < extendedToken.accessTokenExpires) {
				return extendedToken;
			}

			if (extendedToken.provider === "github") {
				return refreshGithubAccessToken(extendedToken);
			}
			if (extendedToken.provider === "cognito") {
				return refreshCognitoAccessToken(extendedToken);
			}

			return extendedToken;
		},
	},
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		// error: "/auth/error", // Error code passed in query string as ?error=
		// verifyRequest: "/auth/verify-request", // (used for check email message)
		// newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
	},
	// theme: {
	// 	colorScheme: "auto", // "auto" | "dark" | "light"
	// 	brandColor: "", // Hex color code
	// 	logo: "", // Absolute URL to image
	// 	buttonText: "", // Hex color code
	// },
	// debug: true, // Enable debug mode
} satisfies NextAuthOptions;
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
