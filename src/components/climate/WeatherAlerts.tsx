import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function WeatherAlerts() { return <CityWidget data={useCity().city.climate.widgets.alerts} />; }
