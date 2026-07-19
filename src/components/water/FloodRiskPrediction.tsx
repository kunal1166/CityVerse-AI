import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function FloodRiskPrediction() { return <CityWidget data={useCity().city.water.widgets.floodRisk} />; }
