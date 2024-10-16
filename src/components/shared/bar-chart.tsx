import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import React from "react"

import { FrequencyFilterProps, frequencyFilter } from "@/config"
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartDataProps } from "@/types"

interface Props {
	data: ChartDataProps[]
	description: string
	label: string
	formatter?: (value: any, index: number) => string
}

export const ChartComponent = ({ data, description, label, formatter }: Props) => {
	const [filter, setFilter] = React.useState<FrequencyFilterProps>("LAST_12_MONTHS")

	const chartConfig = {
		users: {
			label,
			color: "#e2e4e9",
		},
	} satisfies ChartConfig

	return (
		<div className="flex w-full flex-col gap-7 rounded-lg border px-7 py-6">
			<div className="flex w-full items-center justify-between">
				<p className="text-sm font-medium">{description}</p>
				<div className="flex h-9 w-fit items-center justify-center rounded-lg border border-[#e4e7ec] bg-[#f0f3f4]">
					{frequencyFilter.map((item, index) => (
						<button
							key={index}
							onClick={() => setFilter(item.value as FrequencyFilterProps)}
							className={`h-full w-fit rounded-lg px-3 text-sm font-semibold ${item.value === filter ? "border border-[#d0d5dd] bg-white" : ""}`}>
							{item.label}
						</button>
					))}
				</div>
			</div>
			<ChartContainer config={chartConfig} className="w-full font-body">
				<BarChart accessibilityLayer data={data}>
					<CartesianGrid vertical={false} />
					<XAxis
						axisLine={false}
						dataKey="month"
						tickLine={false}
						tickMargin={10}
						color="#475467"
						tickFormatter={(value) => String(value).slice(0, 3)}
					/>
					<YAxis axisLine={false} tickFormatter={formatter} tickLine={false} />
					<Bar dataKey={label} fill={chartConfig.users.color} radius={[4, 4, 0, 0]} />
					<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
				</BarChart>
			</ChartContainer>
		</div>
	)
}
