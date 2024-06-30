"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Landing } from "@/components/landing";

export default function Home() {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push("/dashboard");
		}
	}, [session, router]); // Add router.isReady to dependency array

	if (session) {
		return null; // Optionally render a loading indicator or nothing while redirecting
	}

	return <Landing />;
}
