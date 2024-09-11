import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { GetAllAmenitiesQuery } from "@/queries"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/shared"

const Page = () => {
	const [page] = React.useState(1)

	const {} = useQuery({
		queryFn: () => GetAllAmenitiesQuery({ limit: 20, page }),
		queryKey: ["get-amenities", page],
		enabled: false,
	})

	return (
		<>
			<Seo title="Amenities" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-8">
					<Link href="/dashboard/amenities/new">
						<Button>New</Button>
					</Link>
					<div className="h-full w-full rounded-xl border p-6"></div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
