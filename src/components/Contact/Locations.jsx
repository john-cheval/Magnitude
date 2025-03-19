"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const locations = [
  { name: "Dubai", position: [25.276987, 55.296249] },
  { name: "Hong Kong", position: [22.3193, 114.1694] },
  { name: "Italy", position: [41.9028, 12.4964] },
];

// Custom Red Marker
const redIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Locations = () => {
  return (
    <section className="bg-altermain containers space-y-6">
      <h3 className="main-heading2">Our Locations</h3>
      <MapContainer
        center={[25, 55]}
        zoom={2}
        className="h-[478px] w-full rounded-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={redIcon}>
            <Popup>
              <span className="text-white bg-red-600 px-2 py-1 rounded">
                {location.name}
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Locations;
