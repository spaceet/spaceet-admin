import "@/styles/globals.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { AppProps } from "next/app"

import { QueryProvider, SSRProvider } from "@/providers"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryProvider>
			<SSRProvider>
				<Component {...pageProps} />
			</SSRProvider>
			<ReactQueryDevtools />
		</QueryProvider>
	)
}
