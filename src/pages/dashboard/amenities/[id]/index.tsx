import { useRouter } from "next/router"
import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<>
			<Seo title="Amenities" />
			<DashboardLayout>
				<div>Amenities {id}</div>
			</DashboardLayout>
		</>
	)
}

export default Page
