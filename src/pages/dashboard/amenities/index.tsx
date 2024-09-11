import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	return (
		<>
			<Seo title="amenities" />
			<DashboardLayout>
				<div>Amenities</div>
			</DashboardLayout>
		</>
	)
}

export default Page
