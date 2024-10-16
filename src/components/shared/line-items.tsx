import { RiArrowRightSLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { generateRandomColor, getInitials } from "@/lib"
import { UserProps } from "@/types"

interface UserAnalyticsItemProps {
	user: UserProps
	count?: string
}

export const UserAnalyticsItem = ({ user, count }: UserAnalyticsItemProps) => {
	const color = React.useMemo(() => generateRandomColor(), [])

	return (
		<div className="flex h-14 w-full items-center justify-between">
			<div className="flex items-center gap-3">
				<Avatar className="size-10">
					<AvatarImage src="" />
					<AvatarFallback style={{ background: `${color}25`, color }} className="text-lg font-semibold">
						{getInitials(user.first_name)}
					</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-1">
					<p className="text-sm font-medium">
						{user.first_name} {user.last_name}
					</p>
					<p className="text-xs">{user.email}</p>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<button className="rounded-full border px-2 py-0.5 text-[10px]">{count}</button>
				<Link href={`/${user.id}`} className="grid size-5 place-items-center rounded-full">
					<RiArrowRightSLine size={18} />
				</Link>
			</div>
		</div>
	)
}
