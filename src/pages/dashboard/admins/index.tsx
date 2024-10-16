import React from "react"
import {
	RiAddLine,
	RiCommandLine,
	RiDownload2Line,
	RiFilter3Line,
	RiSearch2Line,
} from "@remixicon/react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/shared"
import { useDebounce } from "@/hooks"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

const filters = ["all", "super admin", "view only"] as const
type Filter = (typeof filters)[number]

const Page = () => {
	const [filter, setFilter] = React.useState<Filter>("all")
	const [open, setOpen] = React.useState(false)
	const [query, setQuery] = React.useState("")

	const ref = React.useRef<HTMLInputElement>(null)!

	useDebounce(query, 500)

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
			<Seo title="Admins" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-4 px-4 py-1">
					<div className="flex w-full items-center justify-between">
						<div className="flex w-fit items-center rounded-lg border p-1">
							{filters.map((item) => (
								<button
									key={item}
									onClick={() => setFilter(item)}
									className={`flex h-11 w-[122px] items-center justify-center rounded-lg py-3 text-sm capitalize transition-all duration-500 ${filter === item ? "bg-primary-100 font-semibold text-white" : "bg-transparent font-light text-neutral-600"}`}>
									{item}
								</button>
							))}
						</div>
						<Dialog open={open} onOpenChange={setOpen}>
							<DialogTrigger asChild>
								<Button>
									<RiAddLine /> Add New Admin
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogTitle>Add New Admin</DialogTitle>
								<DialogDescription hidden></DialogDescription>
							</DialogContent>
						</Dialog>
					</div>
					<div className="flex h-full w-full flex-col gap-4 rounded-lg border px-5 py-3">
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
						<div className="h-auto w-full overflow-y-scroll"></div>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
