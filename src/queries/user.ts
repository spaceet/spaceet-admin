import { HttpResponse, Pagination, UserProps } from "@/types"
import { PaginationDto } from "./property"
import { endpoints } from "@/config"
import { axios } from "@/lib"

const GetAllUsersQuery = async ({ limit, page }: PaginationDto) => {
	return await axios
		.get<Pagination<UserProps[]>>(endpoints().users.get_all, {
			params: { limit, page },
		})
		.then((res) => res.data)
}

const GetUserQuery = async (id: string) => {
	return await axios
		.get<HttpResponse<UserProps>>(endpoints(id).users.get_one)
		.then((res) => res.data)
}

const DeleteUserMutation = async (id: string) => {
	return await axios
		.delete<HttpResponse<UserProps>>(endpoints(id).users.delete)
		.then((res) => res.data)
}

export { GetAllUsersQuery, GetUserQuery, DeleteUserMutation }
