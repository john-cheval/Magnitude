"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { createRoot } from "react-dom/client";

const locations = [
  { name: "Dubai", position: [25.276987, 55.296249] },
  { name: "Hong Kong", position: [22.3193, 114.1694] },
  { name: "Italy", position: [41.9028, 12.4964] },
];

// Custom Icon Function
const createCustomIcon = () => {
  const markerDiv = document.createElement("div");
  const root = createRoot(markerDiv);
  root.render(<FaMapMarkerAlt className="text-red-600 text-3xl" />);
  return L.divIcon({
    html: markerDiv.innerHTML,
    className: "custom-marker",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
};

const MapComponent = () => {
  return (
    <MapContainer
      center={[25, 55]}
      zoom={2}
      className="h-[478px] w-full rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}
          icon={createCustomIcon()}
        >
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
