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

import { DashboardLayout } from "@/components/layout/dashboard"
import { DataCard, Pagination, Seo } from "@/components/shared"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useDebounce } from "@/hooks"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const filters = ["all", "last 7 days", "last 30 days", "last 60 days", "last 90 days"] as const
const filters2 = ["all", "active", "inactive"] as const
type Filter = (typeof filters)[number] | (string & {})
type Filter2 = (typeof filters2)[number]

const Page = () => {
	const [filter2, setFilter2] = React.useState<Filter2>("all")
	const [filter, setFilter] = React.useState<Filter>("all")
	const [limit, setLimit] = React.useState(10)
	const [query, setQuery] = React.useState("")
	const [page, setPage] = React.useState(1)

	const ref = React.useRef<HTMLInputElement>(null)!

	useDebounce(query, 500)

	const [] = useQueries({
		queries: [],
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

	return (
		<>
			<Seo title="Guests" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-10 overflow-y-auto px-5 py-[35px] lg:px-8">
					<div className="flex w-full flex-col gap-5">
						<div className="hidden w-full items-center justify-between lg:flex">
							<p>Overview</p>
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
					</div>
					<div className="hidden h-[135px] w-full items-center rounded-md border lg:flex">
						<DataCard
							direction="up"
							icon={RiGroupLine}
							label="Total Guests"
							percentage={5.6}
							value={15}
						/>
						<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
						<DataCard
							direction="up"
							icon={RiUserFollowLine}
							label="Active Guests"
							percentage={5.6}
							value={15}
						/>
						<Separator orientation="vertical" className="h-[72px] bg-neutral-300" />
						<DataCard
							direction="down"
							icon={RiUserUnfollowLine}
							label="Inactive Guests"
							percentage={5.6}
							value={15}
						/>
					</div>
					<div className="flex w-full flex-col gap-4">
						<div className="flex h-11 w-fit items-center rounded-lg border border-b p-1">
							{filters2.map((item) => (
								<button
									key={item}
									onClick={() => setFilter2(item)}
									className={`relative flex flex-1 items-center justify-center rounded-md px-4 py-2 text-xs capitalize lg:min-w-[107px] lg:text-sm ${item === filter2 ? "bg-primary-100 text-white" : "bg-transparent"}`}>
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
							<Pagination
								current={page}
								onPageChange={setPage}
								onRowChange={setLimit}
								pageSize={limit}
								total={100}
							/>
						</div>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
