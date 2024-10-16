import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			body: ["var(--body)"],
			heading: ["var(--heading)"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					100: "#EAB221",
				},
				neutral: {
					100: "#ffffff",
					200: "#f6f8fa",
					300: "#e2e4e9",
					400: "#cdd0d5",
					500: "#868c98",
					600: "#525866",
					700: "#31353f",
					800: "#161922",
					900: "#0a0d14",
				},
				error: {
					100: "#fdedf0",
					200: "#f8c9d2",
					300: "#df1c41",
					400: "#af1d38",
					500: "#710e21",
				},
				warning: {
					100: "#fef7ec",
					200: "#fbdfb1",
					300: "#f2ae40",
					400: "#b47818",
					500: "#693d11",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

export default config
