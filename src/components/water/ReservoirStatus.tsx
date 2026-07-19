import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function ReservoirStatus() { return <CityWidget data={useCity().city.water.widgets.reservoirs} />; }
