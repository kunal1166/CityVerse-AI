import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function WaterAlerts() { return <CityWidget data={useCity().city.water.widgets.alerts} />; }
