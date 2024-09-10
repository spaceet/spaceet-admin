import { currencyCodes } from "@/config"

export type Maybe<T> = T | null

export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}

export type ValueOf<T> = T[keyof T]

export type NonEmptyArray<T> = [T, ...T[]]

export type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never

export type HttpError = {
	__typename?: "HttpError"
	response: {
		data: {
			error: boolean
			message: string
		}
	}
}

export type HttpResponse<T> = {
	__typename?: "HttpResponse"
	data: T
	error: boolean
	message: string
}

export type Pagination<T> = {
	__typename?: "Pagination"
	data: T[]
	limit: number
	page: number
	total: number
	totalPages: number
}

export type Currency = (typeof currencyCodes)[number]

export type Node = {
	__typename?: "Node"
	id: string
	createdAt: Date | string
	deletedAt: Maybe<Date | string>
	updatedAt: Maybe<Date | string>
}

export type UserProps = Node & {
	__typename?: "User"
	email: string
	firstName: string
	lastName: string
	phoneNumber: string
	role: "user" | "host"
}

export type PropertyProps = Node & {
	__typename?: "Property"
	amenities: AmenityProps[]
	bathrooms: number
	bedrooms: number
	capacity: number
	cleaning_fee: number
	description: string
	images: string[]
	isAvailable: boolean
	location: string
	max_guests: number
	name: string
	owner: UserProps
	price: number
	policies: string[]
	service_charge: number
	slug: string
}

export type AmenityProps = Node & {
	__typename?: "Amenity"
	description: string
	name: string
}

export type BookingProps = Node & {
	__typename?: "Booking"
	property: PropertyProps
	endDate: Date | string
	startDate: Date | string
	user: UserProps
}

export type PaymentProps = Node & {
	__typename?: "Payment"
	amount: number
	booking: BookingProps
	currency: Currency
	paymentDate: Date | string
	status: "pending" | "completed" | "failed"
	transactionId: string
	user: UserProps
}

export type ReviewProps = Node & {
	booking: BookingProps
	comment: string
	property: PropertyProps
	rating: number
	user: UserProps
}

export type NotificationProps = Node & {
	__typename?: "Notification"
	message: string
	title: string
	type: "success" | "error" | "info" | "warning"
}
