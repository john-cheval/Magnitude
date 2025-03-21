"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MapComponent = dynamic(() => import("@/components/common/MapComponent"), {
  ssr: false,
});

const Locations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const elements = gsap.utils.toArray(".fade-item2");

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-altermain containers space-y-6">
      <h3 className="main-heading2 fade-item2">Our Locations</h3>
      <div className="fade-item2">
        <MapComponent />
      </div>
    </section>
  );
};

export default Locations;
