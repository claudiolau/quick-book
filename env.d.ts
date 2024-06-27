declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		PORT?: string;

		// Add other environment variables here
		NEXT_PUBLIC_AWS_COGNITO_ISSUER: string;
		NEXT_PUBLIC_AWS_COGNITO_REGION: string;
		NEXT_PUBLIC_AWS_COGNITO_POOL_ID: string;
		NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID: string;
		NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_SECRET:string;
	}
}
