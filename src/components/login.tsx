import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProviders, signIn } from "next-auth/react";
import { CenterLayout } from "./template/layout";

export async function Login() {
	const providers = await getProviders();
	return (
		<CenterLayout>
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-xl">Login</CardTitle>
					<CardDescription>Enter your information</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						{providers &&
							Object.values(providers).map((provider) => (
								<div
									className="inline-flex items-center  m-4 pr-4 pl-4  px-3 py-2   bg-neutral-50  rounded p-1 text-sm  text-neutral-900 "
									key={provider.name}
								>
									<img
										src={`https://authjs.dev/img/providers/${provider.id}.svg`}
										loading="lazy"
										alt={`${provider.name} logo`}
										height={24}
										width={24}
									/>

									<Button
										className="w-full"
										onClick={() =>
											signIn(provider.id, { callbackUrl: "/dashboard" })
										}
									>
										Sign in with {provider.name}
									</Button>
								</div>
							))}
					</div>
				</CardContent>
			</Card>
		</CenterLayout>
	);
}
