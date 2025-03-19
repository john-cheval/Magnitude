import React from "react";
import map from "../../../public/Contact/map.png";
import Image from "next/image";

const Locations = () => {
  return (
    <section className="bg-altermain containers space-y-6">
      <h3 className="main-heading2">Our Locations</h3>
      <Image
        src={map}
        alt="map"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-cover max-h-[478px]"
      />
    </section>
  );
};

export default Locations;
