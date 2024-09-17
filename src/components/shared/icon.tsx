import React from "react"

import { AmenitiesIconName } from "@/types"
import { icons } from "@/config"

interface Props extends React.SVGProps<SVGSVGElement> {
	name: AmenitiesIconName
	size?: number
}

const Icon = React.forwardRef<SVGSVGElement, Props>(({ className, name, size }, ref) => {
	const IconComponent = icons[name]

	return <IconComponent ref={ref} size={size} className={className} />
})

Icon.displayName = "Icon"

export { Icon }
