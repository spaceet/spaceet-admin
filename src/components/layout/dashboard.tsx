import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { Appbar } from "@/components/shared"
import { dashboard_links } from "@/config"
import { normalized } from "@/lib"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

interface Props extends React.PropsWithChildren {}

export const DashboardLayout = ({ children }: Props) => {
	const [open, setOpen] = React.useState(false)
	const router = useRouter()

	const isOnRoute = (path: string) => normalized(router.pathname) === path

	return (
		<div className="grid h-screen w-screen grid-cols-6">
			<aside className="flex h-full w-full flex-col gap-10 border-r py-4">
				<div className="h-8 w-full px-4">
					<Image src="/spaceet.svg" alt="spaceet" width={182} height={39} />
				</div>
				<div className="flex h-[calc(100%-32px)] w-full flex-col justify-between">
					{dashboard_links.map((item, index) => (
						<div key={index} className="flex w-full flex-col gap-2">
							{item.links.map((link, index) => {
								if (!link.path) {
									return (
										<Dialog key={index} open={open} onOpenChange={setOpen}>
											<DialogTrigger asChild>
												<button className="flex items-center gap-2 p-3 text-sm font-semibold text-red-700 transition-all hover:bg-red-200">
													{link.label}
												</button>
											</DialogTrigger>
											<DialogContent>
												<DialogTitle>Logout</DialogTitle>
												<DialogDescription>Are you sure you want to logout?</DialogDescription>
												<div className="my-4 grid w-full grid-cols-2 gap-5">
													<Button onClick={() => setOpen(false)}>Cancel</Button>
													<Button variant="destructive">Logout</Button>
												</div>
											</DialogContent>
										</Dialog>
									)
								} else {
									return (
										<Link
											key={index}
											href={link.path}
											className={`relative flex items-center gap-2 p-3 text-sm font-semibold transition-all before:absolute before:-left-1 before:top-1/2 before:h-2/3 before:-translate-y-1/2 before:rounded-lg before:bg-primary-100 hover:bg-neutral-200 ${isOnRoute(link.path) ? "text-primary-100 before:w-2" : "before:w-0"}`}>
											{link.label}
										</Link>
									)
								}
							})}
						</div>
					))}
				</div>
			</aside>
			<div className="col-span-5 flex h-full w-full flex-col">
				<Appbar />
				<main className="h-[calc(100%-48px)] w-full overflow-hidden p-4">{children}</main>
			</div>
		</div>
	)
}
