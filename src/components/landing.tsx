import Link from "next/link";
import type { JSX, SVGProps } from "react";
import { BotIcon } from "./assets/BotIcon";
import { CombineIcon } from "./assets/CombineIcon";
import { ScalingIcon } from "./assets/scalingicon";
import { InfoIcon } from "./assets/InfoIcon";

export function Landing() {
	return (
		<div className="flex flex-col min-h-[100dvh] max-h-screen">
			<header className="px-4 lg:px-6 h-14 flex items-center m-2">
				<Link
					href="#"
					className="flex items-center justify-center"
					prefetch={false}
				>
					<MountainIcon className="h-6 w-6" />
					<span className="sr-only">QuickBook</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Features
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Pricing
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						About
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Contact
					</Link>
				</nav>
			</header>
			<div className="container mx-auto">
				<main className="flex-1">
					<section className="w-full">
						<div className="container px-4 md:px-6">
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<div className="space-y-2">
									<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
										QuickBook
									</div>
									<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
										Streamline Your Workflows
									</h2>
									<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										QuickBook provides the tools you need to automate your
										business processes, collaborate with your team, and scale
										your operations.
									</p>
								</div>
								<div className="flex justify-center items-center">
									<div className="container mx-auto flex-col justify-center max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
										<div className="flex flex-col justify-center space-y-4">
											<ul className="grid gap-6">
												<li>
													<div className="grid gap-1">
														<div className="flex items-center gap-2">
															<BotIcon className="h-6 w-6 text-primary" />
															<h3 className="text-xl font-bold">Automation</h3>
														</div>
														<p className="text-muted-foreground">
															Streamline your workflows with our powerful
															automation tools.
														</p>
													</div>
												</li>
												<li>
													<div className="grid gap-1">
														<div className="flex items-center gap-2">
															<CombineIcon className="h-6 w-6 text-primary" />
															<h3 className="text-xl font-bold">
																Collaboration
															</h3>
														</div>
														<p className="text-muted-foreground">
															Collaborate seamlessly with your team using our
															built-in tools.
														</p>
													</div>
												</li>
												<li>
													<div className="grid gap-1">
														<div className="flex items-center gap-2">
															<ScalingIcon className="h-6 w-6 text-primary" />
															<h3 className="text-xl font-bold">Scalability</h3>
														</div>
														<p className="text-muted-foreground">
															Scale your business with ease using our flexible
															platform.
														</p>
													</div>
												</li>
												<li>
													<div className="grid gap-1">
														¯
														<div className="flex items-center gap-2">
															<InfoIcon className="h-6 w-6 text-primary" />
															<h3 className="text-xl font-bold">Analytics</h3>
														</div>
														<p className="text-muted-foreground">
															Gain valuable insights with our advanced analytics
															tools.
														</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pb-6 md:pb-24 lg:pb-32">
						<div className="container grid items-center gap-4 px-4 text-center md:px-6">
							<div className="space-y-3">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Take Your Business to the Next Level
								</h2>
								<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Sign up for QuickBook today and start streamlining your
									operations.
								</p>
							</div>
							<div className="mx-auto w-full max-w-sm space-y-2">
								<Link
									href="/dashboard"
									className="bg-black text-white inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Sign Up
								</Link>
								<p className="text-xs text-muted-foreground">
									Start your free trial today. No credit card required.
								</p>
							</div>
						</div>
					</section>
				</main>
			</div>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-auto">
				<p className="text-xs text-muted-foreground">
					&copy; 2024 QuickBook. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Terms of Service
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}

function MountainIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>MountainIcon</title>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
