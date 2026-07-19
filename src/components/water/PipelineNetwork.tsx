import CityWidget from "../common/CityWidget"; import { useCity } from "../../context/CityContext";
export default function PipelineNetwork() { return <CityWidget data={useCity().city.water.widgets.pipelines} />; }
