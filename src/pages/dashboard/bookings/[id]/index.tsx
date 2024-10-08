import { useRouter } from "next/router"
import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<>
			<Seo title="Booking" />
			<DashboardLayout>
				<div>Booking {id}</div>
			</DashboardLayout>
		</>
	)
}

export default Page
