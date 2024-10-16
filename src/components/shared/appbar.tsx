import { RemixiconComponentType, RiArrowDownSLine, RiNotification4Line } from "@remixicon/react"
import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"

type HeaderProps = {
	label: string
	icon: RemixiconComponentType
}

interface Props {
	header: HeaderProps
}

export const Appbar = ({ header }: Props) => {
	const [open, setOpen] = React.useState(false)
	const { icon: Icon, label } = header

	return (
		<nav className="flex h-24 w-full items-center justify-between border-b px-4">
			<div className="flex items-center gap-3">
				<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
					<Icon size={32} />
				</div>
				<h2 className="text-2xl font-medium capitalize">{label}</h2>
			</div>
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
