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
			clientId: '5p8tp2s09i908k3tbdmfsv12m4',
			clientSecret: 'qlu6puecb0cncd71pfgt4jmibo7tl9n5keo1rqqv4ri0jnj9ib0',
			issuer: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Nn01iIPpW',
		}),
	],
	debug: true, // Enable debug mode
});

export { handler as GET, handler as POST };

