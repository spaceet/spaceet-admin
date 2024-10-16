import { amenities_list, apartment_types, currencyCodes } from "@/config"

export type Maybe<T> = T | null

export type Undefined<T> = T | undefined

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
	meta: {
		hasNextPage: boolean
		hasPreviousPage: boolean
		itemCount: number
		page: number
		pageCount: number
		take: number
	}
}

export type Currency = (typeof currencyCodes)[number]

export type ApartmentType = (typeof apartment_types)[number] | (string & {})

export type Node = {
	__typename?: "Node"
	id: string
	createdOn: Date | string
	deletedBy?: Maybe<string>
	deletedOn?: Maybe<Date | string>
	isDeleted?: boolean
	updatedBy?: Maybe<string>
	updatedOn?: Maybe<Date | string>
}

export type UserProps = Node & {
	__typename?: "User"
	access_token: string
	bio: Maybe<string>
	email: string
	first_name: string
	isVerified: boolean
	last_name: string
	location: Maybe<string>
	phone_number: string
	profile_image: Undefined<string>
	rating: number
	signup_verified: boolean
	status: "ACTIVE" | "INACTIVE" | "PENDING"
	user_type: "USER" | "HOST"
}
export type AdminProps = Node & {
	__typename?: "Admin"
	email: string
	firstName: string
	lastName: string
	access: "admin" | "editor" | "superadmin"
}

export type ApartmentProps = Node & {
	__typename?: "Property"
	address: string
	amenities: AmenityProps[]
	capacity: number
	city: string
	cover_photo: string
	current_location: LocationProps
	description: string
	host: UserProps
	images: string[]
	is_approved: boolean
	is_available: boolean
	is_complete: boolean
	maximum_number_of_guests: number
	name: string
	number_of_bathrooms: number
	number_of_bedrooms: number
	policy: PolicyProps
	postal_code: string
	price: PricingProps
	property_verification_file: string
	property_verification_type: string
	type: ApartmentType | (string & {})
	rating: string
	reviews: ReviewProps[]
	state: string
	video: string
}

export type AmenityProps = Node & {
	__typename?: "Amenity"
	description: string
	icon: AmenitiesIconName
	name: string
	type: "BASIC" | "SPECIAL" | "OTHER"
}

export type BookingProps = Node & {
	__typename?: "Booking"
	property: ApartmentProps
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

export type LocationProps = {
	coordinates: [{ 0: number }, { 1: number }]
	type: "Point"
}

export type PricingProps = Node & {
	__typename?: "Pricing"
	cleaning_fee: number
	cost_per_night: number
	discount_percentage: number
	service_charge: number
}

export type PolicyProps = Node & {
	__typename?: "Policy"
	age_limit: number
	cancellation_and_repayment_conditions: string
	checkin_time: Maybe<string>
	checkout_time: Maybe<string>
	is_age_limit: boolean
	is_pet_allowed: boolean
	number_of_pets_allowed: number
}

export type ReviewProps = Node & {
	booking: BookingProps
	comment: string
	property: ApartmentProps
	rating: number
	user: UserProps
}

export type NotificationProps = Node & {
	__typename?: "Notification"
	message: string
	title: string
	type: "success" | "error" | "info" | "warning"
}

export type AmenitiesIconName = (typeof amenities_list)[number]

export type ChartDataProps = {
	month: string
	amount: number
	users: number
}
