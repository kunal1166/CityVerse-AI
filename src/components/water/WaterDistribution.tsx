import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function WaterDistribution() { return <CityWidget data={useCity().city.water.widgets.distribution} />; }
