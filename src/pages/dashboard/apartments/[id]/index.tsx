import { useRouter } from "next/router"
import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"

const Page = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<DashboardLayout>
			<div>Apartment {id}</div>
		</DashboardLayout>
	)
}

export default Page
