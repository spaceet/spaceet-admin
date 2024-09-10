import { useRouter } from "next/router"
import React from "react"

import { Button } from "@/components/ui/button"

const Home = () => {
	const router = useRouter()

	return (
		<main className="h-screen w-screen">
			<div className="">
				<Button onClick={() => router.push("/dashboard")}>Login</Button>
			</div>
		</main>
	)
}

export default Home
