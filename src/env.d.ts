const environmentVariables = ["API_URL", "NEXT_PUBLIC_API_URL"] as const

export type EnvironmentVariable = (typeof environmentVariables)[number]

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Readonly<Record<EnvironmentVariable, string>> {
			API_URL: string
			NEXT_PUBLIC_API_URL: string
		}
	}
}
