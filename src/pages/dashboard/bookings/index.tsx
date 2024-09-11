import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
// import { DataTable } from "@/components/shared"
// import { booking_columns } from "@/config"
import { Seo } from "@/components/shared"
// import { useDebounce } from "@/hooks"

const Page = () => {
	return (
		<>
			<Seo title="Bookings" />
			<DashboardLayout>
				<div className="w-full overflow-y-scroll">Bookings</div>
			</DashboardLayout>
		</>
	)
}

export default Page
