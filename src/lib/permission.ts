import { AdminProps } from "@/types"

enum PermissionLevel {
	Create = "Create",
	Delete = "Delete",
	Edit = "Edit",
	ManagePermissions = "Manage Permissions",
	ManageRoles = "Manage Roles",
	ManageUsers = "Manage Users",
	View = "View",
}

type PermissionProps = {
	admin: PermissionLevel[]
	editor: PermissionLevel[]
	superadmin: PermissionLevel[]
}

const RolePermissions: PermissionProps = {
	admin: [
		PermissionLevel.View,
		PermissionLevel.Edit,
		PermissionLevel.Create,
		PermissionLevel.Delete,
	],
	editor: [PermissionLevel.View, PermissionLevel.Edit, PermissionLevel.Create],
	superadmin: [
		PermissionLevel.View,
		PermissionLevel.Edit,
		PermissionLevel.Create,
		PermissionLevel.Delete,
		PermissionLevel.ManagePermissions,
		PermissionLevel.ManageRoles,
		PermissionLevel.ManageUsers,
	],
} as const

interface HasPermission {
	admin: AdminProps
	permission: PermissionLevel
}

const hasPermission = ({ admin, permission }: HasPermission) => {
	const permissions = RolePermissions[admin.access]
	return permissions.includes(permission)
}

export { PermissionLevel, RolePermissions, hasPermission }
