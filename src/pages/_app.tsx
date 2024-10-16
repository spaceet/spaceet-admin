import "@/styles/globals.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { AppProps } from "next/app"

import { QueryProvider, SSRProvider } from "@/providers"
// import { Loader } from "@/components/shared"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryProvider>
			<SSRProvider>
				{/* <Loader /> */}
				<Component {...pageProps} />
			</SSRProvider>
			<ReactQueryDevtools />
		</QueryProvider>
	)
}
