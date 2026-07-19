import CityWidget from "../common/CityWidget";
import { useCity } from "../../context/CityContext";
export default function VehicleAnalytics() { return <CityWidget data={useCity().city.transportation.widgets.vehicleAnalytics} />; }
