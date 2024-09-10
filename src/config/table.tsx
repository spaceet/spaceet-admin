import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

import { BookingProps, PropertyProps, UserProps } from "@/types"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const booking_columns: ColumnDef<BookingProps>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
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
				{row.original.user.firstName} {row.original.user.lastName}
			</Link>
		),
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => <span>{row.original.property.price}</span>,
	},
	{
		accessorKey: "startDate",
		header: "Check-In",
		cell: ({ row }) => <span>{formatDate(row.original.startDate)}</span>,
	},
	{
		accessorKey: "endDate",
		header: "Check-Out",
		cell: ({ row }) => <span>{formatDate(row.original.endDate)}</span>,
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

export const property_columns: ColumnDef<PropertyProps>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
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
		cell: ({ row }) => <span>{row.original.location}</span>,
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => <span>{row.original.price}</span>,
	},
	{
		accessorKey: "capacity",
		header: "Capacity",
		cell: ({ row }) => <span>{row.original.capacity}</span>,
	},
	{
		accessorKey: "isAvailable",
		header: "Available",
		cell: ({ row }) => <span>{row.original.isAvailable}</span>,
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
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "firstName",
		header: "First Name",
		cell: ({ row }) => <span>{row.original.firstName}</span>,
	},
	{
		accessorKey: "lastName",
		header: "Last Name",
		cell: ({ row }) => <span>{row.original.lastName}</span>,
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: ({ row }) => <span>{row.original.email}</span>,
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
							<Link href={`/dashboard/users/${row.original.id}`}>View</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
