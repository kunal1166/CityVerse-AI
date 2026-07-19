import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function TemperatureTrend() { return <CityWidget data={useCity().city.climate.widgets.temperature} />; }
