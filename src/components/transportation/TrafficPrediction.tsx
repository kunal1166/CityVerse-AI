import CityWidget from "../common/CityWidget";
import { useCity } from "../../context/CityContext";
export default function TrafficPrediction() { return <CityWidget data={useCity().city.transportation.widgets.prediction} />; }
