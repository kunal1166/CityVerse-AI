import CityWidget from "../common/CityWidget";
import { useCity } from "../../context/CityContext";
export default function TrafficHeatMap() { return <CityWidget data={useCity().city.transportation.widgets.heatMap} />; }
