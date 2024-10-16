import { useQueries } from "@tanstack/react-query"
import { useFormik } from "formik"
import Link from "next/link"
import React from "react"

import { ChartComponent, DataCard, Seo, UserAnalyticsItem } from "@/components/shared"
import { FrequencyFilterProps, frequencyFilter } from "@/config"
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

type InitialValues = {
	apartments: FrequencyFilterProps
	guests: FrequencyFilterProps
	hosts: FrequencyFilterProps
}

const initialValues: InitialValues = {
	apartments: "LAST_12_MONTHS",
	guests: "LAST_12_MONTHS",
	hosts: "LAST_12_MONTHS",
}

const Page = () => {
	const { setFieldValue, values } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values)
		},
	})
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
							<Select value={values.guests} onValueChange={(value) => setFieldValue("guests", value)}>
								<SelectTrigger className="h-10 w-[130px] capitalize">
									<SelectValue />
								</SelectTrigger>
								<SelectContent className="capitalize">
									{frequencyFilter.map((filter) => (
										<SelectItem key={filter.value} value={filter.value}>
											{filter.label}
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
							<Select value={values.hosts} onValueChange={(value) => setFieldValue("hosts", value)}>
								<SelectTrigger className="h-10 w-[130px] capitalize">
									<SelectValue />
								</SelectTrigger>
								<SelectContent className="capitalize">
									{frequencyFilter.map((filter) => (
										<SelectItem key={filter.value} value={filter.value}>
											{filter.label}
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
							<Select
								value={values.apartments}
								onValueChange={(value) => setFieldValue("apartments", value)}>
								<SelectTrigger className="h-10 w-[130px] capitalize">
									<SelectValue />
								</SelectTrigger>
								<SelectContent className="capitalize">
									{frequencyFilter.map((filter) => (
										<SelectItem key={filter.value} value={filter.value}>
											{filter.label}
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
								{users
									.map((user, index) => (
										<UserAnalyticsItem key={user.id} user={user} count={`${(index + 1) * 20}`} />
									))
									.reverse()}
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
								{users
									.map((user, index) => (
										<UserAnalyticsItem key={user.id} user={user} count={`${(index + 1) * 20} Apartments`} />
									))
									.reverse()}
							</div>
						</div>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
