/**
 * @name encodeQueryParams
 * @description This function takes an object of params and returns a string of encoded query params
 * @param params - { [key: string]: string | number | boolean }
 * @returns string
 * @example encodeQueryParams({ name: "John", age: 30 }) => "name=John&age=30"
 */
export const encodeQueryParams = (params: { [key: string]: string | number | boolean }) => {
	return Object.keys(params)
		.filter((key) => params[key] !== null && params[key] !== undefined && params[key] !== "")
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key] as string)}`)
		.join("&")
}

/**
 * @name normalized
 * @description This function takes a path and returns a normalized path
 * @param path - string
 * @returns string
 * @example
 * normalized("http://localhost:3000/users/88feedc7-7167-4284-8db5-7ed1bf0f22e4") => "http://localhost:3000/users"
 * normalized("users/88feedc7-7167-4284-8db5-7ed1bf0f22e4") => "users"
 */
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

/**
 * @name formatDate
 * @param date - The date to be formatted
 * @returns string - The date string in the format of "Jan 1, 2021"
 * @example formatDate("2021-01-01") => "Jan 1, 2021"
 */
export const formatDate = (date: Date | string) => {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(new Date(date))
}

/**
 * @name generateUuid
 * @description This function generates a v4 UUID
 * @returns string - A v4 UUID
 */
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
