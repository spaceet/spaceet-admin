import { Maybe } from "@/types"

const endpoints = (path?: Maybe<string>) => {
	const amenities = {
		get_all: `/admin/apartment/amenity`,
		get_one: `/admin/apartment/amenity/${path}`,
		create: `/admin/apartment/add-amenity`,
		update: `/admin/apartment/amenity/${path}`,
		delete: `/admin/apartment/amenity/${path}`,
	}

	const apartment = {
		get_all: `/apartment`,
		get_one: `/apartment/${path}`,
		search: `/apartment/search`,
		create: `/apartment`,
		update: `/apartment/${path}`,
		delete: `/apartment/${path}`,
	}

	const auth = {
		create: `/auth/signup`,
		signin: `/auth/signin`,
	}

	const bookings = {
		get_all: `/bookings`,
		get_one: `/bookings/${path}`,
		create: `/bookings`,
		update: `/bookings/${path}`,
		delete: `/bookings/${path}`,
	}

	const payments = {
		get_all: `/payments`,
		get_one: `/payments/${path}`,
		create: `/payments`,
		update: `/payments/${path}`,
		delete: `/payments/${path}`,
	}

	const reviews = {
		get_all: `/reviews`,
		get_one: `/reviews/${path}`,
		create: `/reviews`,
		update: `/reviews/${path}`,
		delete: `/reviews/${path}`,
	}

	const users = {
		get_all: `/admin/users/all`,
		get_one: `/admin/users/view-one/${path}`,
		update: `/users/${path}`,
		delete: `/users/${path}`,
	}

	return {
		amenities,
		auth,
		bookings,
		payments,
		apartment,
		reviews,
		users,
	}
}

export { endpoints }
