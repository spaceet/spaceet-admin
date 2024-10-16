import { RiArrowDownSLine, RiNotification4Line } from "@remixicon/react"
import { useRouter } from "next/router"
import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useAppHeader } from "./app-header"
import { Separator } from "../ui/separator"

export const Appbar = () => {
	const [open, setOpen] = React.useState(false)
	const router = useRouter()

	return (
		<nav className="flex h-24 w-full items-center justify-between border-b px-4">
			{useAppHeader(router.pathname)}
			<div className="flex items-center gap-3">
				<button className="relative grid size-10 place-items-center rounded-full border">
					<span className="absolute right-0.5 top-0.5 size-2 rounded-full bg-red-600"></span>
					<RiNotification4Line size={20} />
				</button>
				<Separator orientation="vertical" className="h-7" />
				<button onClick={() => setOpen(!open)} className="flex items-center gap-2">
					<Avatar className="size-10">
						<AvatarImage src="" alt="" />
						<AvatarFallback className="bg-black text-white">SO</AvatarFallback>
					</Avatar>
					<div className="flex flex-col items-start">
						<p className="text-sm font-medium">Samson Okunola</p>
						<p className="text-xs text-neutral-400">samson.okunola@bepeerless.co</p>
					</div>
					<RiArrowDownSLine
						className={`size-6 text-neutral-500 transition-all duration-500 ${open ? "rotate-180" : ""}`}
					/>
				</button>
			</div>
		</nav>
	)
}
