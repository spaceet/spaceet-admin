import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	return (
		<>
			<Seo title="Admins" />
			<DashboardLayout>
				<div>Admins</div>
			</DashboardLayout>
		</>
	)
}

export default Page
