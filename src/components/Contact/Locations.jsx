"use client";

import React, { memo, Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Locations = () => {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

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
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-altermain containers space-y-6 pt-4 md:pt-0"
    >
      <h3
        ref={headingRef}
        className="main-heading2 md:text-left text-center  mb-8 md:mb-0"
      >
        Our Locations
      </h3>
      <div ref={mapRef} className="">
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
