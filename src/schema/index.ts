import * as Yup from "yup"

import { AddAmenityDto } from "@/queries"

const AddAmenitySchema: Yup.ObjectSchema<AddAmenityDto> = Yup.object({
	description: Yup.string().required("Amenity description is required!"),
	icon: Yup.string().required("Amenity icon is required!"),
	name: Yup.string().required("Amenity name is required!"),
	type: Yup.mixed<"BASIC" | "SPECIAL" | "OTHER">()
		.required("Amenity type is required")
		.oneOf(["BASIC", "SPECIAL", "OTHER"], "Amenity type is invalid!"),
})

export { AddAmenitySchema }
