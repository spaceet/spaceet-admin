import { createPersistMiddleware } from "@/store/middleware"

interface GlobalStore {
	loading: boolean
}

const initialState: GlobalStore = {
	loading: false,
}

const useGlobalStore = createPersistMiddleware<GlobalStore>("spaceet-global", (set) => ({
	...initialState,
	setLoading: () => set({ loading: true }),
}))

export { useGlobalStore }
