import CityWidget from "../common/CityWidget";
import { useCity } from "../../context/CityContext";
export default function SmartSignalControl() { return <CityWidget data={useCity().city.transportation.widgets.signalControl} />; }
