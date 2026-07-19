import CityWidget from "../common/CityWidget";
import { useCity } from "../../context/CityContext";
export default function SignalStatus() { return <CityWidget data={useCity().city.transportation.widgets.signalStatus} />; }
