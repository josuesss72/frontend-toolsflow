"use client";
import { useEffect } from "react";
import LogoLoading from "./components/logo/LogoLoading";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/auth/login");
		}, 5000);
	}, []);
	return (
		<main>
			<LogoLoading />
		</main>
	);
}
