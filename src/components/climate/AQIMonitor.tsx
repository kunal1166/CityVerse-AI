import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function AQIMonitor() { return <CityWidget data={useCity().city.climate.widgets.aqi} />; }
