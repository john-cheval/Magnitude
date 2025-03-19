"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/common/MapComponent"), {
  ssr: false, // 🚀 This disables SSR and fixes the build error
});

const Locations = () => {
  return (
    <section className="bg-altermain containers space-y-6">
      <h3 className="main-heading2">Our Locations</h3>
      <MapComponent />
    </section>
  );
};

export default Locations;
