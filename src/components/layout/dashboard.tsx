import Link from "next/link"
import React from "react"

import { dashboard_links } from "@/config"

interface Props extends React.PropsWithChildren {}

export const DashboardLayout = ({ children }: Props) => {
	return (
		<div className="grid h-screen w-screen grid-cols-6 gap-4">
			<aside className="flex h-full w-full flex-col gap-10 p-4">
				<div className="h-8 w-full"></div>
				<div className="flex w-full flex-col gap-2">
					{dashboard_links.map((link, index) => (
						<Link key={index} href={link.path} className="rounded-md p-2 font-medium hover:bg-slate-200">
							{link.label}
						</Link>
					))}
				</div>
			</aside>
			<div className="col-span-5 flex h-full w-full flex-col">
				<div className="h-[72px] w-full"></div>
				<main className="h-[calc(100%-48px)] w-full overflow-hidden p-4">{children}</main>
			</div>
		</div>
	)
}
