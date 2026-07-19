import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function ClimatePrediction() { return <CityWidget data={useCity().city.climate.widgets.prediction} />; }
