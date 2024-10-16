import {
	RiAdminLine,
	RiBarChartBoxLine,
	RiBookMarkedLine,
	RiHotelBedLine,
	RiLightbulbFlashLine,
	RiMoneyDollarCircleLine,
	RiSettingsLine,
	RiUserLine,
	RiUserLocationLine,
} from "@remixicon/react"

export const dashboard_links = [
	{
		section: "menu",
		links: [
			{
				label: "Analytics",
				path: "/dashboard",
				icon: RiBarChartBoxLine,
			},
			{
				label: "Guests",
				path: "/dashboard/users",
				icon: RiUserLine,
			},
			{
				label: "Hosts",
				path: "/dashboard/hosts",
				icon: RiUserLocationLine,
			},
			{
				label: "Listings",
				path: "/dashboard/apartments",
				icon: RiHotelBedLine,
			},
			{
				label: "Bookings",
				path: "/dashboard/bookings",
				icon: RiBookMarkedLine,
			},
			{
				label: "Payments",
				path: "/dashboard/payments",
				icon: RiMoneyDollarCircleLine,
			},
			{
				label: "Amenities",
				path: "/dashboard/amenities",
				icon: RiLightbulbFlashLine,
			},
		],
	},
	{
		section: "others",
		links: [
			{
				label: "Admins",
				path: "/dashboard/admins",
				icon: RiAdminLine,
			},
			{
				label: "Settings & Configuration",
				path: "/dashboard/settings",
				icon: RiSettingsLine,
			},
		],
	},
]
