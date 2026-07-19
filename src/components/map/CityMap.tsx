import Card from "../ui/Card";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useEffect } from "react";

import CityMarker from "./CityMarker";
import MapLegend from "./MapLegend";
import MapControls from "./MapControls";

import { useCity } from "../../context/CityContext";

function ChangeView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
}

export default function CityMap() {
  const { city } = useCity();

  return (
    <Card className="relative h-[28rem] overflow-hidden p-0 sm:h-[32rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-1000 flex items-center justify-between bg-gradient-to-b from-slate-950/75 to-transparent p-5"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Digital twin map</p><h2 className="mt-1 text-lg font-semibold text-white">{city.metadata.name} live operations</h2></div><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">LIVE</span></div>
      <MapContainer
        center={city.map.center}
        zoom={city.map.zoom}
        scrollWheelZoom
        zoomControl={false}
        className="h-full w-full"
      >
        <ChangeView center={city.map.center} zoom={city.map.zoom} />

        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {city.map.markers.map((marker) => (
          <CityMarker
            key={marker.id}
            position={marker.position}
            title={marker.title}
            status={marker.status}
            color={marker.color}
          />
        ))}

        <MapLegend />
        <MapControls />
      </MapContainer>
    </Card>
  );
}
