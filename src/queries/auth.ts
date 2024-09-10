import { AdminProps, HttpResponse } from "@/types"
import { endpoints } from "@/config"
import { axios } from "@/lib"

export interface CreateAdminDto {
	email: string
	firstName: string
	lastName: string
	access: "admin" | "editor" | "superadmin"
}

export interface SignInDto {
	email: string
	password: string
}

const CreateAdminMutation = async (payload: CreateAdminDto) => {
	return axios
		.post<HttpResponse<AdminProps>>(endpoints().auth.create, payload)
		.then((res) => res.data)
}

const SignInMutation = async (payload: SignInDto) => {
	return axios
		.post<HttpResponse<AdminProps>>(endpoints().auth.signin, payload)
		.then((res) => res.data)
}

export { CreateAdminMutation, SignInMutation }
