import Cookies from "js-cookie"

import { createPersistMiddleware } from "../middleware"
import { AdminProps } from "@/types"

interface UserStore {
	user: AdminProps | null
	signIn: (user: AdminProps) => void
	signOut: (options?: { redirectTo?: string; soft?: boolean }) => void
}

const initialState: UserStore = {
	user: null,
	signIn: () => {},
	signOut: () => {},
}

const useUserStore = createPersistMiddleware<UserStore>("spaceet-admin", (set) => ({
	...initialState,
	signIn: (user) => {
		set({ user })
		Cookies.set("SPACEET_TOKEN", "", {
			sameSite: "None",
			secure: true,
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days,
		})
	},
	signOut: async (options) => {
		try {
			if (options?.soft) {
				set({ user: null })
			} else {
				set({ user: null })
				Cookies.remove("SPACEET_TOKEN")
				// await SignOutMutation()
			}
		} catch (error) {
			console.error("sign out error:", error)
		} finally {
			window.localStorage.removeItem("spaceet-user")
			window.location.replace(options?.redirectTo || "/")
		}
	},
}))

export { useUserStore }
