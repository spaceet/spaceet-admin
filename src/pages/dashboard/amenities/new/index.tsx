import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import React from "react"

import { DashboardLayout } from "@/components/layout/dashboard"
import { AddAmenityDto, AddAmenityMutation } from "@/queries"
import { Icon, Seo, Spinner } from "@/components/shared"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddAmenitySchema } from "@/schema"
import { amenities_icons } from "@/config"
import { queryClient } from "@/providers"
import { HttpError } from "@/types"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const initialValues: AddAmenityDto = {
	description: "",
	icon: "",
	name: "",
	type: "BASIC",
}

const Page = () => {
	const router = useRouter()

	const { isPending } = useMutation({
		mutationFn: (apyload: AddAmenityDto) => AddAmenityMutation(apyload),
		mutationKey: ["add-amenity"],
		onSuccess: (data) => {
			console.log(data)
			router.push("/dashboard/amenities").then(() => {
				queryClient.invalidateQueries({ queryKey: ["get-amenities"] })
			})
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			console.error(message)
		},
	})

	const { errors, handleChange, handleSubmit, setFieldValue } = useFormik({
		initialValues,
		validationSchema: AddAmenitySchema,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<>
			<Seo title="New Amenity" />
			<DashboardLayout>
				<div className="h-full w-full">
					<div className="w-full max-w-[446px]">
						<form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
							<Input name="name" onChange={handleChange} label="Name" error={errors.name} />
							<Textarea
								name="description"
								onChange={handleChange}
								label="Description"
								height="h-44"
								error={errors.description}
							/>
							<div>
								<Label htmlFor="icon">Icon</Label>
								<Select onValueChange={(value) => setFieldValue("icon", value)}>
									<SelectTrigger>
										<SelectValue placeholder="Select an icon" />
									</SelectTrigger>
									<SelectContent>
										{amenities_icons.map(({ label }) => (
											<SelectItem key={label} value={label}>
												<div className="flex items-center gap-2">
													<Icon name={label} />
													<span className="">{label}</span>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{errors.icon && <span className="text-sm text-red-500">{errors.icon}</span>}
							</div>
							<div>
								<Label htmlFor="type">Amenity Class</Label>
								<Select onValueChange={(value) => setFieldValue("type", value)}>
									<SelectTrigger>
										<SelectValue placeholder="Select amenity class" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="BASIC">Basic</SelectItem>
										<SelectItem value="SPECIAL">Special</SelectItem>
										<SelectItem value="OTHERS">Others</SelectItem>
									</SelectContent>
								</Select>
								{errors.type && <span className="text-sm text-red-500">{errors.type}</span>}
							</div>
							<Button type="submit" disabled={isPending}>
								{isPending ? <Spinner /> : "Save"}
							</Button>
						</form>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Page
