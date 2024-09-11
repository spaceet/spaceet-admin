import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	return (
		<>
			<Seo title="Users" />
			<DashboardLayout>
				<div>Users</div>
			</DashboardLayout>
		</>
	)
}

export default Page
