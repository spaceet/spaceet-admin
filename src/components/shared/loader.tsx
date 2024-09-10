import { useRouter } from "next/router"
import React from "react"

export const Loader = () => {
	const [loading, setLoading] = React.useState(false)
	const router = useRouter()

	React.useEffect(() => {
		const handleStart = () => setLoading(true)
		const handleComplete = () => setLoading(false)

		router.events.on("routeChangeStart", handleStart)
		router.events.on("routeChangeComplete", handleComplete)
		router.events.on("routeChangeError", handleComplete)

		return () => {
			router.events.off("routeChangeStart", handleStart)
			router.events.off("routeChangeComplete", handleComplete)
			router.events.off("routeChangeError", handleComplete)
		}
	}, [router])

	return loading ? <Loading /> : null
}

const Loading = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
		</div>
	)
}
