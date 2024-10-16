import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	return (
		<>
			<Seo title="Payments" />
			<DashboardLayout>
				<div>Payments</div>
			</DashboardLayout>
		</>
	)
}

export default Page
