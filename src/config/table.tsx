import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

import { BookingProps, ApartmentProps, UserProps } from "@/types"
import { Button } from "@/components/ui/button"
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
				{row.original.user.first_name} {row.original.user.last_name}
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
						<DropdownMenuItem>
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
						<DropdownMenuItem>
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
			<span>
				{row.original.first_name} {row.original.last_name}
			</span>
		),
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: ({ row }) => <span>{row.original.email}</span>,
	},
	{
		accessorKey: "phone_number",
		header: "Phone Number",
		cell: ({ row }) => <span>{row.original.phone_number}</span>,
	},
	{
		accessorKey: "createdOn",
		header: "Email",
		cell: ({ row }) => <span>{format(row.original.createdOn, "MMM dd, yyyy | hh:mmaa")}</span>,
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<span
				className={`w-fit rounded px-2 py-1 ${row.original.status ? "bg-green-100 text-green-700" : "bg-error-100 text-error-500"}`}>
				{row.original.status ? "Active" : "Inactive"}
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
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<Link href={`/dashboard/users/edit/${row.original.id}`}>Edit Account</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href={`/dashboard/users/${row.original.id}`}>Suspend Account</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href={`/dashboard/users/booking-history/${row.original.id}`}>Booking History</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href={`/dashboard/users/${row.original.id}`}>Delete Account</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
