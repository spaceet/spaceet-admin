import { AmenitiesIconName, AmenityProps, HttpResponse, Pagination } from "@/types"
import { PaginationDto } from "./property"
import { endpoints } from "@/config"
import { axios } from "@/lib"

export interface AddAmenityDto {
	description: string
	icon: AmenitiesIconName | (string & {})
	name: string
}

const GetAllAmenitiesQuery = async ({ limit, page }: PaginationDto) => {
	return await axios
		.get<Pagination<AmenityProps[]>>(endpoints().amenities.get_all, {
			params: { limit, page },
		})
		.then((res) => res.data)
}

const GetAmenityQuery = async (id: string) => {
	return await axios
		.get<HttpResponse<AmenityProps>>(endpoints(id).amenities.get_one)
		.then((res) => res.data)
}

const AddAmenityMutation = async (payload: AddAmenityDto) => {
	return await axios
		.post<HttpResponse<AmenityProps>>(endpoints().amenities.create, payload)
		.then((res) => res.data)
}

const UpdateAmenityMutation = async (id: string, payload: Partial<AddAmenityDto>) => {
	return await axios
		.put<HttpResponse<AmenityProps>>(endpoints(id).amenities.update, payload)
		.then((res) => res.data)
}

const DeleteAmenityMutation = async (id: string) => {
	return await axios
		.delete<HttpResponse<AmenityProps>>(endpoints(id).amenities.delete)
		.then((res) => res.data)
}

export {
	AddAmenityMutation,
	DeleteAmenityMutation,
	GetAllAmenitiesQuery,
	GetAmenityQuery,
	UpdateAmenityMutation,
}
