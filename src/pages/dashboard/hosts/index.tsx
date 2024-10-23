import { useQueries } from "@tanstack/react-query"
import React from "react"
import {
	RiCommandLine,
	RiDownload2Line,
	RiFilter3Line,
	RiGroupLine,
	RiSearch2Line,
	RiUserFollowLine,
	RiUserUnfollowLine,
} from "@remixicon/react"

import { DataCard, DataTable, Pagination, Seo } from "@/components/shared"
import { DashboardLayout } from "@/components/layout/dashboard"
import { Separator } from "@/components/ui/separator"
import { timeline, host_columns } from "@/config"
import { Button } from "@/components/ui/button"
import { GetAllUsersQuery } from "@/queries"
import { TimelineProps } from "@/types"
import { useDebounce } from "@/hooks"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const filters = ["all", "active", "inactive"] as const
type Filter = (typeof filters)[number]

const Page = () => {
	const [timelineFilter, setTimelineFilter] = React.useState<TimelineProps>("LAST_12_MONTHS")
	const [filter, setFilter] = React.useState<Filter>("all")
	const [limit, setLimit] = React.useState(10)
	const [query, setQuery] = React.useState("")
	const [page, setPage] = React.useState(1)

	const ref = React.useRef<HTMLInputElement>(null)!

	useDebounce(query, 500)

	const [{ data: users }] = useQueries({
		queries: [
			{
				queryFn: () => GetAllUsersQuery({ limit, page }),
				queryKey: ["get-all-users", limit, page],
			},
		],
	})

	const handleCommand = (e: KeyboardEvent) => {
		if (e.ctrlKey || e.metaKey) {
			if (e.key === "k") {
				e.preventDefault()
				if (ref.current) {
					ref.current.focus()
				}
			}
		}
	}

	React.useEffect(() => {
		document.addEventListener("keydown", handleCommand)
		return () => document.removeEventListener("keydown", handleCommand)
	})

	if (!users) return null

	return (
		<>
			<Seo title="Guests" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-4 overflow-y-auto px-4 py-1">
					<div className="flex w-full flex-col gap-3">
						<div className="flex w-full items-center justify-between">
							<p>Overview</p>
							<Select
								value={timelineFilter}
								onValueChange={(value: TimelineProps) => setTimelineFilter(value)}>
								<SelectTrigger className="h-10 w-[130px] capitalize">
									<SelectValue />
								</SelectTrigger>
								<SelectContent className="capitalize">
									{timeline.map((filter) => (
										<SelectItem key={filter.value} value={filter.value}>
											{filter.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex h-[135px] w-full items-center rounded-md border">
							<DataCard
								direction="up"
								icon={RiGroupLine}
								label="Total Hosts"
								percentage={5.6}
								value={15}
							/>
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard
								direction="up"
								icon={RiUserFollowLine}
								label="Verified"
								percentage={5.6}
								value={15}
							/>
							<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
							<DataCard
								direction="down"
								icon={RiUserUnfollowLine}
								label="Unverified"
								percentage={5.6}
								value={15}
							/>
						</div>
					</div>
					<div className="flex w-full flex-col gap-4">
						<div className="flex h-11 w-fit items-center rounded-lg border border-b p-1">
							{filters.map((item) => (
								<button
									key={item}
									onClick={() => setFilter(item)}
									className={`relative flex flex-1 items-center justify-center rounded-md px-4 py-2 text-xs capitalize lg:min-w-[107px] lg:text-sm ${item === filter ? "bg-primary-100 text-white" : "bg-transparent"}`}>
									{item}
								</button>
							))}
						</div>
						<div className="w-full rounded-lg border px-5 py-3">
							<div className="flex w-full flex-col items-center justify-between gap-2 py-2 lg:flex-row">
								<div className="flex h-9 w-full max-w-[389px] items-center gap-2 rounded-md border px-3 py-[10px]">
									<RiSearch2Line size={16} />
									<input
										ref={ref}
										value={query}
										onChange={(e) => setQuery(e.target.value)}
										className="flex-1 bg-transparent text-sm outline-none"
										placeholder="Search here..."
									/>
									<div className="flex h-7 w-[42px] items-center gap-2 rounded bg-neutral-200 p-1">
										<RiCommandLine size={16} /> K
									</div>
								</div>
								<div className="flex w-full items-center gap-4 lg:w-fit">
									<Button className="h-9 w-full lg:w-fit" variant="outline">
										<RiDownload2Line size={16} />
										Export Data
									</Button>
									<Button className="h-9 w-full lg:w-fit" variant="outline">
										<RiFilter3Line size={16} />
										Filter
									</Button>
								</div>
							</div>
							<DataTable columns={host_columns} data={users.data.data} />
							<Pagination
								current={page}
								onPageChange={setPage}
								onRowChange={setLimit}
								pageSize={limit}
								total={users.data.meta.itemCount}
							/>
						</div>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
