import { RiArrowRightSLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { UserProps } from "@/types"
import { getInitials } from "@/lib"

interface UserAnalyticsItemProps {
	user: UserProps
}

export const UserAnalyticsItem = ({ user }: UserAnalyticsItemProps) => {
	return (
		<div className="flex h-14 w-full items-center justify-between">
			<div className="flex items-center gap-3">
				<Avatar className="size-10">
					<AvatarImage src={user.profile_image} />
					<AvatarFallback>{getInitials(`${user.first_name} ${user.last_name}`)}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-1">
					<p className="text-sm font-medium">
						{user.first_name} {user.last_name}
					</p>
					<p className="text-xs">{user.email}</p>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<button className="rounded-full border px-2 py-0.5"></button>
				<Link href={`/${user.id}`} className="grid size-5 place-items-center rounded-full">
					<RiArrowRightSLine size={18} />
				</Link>
			</div>
		</div>
	)
}
