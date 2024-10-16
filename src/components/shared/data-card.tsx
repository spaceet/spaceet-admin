import { RemixiconComponentType } from "@remixicon/react"
import React from "react"

import { TrendDown, TrendUp } from "@/assets/icons"
import { cn } from "@/lib"

type ArrowDirection = "down" | "up"

interface Props {
	direction: ArrowDirection
	icon?: RemixiconComponentType
	label: string
	percentage: number
	value: number | string
	className?: string
}

const pillClasses: Record<ArrowDirection, string> = {
	down: "bg-red-100 border-red-300 text-red-800",
	up: "bg-green-100 border-green-300 text-green-800",
}

export const DataCard = ({ direction, icon: Icon, label, percentage, value, className }: Props) => {
	return (
		<div
			className={cn(
				`flex w-full flex-1 flex-shrink-0 items-start gap-3 px-6 ${Icon ? "px-6" : "first:pl-0 last:pr-0"}`,
				className
			)}>
			{Icon && (
				<div className="grid size-6 place-items-center rounded-md bg-neutral-200 lg:size-10">
					<Icon className="size-4 lg:size-6" />
				</div>
			)}
			<div className="flex flex-col gap-3">
				<p className="text-xs text-neutral-400 lg:text-sm">{label}</p>
				<div className="flex items-center gap-3">
					<p className="text-xl font-medium lg:text-[32px]">{value}</p>
					<div
						className={`${pillClasses[direction]} flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium lg:text-sm`}>
						{direction === "down" ? <TrendDown /> : <TrendUp />}
						&nbsp;
						{percentage}%
					</div>
				</div>
			</div>
		</div>
	)
}
