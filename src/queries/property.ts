import { HttpResponse, Pagination, ApartmentProps } from "@/types"
import { endpoints } from "@/config"
import { axios } from "@/lib"

export interface PaginationDto {
	limit?: number
	page?: number
}

export interface AddPropertyDto {}

export interface SearchPropertyDto {}

const GetAllPropertiesQuery = async ({ limit, page }: PaginationDto) => {
	return axios
		.get<Pagination<ApartmentProps>>(endpoints().apartment.get_all, { params: { limit, page } })
		.then((res) => res.data)
}

const GetPropertyQuery = async (id: string) => {
	return axios.get<ApartmentProps>(endpoints(id).apartment.get_one).then((res) => res.data)
}

const SearchPropertiesQuery = async ({}: SearchPropertyDto) => {
	return axios.get<Pagination<ApartmentProps>>(endpoints().apartment.search).then((res) => res.data)
}

const AddPropertyMutation = async (payload: AddPropertyDto) => {
	return axios
		.post<HttpResponse<ApartmentProps>>(endpoints().apartment.create, payload)
		.then((res) => res.data)
}

const UpdatePropertyMutation = async (id: string, payload: Partial<AddPropertyDto>) => {
	return axios
		.put<HttpResponse<ApartmentProps>>(endpoints(id).apartment.update, payload)
		.then((res) => res.data)
}

const DeletePropertyMutation = async (id: string) => {
	return axios
		.delete<HttpResponse<ApartmentProps>>(endpoints(id).apartment.delete)
		.then((res) => res.data)
}

export {
	AddPropertyMutation,
	DeletePropertyMutation,
	GetAllPropertiesQuery,
	GetPropertyQuery,
	SearchPropertiesQuery,
	UpdatePropertyMutation,
}
