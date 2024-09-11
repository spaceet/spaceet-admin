import { AmenitiesIconName } from "@/types"
import {
	AirConditioner,
	Airport,
	Balcony,
	Bath,
	Bed,
	Dumbells,
	Gamepad,
	Swimming,
	Users,
	WiFi,
} from "@/assets/icons"

export type AmenityIconProps = {
	label: AmenitiesIconName
	icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const amenities_icons: AmenityIconProps[] = [
	{ label: "air-conditioner", icon: AirConditioner },
	{ label: "airport", icon: Airport },
	{ label: "balcony", icon: Balcony },
	{ label: "bath", icon: Bath },
	{ label: "bed", icon: Bed },
	{ label: "cable", icon: AirConditioner },
	{ label: "dishwasher", icon: AirConditioner },
	{ label: "elevator", icon: AirConditioner },
	{ label: "fitness", icon: Dumbells },
	{ label: "fireplace", icon: AirConditioner },
	{ label: "free-wifi", icon: WiFi },
	{ label: "garden", icon: AirConditioner },
	{ label: "handicap-accessible", icon: AirConditioner },
	{ label: "heating", icon: AirConditioner },
	{ label: "jacuzzi", icon: AirConditioner },
	{ label: "kitchen", icon: AirConditioner },
	{ label: "laundry", icon: AirConditioner },
	{ label: "max-guests", icon: Users },
	{ label: "microwave", icon: AirConditioner },
	{ label: "parking", icon: AirConditioner },
	{ label: "pet-friendly", icon: AirConditioner },
	{ label: "ps5", icon: Gamepad },
	{ label: "refrigerator", icon: AirConditioner },
	{ label: "security-system", icon: AirConditioner },
	{ label: "streaming-service", icon: AirConditioner },
	{ label: "swimming-pool", icon: Swimming },
]
