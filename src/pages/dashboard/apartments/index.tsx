import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	return (
		<>
			<Seo title="Apartments" />
			<DashboardLayout>
				<div>Apartments</div>
			</DashboardLayout>
		</>
	)
}

export default Page
