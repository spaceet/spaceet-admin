import Head from "next/head"

interface SeoProps {
	readonly title?: string
	readonly description?: string
	readonly siteName?: string
}

export function Seo({ title = "", description = "", siteName = "Spaceet Admin" }: SeoProps) {
	return (
		<Head>
			<>
				<title>{`${title ? `${title} |` : ""} ${siteName}`}</title>
				<meta name="description" content={description} />
				<meta name="author" content="Spaceet" />
				<link rel="canonical" href="https://admin.spaceet.com" />
				<meta name="robots" content="index,follow" />
				<meta name="apple-mobile-web-app-title" content="Spaceet" />
				<meta name="keywords" content="Spaceet" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta content="" name="theme-color" />
				<meta content="" name="msapplication-TileColor" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</>
		</Head>
	)
}
