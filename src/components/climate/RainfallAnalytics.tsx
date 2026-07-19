import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function RainfallAnalytics() { return <CityWidget data={useCity().city.climate.widgets.rainfall} />; }
