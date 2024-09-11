import { useQueries } from "@tanstack/react-query"
import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Seo } from "@/components/shared"

const Page = () => {
	const [] = useQueries({
		queries: [],
	})

	return (
		<>
			<Seo title="Dashboard" />
			<DashboardLayout>
				<div className="grid h-full w-full grid-cols-1 grid-rows-4 gap-5">
					<div className="row-span-1 grid h-full w-full grid-cols-4 gap-5">
						{[...Array(4)].map((_, index) => (
							<div key={index} className="h-full w-full rounded-lg bg-neutral-200" />
						))}
					</div>
					<div className="row-span-3 grid h-full w-full grid-cols-2 gap-5">
						{[...Array(2)].map((_, index) => (
							<div key={index} className="h-full w-full rounded-lg bg-neutral-200" />
						))}
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
