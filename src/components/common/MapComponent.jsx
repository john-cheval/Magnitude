"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useMemo } from "react";

const locations = [
  { name: "Dubai", position: [25.276987, 55.296249] },
  { name: "Hong Kong", position: [22.3193, 114.1694] },
  { name: "Italy", position: [41.9028, 12.4964] },
];

// Memoized Custom Icon
const customIcon = L.divIcon({
  html: `<div style="color: red; font-size: 24px;"><i class="fas fa-map-marker-alt"></i></div>`,
  className: "custom-marker",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const MapComponent = () => {
  const markerIcon = useMemo(() => customIcon, []); // Use memoization to avoid recreating the icon

  return (
    <MapContainer
      center={[25, 55]}
      zoom={2}
      className="h-[478px] w-full rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={markerIcon}>
          <Popup>
            <div className="flex items-center gap-2 text-white bg-red-600 px-2 py-1 rounded">
              <FaMapMarkerAlt className="text-white text-lg" />
              {location.name}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
