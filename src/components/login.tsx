import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProviders, signIn } from "next-auth/react";
import { CenterLayout } from "./template/layout";

export async function Login() {
	const providers = await getProviders();
	return (
		<CenterLayout>
			<Card className="w-full max-w-sm">
				<CardHeader className="mt-2">
					<CardTitle className=" text-2xl  p-1 m-1 item-center justify-center text-center">
						QuickBook
					</CardTitle>
				</CardHeader>
				<CardContent className="grid gap-4 m-6">
					<div className="flex flex-col items-center justify-center">
						{providers &&
							Object.values(providers).map((provider) => (
								<div
									className="inline-flex items-center  m-4 pr-4 pl-4  px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50  rounded p-1 text-sm  text-neutral-900 "
									key={provider.name}
								>
									<img
										src={`https://authjs.dev/img/providers/${provider.id}.svg`}
										loading="lazy"
										alt={`${provider.name} logo`}
										height={24}
										width={24}
									/>

									<Button className="8" onClick={() => signIn(provider.id)}>
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
