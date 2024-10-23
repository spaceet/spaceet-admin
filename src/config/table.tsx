import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

import { BookingProps, ApartmentProps, UserProps } from "@/types"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const booking_columns: ColumnDef<BookingProps>[] = [
	{
		accessorKey: "property",
		header: "Property",
		cell: ({ row }) => (
			<Link href={`/dashboard/properties/${row.original.property.id}`}>
				{row.original.property.name}
			</Link>
		),
	},
	{
		accessorKey: "user",
		header: "User",
		cell: ({ row }) => (
			<Link href={`/dashboard/users/${row.original.user.id}`}>
				{row.original.user.users_first_name} {row.original.user.users_last_name}
			</Link>
		),
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => <span>{row.original.property.price.cost_per_night}</span>,
	},
	{
		accessorKey: "startDate",
		header: "Check-In",
		cell: ({ row }) => <span>{format(row.original.startDate, "")}</span>,
	},
	{
		accessorKey: "endDate",
		header: "Check-Out",
		cell: ({ row }) => <span>{format(row.original.endDate, "")}</span>,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span hidden className="sr-only">
								Open menu
							</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/bookings/${row.original.id}`}>View</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export const property_columns: ColumnDef<ApartmentProps>[] = [
	{
		accessorKey: "name",
		header: "Name",
		cell: ({ row }) => (
			<Link href={`/dashboard/properties/${row.original.id}`}>{row.original.name}</Link>
		),
	},
	{
		accessorKey: "location",
		header: "Location",
		cell: ({ row }) => <span>{row.original.city}</span>,
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => <span>{row.original.price.cost_per_night}</span>,
	},
	{
		accessorKey: "capacity",
		header: "Capacity",
		cell: ({ row }) => <span>{row.original.capacity}</span>,
	},
	{
		accessorKey: "isAvailable",
		header: "Availability",
		cell: ({ row }) => <span>{row.original.is_available}</span>,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span hidden className="sr-only">
								Open menu
							</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/properties/${row.original.id}`}>View</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export const user_columns: ColumnDef<UserProps>[] = [
	{
		accessorKey: "guestName",
		header: "Guest Name",
		cell: ({ row }) => (
			<span className="capitalize">
				{row.original.users_first_name} {row.original.users_last_name}
			</span>
		),
	},
	{
		accessorKey: "email",
		header: "Email Address",
		cell: ({ row }) => <span className="lowercase">{row.original.users_email}</span>,
	},
	{
		accessorKey: "phone_number",
		header: "Phone Number",
		cell: ({ row }) => <span>{row.original.users_phone_number}</span>,
	},
	{
		accessorKey: "createdOn",
		header: "Date Joined",
		cell: ({ row }) => <span>{format(row.original.users_createdOn, "MMM dd, yyyy | hh:mmaa")}</span>,
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<span
				className={`w-fit rounded px-2 py-1 text-xs ${
					row.original.users_signup_verified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
				}`}>
				{row.original.users_signup_verified ? "Active" : "Inactive"}
			</span>
		),
	},
	{
		id: "actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[200px]">
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/users/edit/${row.original.users_id}`}>Edit Account</Link>
						</DropdownMenuItem>
						<Dialog>
							<DialogTrigger asChild>
								<DropdownMenuItem className="font-normal text-neutral-500">
									Suspend Account
								</DropdownMenuItem>
							</DialogTrigger>
							<DialogContent>
								<DialogTitle></DialogTitle>
								<DialogDescription></DialogDescription>
							</DialogContent>
						</Dialog>
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/users/booking-history/${row.original.users_id}`}>
								Booking History
							</Link>
						</DropdownMenuItem>
						<Dialog>
							<DialogTrigger asChild>
								<DropdownMenuItem className="font-normal text-neutral-500">Delete Account</DropdownMenuItem>
							</DialogTrigger>
							<DialogContent>
								<DialogTitle></DialogTitle>
								<DialogDescription></DialogDescription>
							</DialogContent>
						</Dialog>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export const host_columns: ColumnDef<UserProps>[] = [
	{
		accessorKey: "guestName",
		header: "Guest Name",
		cell: ({ row }) => (
			<span className="capitalize">
				{row.original.users_first_name} {row.original.users_last_name}
			</span>
		),
	},
	{
		accessorKey: "email",
		header: "Email Address",
		cell: ({ row }) => <span className="lowercase">{row.original.users_email}</span>,
	},
	{
		accessorKey: "phone_number",
		header: "Phone Number",
		cell: ({ row }) => <span>{row.original.users_phone_number}</span>,
	},
	{
		accessorKey: "createdOn",
		header: "Date Joined",
		cell: ({ row }) => <span>{format(row.original.users_createdOn, "MMM dd, yyyy | hh:mmaa")}</span>,
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<span
				className={`w-fit rounded px-2 py-1 text-xs ${
					row.original.users_signup_verified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
				}`}>
				{row.original.users_signup_verified ? "Active" : "Inactive"}
			</span>
			// <span
			// 	className={`w-fit rounded px-2 py-1 text-xs ${
			// 		!row.original.users_status || row.original.users_status === "INACTIVE"
			// 			? "bg-red-100 text-red-700"
			// 			: row.original.users_status === "ACTIVE"
			// 				? "bg-green-100 text-green-700"
			// 				: row.original.users_status === "PENDING"
			// 					? "bg-amber-100 text-amber-700"
			// 					: "bg-red-100 text-red-700"
			// 	}`}>
			// 	{!row.original.users_status || row.original.users_status === "INACTIVE"
			// 		? "Inactive"
			// 		: row.original.users_status === "ACTIVE"
			// 			? "Active"
			// 			: row.original.users_status === "PENDING"
			// 				? "Pending"
			// 				: row.original.users_status}
			// </span>
		),
	},
	{
		id: "actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[200px]">
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/hosts/edit/${row.original.users_id}`}>Edit Account</Link>
						</DropdownMenuItem>
						<Dialog>
							<DialogTrigger asChild>
								<DropdownMenuItem className="font-normal text-neutral-500">
									Suspend Account
								</DropdownMenuItem>
							</DialogTrigger>
							<DialogContent>
								<DialogTitle></DialogTitle>
								<DialogDescription></DialogDescription>
							</DialogContent>
						</Dialog>
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/hosts/listings/${row.original.users_id}`}>Listing</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/hosts/reservations/${row.original.users_id}`}>Reservations</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="font-normal text-neutral-500">
							<Link href={`/dashboard/hosts/calendar/${row.original.users_id}`}>Calendar</Link>
						</DropdownMenuItem>
						<Dialog>
							<DialogTrigger asChild>
								<DropdownMenuItem className="font-normal text-neutral-500">Delete Account</DropdownMenuItem>
							</DialogTrigger>
							<DialogContent>
								<DialogTitle></DialogTitle>
								<DialogDescription></DialogDescription>
							</DialogContent>
						</Dialog>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
