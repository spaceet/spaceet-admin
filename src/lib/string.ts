import { Currency } from "@/types"

export const formatCurrency = (amount: number, currency: Currency = "USD") => {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: currency,
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
		currencyDisplay: "symbol",
	}).format(amount)
}

export const encodeQueryParams = (params: { [key: string]: string | number | boolean }) => {
	return Object.keys(params)
		.filter((key) => params[key] !== null && params[key] !== undefined && params[key] !== "")
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key] as string)}`)
		.join("&")
}

export const normalized = (path?: string): string => {
	let normalPath = ""
	if (path) {
		if (path.split("/").length > 2) {
			const pathParts = `/${path.split("/")[1]}/${path.split("/")[2]}`
			normalPath = pathParts
		} else {
			normalPath = path
		}
	}
	return normalPath
}

export const formatDate = (date: Date | string) => {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(new Date(date))
}

export const generateUuid = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0
		const v = c === "x" ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}

export const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export const capitalizeWords = (value: string) => {
	const words = value.split(" ")
	return words.map((word) => capitalize(word)).join(" ")
}

export const getInitials = (value: string) => {
	return value
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase())
		.join("")
}

export const generateRandomColor = () => {
	const letters = "0123456789ABCDEF"
	let color = "#"
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
