import { useQueries } from "@tanstack/react-query"
import Link from "next/link"
import React from "react"

import { ChartComponent, DataCard, Seo, UserAnalyticsItem } from "@/components/shared"
import { DashboardLayout } from "@/components/layout/dashboard"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { transactions, users } from "@/mock"
import { formatCurrency } from "@/lib"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const filters = ["all", "last 7 days", "last 30 days", "last 60 days", "last 90 days"] as const
type Filter = (typeof filters)[number] | (string & {})

const Page = () => {
	const [filter, setFilter] = React.useState<Filter>("all")
	const [] = useQueries({
		queries: [],
	})

	return (
		<>
			<Seo title="Dashboard" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-4 overflow-y-auto px-8 py-4">
					<div className="flex w-full flex-col gap-5 rounded-lg border p-5">
						<div className="flex w-full items-center justify-between">
							<p>Guests Overview</p>
							<Select value={filter} onValueChange={setFilter}>
								<SelectTrigger className="h-10 w-[130px] capitalize">
									<SelectValue />
								</SelectTrigger>
								<SelectContent className="capitalize">
									{filters.map((filter) => (
										<SelectItem key={filter} value={filter}>
											{filter}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex w-full items-center">
							<DataCard direction="up" label="Total Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="up" label="Active Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="down" label="Inactive Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="down" label="Inactive Guests" percentage={5.6} value={15} />
						</div>
					</div>
					<div className="flex w-full flex-col gap-5 rounded-lg border p-5">
						<div className="flex w-full items-center justify-between">
							<p>Hosts Overview</p>
							<Select value={filter} onValueChange={setFilter}>
								<SelectTrigger className="h-10 w-[130px] capitalize">
									<SelectValue />
								</SelectTrigger>
								<SelectContent className="capitalize">
									{filters.map((filter) => (
										<SelectItem key={filter} value={filter}>
											{filter}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex w-full items-center">
							<DataCard direction="up" label="Total Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="up" label="Active Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="down" label="Inactive Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="down" label="Inactive Guests" percentage={5.6} value={15} />
						</div>
					</div>
					<div className="flex w-full flex-col gap-5 rounded-lg border p-5">
						<div className="flex w-full items-center justify-between">
							<p>Apartments Overview</p>
							<Select value={filter} onValueChange={setFilter}>
								<SelectTrigger className="h-10 w-[130px] capitalize">
									<SelectValue />
								</SelectTrigger>
								<SelectContent className="capitalize">
									{filters.map((filter) => (
										<SelectItem key={filter} value={filter}>
											{filter}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex w-full items-center">
							<DataCard direction="up" label="Total Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="up" label="Active Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="down" label="Inactive Guests" percentage={5.6} value={15} />
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard direction="down" label="Inactive Guests" percentage={5.6} value={15} />
						</div>
					</div>
					<div className="grid w-full grid-cols-2 gap-4">
						<ChartComponent
							data={transactions}
							description="Transactions Report"
							label="amount"
							formatter={(value) => formatCurrency(value, "NGN")}
						/>
						<ChartComponent data={transactions} description="Registered Users" label="users" />
					</div>
					<div className="grid w-full grid-cols-2 gap-4">
						<div className="flex w-full flex-col gap-3 rounded-lg border p-5">
							<div className="flex w-full items-center justify-between">
								<p className="text-sm">Top 5 Guests</p>
								<Link href="/" className="w-fit">
									<Button className="" size="sm" variant="outline">
										See All
									</Button>
								</Link>
							</div>
							<div className="flex w-full flex-col gap-0.5">
								{users.map((user) => (
									<UserAnalyticsItem key={user.id} user={user} />
								))}
							</div>
						</div>
						<div className="flex w-full flex-col gap-3 rounded-lg border p-5">
							<div className="flex w-full items-center justify-between">
								<p className="text-sm">Top 5 Hosts</p>
								<Link href="/" className="w-fit">
									<Button className="" size="sm" variant="outline">
										See All
									</Button>
								</Link>
							</div>
							<div className="flex w-full flex-col gap-0.5">
								{users.map((user) => (
									<UserAnalyticsItem key={user.id} user={user} />
								))}
							</div>
						</div>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
