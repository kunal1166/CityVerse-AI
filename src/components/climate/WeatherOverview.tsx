import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function WeatherOverview() { return <CityWidget data={useCity().city.climate.widgets.overview} />; }
