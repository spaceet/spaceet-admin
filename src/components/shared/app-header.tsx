import React from "react"
import {
	RiAdminLine,
	RiBarChartBoxLine,
	RiBookMarkedLine,
	RiHotelBedLine,
	RiMoneyDollarCircleLine,
	RiSettingsLine,
	RiUserLine,
	RiUserLocationLine,
} from "@remixicon/react"

import { normalized } from "@/lib"

export const useAppHeader = (pathname: string) => {
	const handleHeaderChange = (pathname: string) => {
		const normalizedPathname = normalized(pathname)
		switch (normalizedPathname) {
			case "/dashboard":
				return <AnalyticsHeader />
			case "/dashboard/users":
				return <GuestsHeader />
			case "/dashboard/hosts":
				return <HostsHeader />
			case "/dashboard/apartments":
				return <ListingsHeader />
			case "/dashboard/bookings":
				return <BookingsHeader />
			case "/dashboard/payments":
				return <PaymentHeader />
			case "/dashboard/admins":
				return <AdminsHeader />
			case "/dashboard/settings":
				return <SettingsHeader />
			default:
				return <AnalyticsHeader />
		}
	}

	const header = React.useMemo(() => {
		return handleHeaderChange(pathname)
	}, [pathname])

	return header
}

const AnalyticsHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiBarChartBoxLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Analytics</h2>
		</div>
	)
}

const GuestsHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiUserLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Guests</h2>
		</div>
	)
}

const HostsHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiUserLocationLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Hosts</h2>
		</div>
	)
}

const ListingsHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiHotelBedLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Listings</h2>
		</div>
	)
}

const BookingsHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiBookMarkedLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Bookings</h2>
		</div>
	)
}

const PaymentHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiMoneyDollarCircleLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Payment</h2>
		</div>
	)
}

const AdminsHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiAdminLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Admins</h2>
		</div>
	)
}

const SettingsHeader = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid size-12 place-items-center rounded-full bg-neutral-100">
				<RiSettingsLine size={32} />
			</div>
			<h2 className="text-2xl font-medium capitalize">Settings</h2>
		</div>
	)
}
