"use client";

import React, { memo, Suspense } from "react";

const Locations = () => {
  const MapComponent = memo(() => (
    <iframe
      src="https://snazzymaps.com/embed/693860"
      title="Magnitude"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className=" max-w-[350px]-- xl:w-full-- w-full h-[400px]     border-none  "
    ></iframe>
  ));
  return (
    <section className="bg-altermain containers space-y-6 pt-4 md:pt-0">
      <h3 className="main-heading2 md:text-left text-center  mb-8 md:mb-0">
        Our Locations
      </h3>
      <div className="">
        {/* <iframe
          src="https://snazzymaps.com/embed/693860"
          style={{
            border: "none",
            height: "400px",
            width: "100%",
          }}
        ></iframe> */}
        <Suspense
          fallback={
            <div className="w-full h-[400px] bg-gray-200 mx-auto-- mt-7--" />
          }
        >
          <MapComponent />
        </Suspense>
      </div>
    </section>
  );
};

export default Locations;
