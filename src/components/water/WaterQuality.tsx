import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function WaterQuality() { return <CityWidget data={useCity().city.water.widgets.quality} />; }
