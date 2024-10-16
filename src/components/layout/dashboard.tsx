import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Appbar } from "@/components/shared"
import { dashboard_links } from "@/config"
import { normalized } from "@/lib"

interface Props extends React.PropsWithChildren {}

export const DashboardLayout = ({ children }: Props) => {
	const router = useRouter()

	const isOnRoute = (path: string) => normalized(router.pathname) === path

	const header = React.useMemo(() => {
		const route = normalized(router.pathname)
		const links = dashboard_links.flatMap((item) => item.links)
		return links.find((link) => link.path === route)!
	}, [router.pathname])

	return (
		<div className="flex h-screen w-screen items-start">
			<aside className="flex h-full w-[270px] flex-col gap-10 border-r">
				<div className="flex h-24 w-full flex-col items-center justify-center border-b px-4">
					<Image src="/spaceet.svg" alt="spaceet" width={182} height={39} />
				</div>
				<div className="flex h-[calc(100%-96px)] w-full flex-col gap-6 px-6">
					{dashboard_links.map((item, index) => (
						<div key={index} className="flex w-full flex-col gap-4">
							<p className="text-xs uppercase text-neutral-400">{item.section}</p>
							<div className="flex w-full flex-col gap-2">
								{item.links.map(({ icon: Icon, label, path }, index) => (
									<Link
										key={index}
										href={path}
										className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all ${isOnRoute(path) ? "bg-neutral-200" : "bg-transparent"}`}>
										<Icon size={20} />
										{label}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</aside>
			<div className="flex h-full w-full flex-1 flex-col">
				<Appbar header={header} />
				<main className="h-[calc(100%-48px)] w-full overflow-hidden p-4">{children}</main>
			</div>
		</div>
	)
}
