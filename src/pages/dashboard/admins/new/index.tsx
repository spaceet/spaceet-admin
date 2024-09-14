import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { CreateAdminDto, CreateAdminMutation } from "@/queries"
import { Seo } from "@/components/shared"

const initialValues: CreateAdminDto = {
	access: "admin",
	email: "",
	firstName: "",
	lastName: "",
	password: "",
}

const Page = () => {
	const {} = useMutation({
		mutationFn: (payload: CreateAdminDto) => CreateAdminMutation(payload),
		mutationKey: ["create-admin"],
		onSuccess: () => {},
		onError: () => {},
	})

	const {} = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<>
			<Seo title="New Admin" />
			<DashboardLayout>
				<div>Admins</div>
			</DashboardLayout>
		</>
	)
}

export default Page
