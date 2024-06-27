// imports
import NextAuth from "next-auth";
// importing providers
import GithubProvider from "next-auth/providers/github";
import CognitoProvider from "next-auth/providers/cognito";

const handler = NextAuth({
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
	debug: true, // Enable debug mode
});

export { handler as GET, handler as POST };

