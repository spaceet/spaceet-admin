import { TimelineProps } from "@/types"

export type TimelineFilter = {
	label: string
	value: TimelineProps | (string & {})
}
export const timeline: TimelineFilter[] = [
	{ label: "last year", value: "LAST_12_MONTHS" },
	{ label: "last 120 days", value: "LAST_6_MONTHS" },
	{ label: "last 30 days", value: "THIS_MONTH" },
	{ label: "last 7 days", value: "LAST_7_DAYS" },
	{ label: "today", value: "TODAY" },
	{ label: "yesterday", value: "YESTERDAY" },
]
