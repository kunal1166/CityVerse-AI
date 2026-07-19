import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function LeakDetection() { return <CityWidget data={useCity().city.water.widgets.leaks} />; }
