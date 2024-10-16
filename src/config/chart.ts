export const frequencyFilter = [
	{ label: "12 months", value: "LAST_12_MONTHS" },
	{ label: "30 days", value: "THIS_MONTH" },
	{ label: "7 days", value: "THIS_WEEK" },
	{ label: "24 hours", value: "TODAY" },
]

export type FrequencyFilterProps = "LAST_12_MONTHS" | "THIS_MONTH" | "THIS_WEEK" | "TODAY"

export const DataKeyConfig: Record<FrequencyFilterProps, string> = {
	LAST_12_MONTHS: "month",
	THIS_MONTH: "days",
	THIS_WEEK: "days",
	TODAY: "hours",
}
