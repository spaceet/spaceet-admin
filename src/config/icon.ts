import {
	RemixiconComponentType,
	RiCarLine,
	RiFirefoxFill,
	RiFireLine,
	RiFirstAidKitLine,
	RiHome8Line,
	RiHomeOfficeLine,
	RiHomeWifiLine,
	RiKeyboardLine,
	RiKnifeLine,
	RiTShirtAirLine,
	RiSunLine,
	RiSurroundSoundLine,
	RiTvLine,
	RiVideoLine,
	RiVidiconLine,
	RiWaterFlashLine,
	RiWheelchairLine,
	RiWifiLine,
	RiZcoolLine,
} from "@remixicon/react"

import { AirConditioner, Bath, Dumbells, Gamepad, Swimming } from "@/assets/icons"
import { AmenitiesIconName } from "@/types"

export type AmenityIconProps = {
	label: AmenitiesIconName
	icon: React.FC<React.SVGProps<SVGSVGElement>> | RemixiconComponentType
}

export const icons: Record<
	AmenitiesIconName,
	React.FC<React.SVGProps<SVGSVGElement>> | RemixiconComponentType
> = {
	"air-conditioner": RiTShirtAirLine,
	"beach-access": RiHome8Line,
	"bbq-grill": RiKnifeLine,
	"dedicated-kitchen": RiFirefoxFill,
	"fire-alarm": AirConditioner,
	"fire-extinguisher": RiFireLine,
	"fire-pit": RiFireLine,
	"first-aid-kit": RiFirstAidKitLine,
	"gas-cooker": AirConditioner,
	gym: Dumbells,
	"handicap-accessible": RiWheelchairLine,
	"hot-tub": Bath,
	"lake-access": RiWaterFlashLine,
	"parking-space": RiCarLine,
	patio: RiHomeWifiLine,
	piano: RiKeyboardLine,
	ps5: Gamepad,
	"security-system": RiVidiconLine,
	"smoke-alarm": RiZcoolLine,
	"snooker-table": RiHome8Line,
	"sound-system": RiSurroundSoundLine,
	"swimming-pool": Swimming,
	"streaming-services": RiVideoLine,
	television: RiTvLine,
	"washing-machine": RiTShirtAirLine,
	"water-heater": RiSunLine,
	wifi: RiWifiLine,
	workspace: RiHomeOfficeLine,
}

export const amenities_list = [
	"air-conditioner",
	"beach-access",
	"bbq-grill",
	"dedicated-kitchen",
	"fire-alarm",
	"fire-extinguisher",
	"fire-pit",
	"first-aid-kit",
	"gas-cooker",
	"gym",
	"handicap-accessible",
	"hot-tub",
	"lake-access",
	"parking-space",
	"patio",
	"piano",
	"ps5",
	"security-system",
	"smoke-alarm",
	"snooker-table",
	"sound-system",
	"swimming-pool",
	"streaming-services",
	"television",
	"washing-machine",
	"water-heater",
	"wifi",
	"workspace",
] as const

export const amenities_icons: AmenityIconProps[] = [
	{ label: "air-conditioner", icon: icons["air-conditioner"] },
	{ label: "beach-access", icon: icons["beach-access"] },
	{ label: "bbq-grill", icon: icons["bbq-grill"] },
	{ label: "dedicated-kitchen", icon: icons["dedicated-kitchen"] },
	{ label: "fire-alarm", icon: icons["fire-alarm"] },
	{ label: "fire-extinguisher", icon: icons["fire-extinguisher"] },
	{ label: "fire-pit", icon: icons["fire-pit"] },
	{ label: "first-aid-kit", icon: icons["first-aid-kit"] },
	{ label: "gas-cooker", icon: icons["gas-cooker"] },
	{ label: "gym", icon: icons["gym"] },
	{ label: "handicap-accessible", icon: icons["handicap-accessible"] },
	{ label: "hot-tub", icon: icons["hot-tub"] },
	{ label: "lake-access", icon: icons["lake-access"] },
	{ label: "parking-space", icon: icons["parking-space"] },
	{ label: "patio", icon: icons["patio"] },
	{ label: "piano", icon: icons["piano"] },
	{ label: "ps5", icon: icons["ps5"] },
	{ label: "security-system", icon: icons["security-system"] },
	{ label: "smoke-alarm", icon: icons["smoke-alarm"] },
	{ label: "snooker-table", icon: icons["snooker-table"] },
	{ label: "sound-system", icon: icons["sound-system"] },
	{ label: "swimming-pool", icon: icons["swimming-pool"] },
	{ label: "streaming-services", icon: icons["streaming-services"] },
	{ label: "television", icon: icons["television"] },
	{ label: "washing-machine", icon: icons["washing-machine"] },
	{ label: "water-heater", icon: icons["water-heater"] },
	{ label: "wifi", icon: icons["wifi"] },
	{ label: "workspace", icon: icons["workspace"] },
]
