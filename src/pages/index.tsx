import { useRouter } from "next/router"
import { useFormik } from "formik"
import Image from "next/image"
import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Seo } from "@/components/shared"
import { SignInDto } from "@/queries"

const initialValues: SignInDto = {
	email: "",
	password: "",
}

const Home = () => {
	const router = useRouter()

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: async (values) => {
			console.log(values)
			router.push("/dashboard")
		},
	})

	return (
		<>
			<Seo title="Sign In" />
			<main className="grid h-screen w-screen place-items-center">
				<div className="flex w-full max-w-[400px] flex-col items-center gap-20">
					<Image src="/spaceet.svg" alt="spaceet" width={280} height={60} />
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
						<Input type="email" name="email" onChange={handleChange} label="Email" />
						<Input type="password" name="password" onChange={handleChange} label="Password" />
						<Button type="submit">Sign In</Button>
					</form>
				</div>
			</main>
		</>
	)
}

export default Home
