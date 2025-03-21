"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    <section
      ref={sectionRef}
      className="bg-altermain containers space-y-6 pt-4 md:pt-0"
    >
      <h3 className="main-heading2 md:text-left text-center fade-item2 mb-8 md:mb-0">
        Our Locations
      </h3>
      <div className="fade-item2">
        <iframe
          src="https://snazzymaps.com/embed/693860"
          // width="100%"
          // height="300px"
          // style="border:none;"
          style={{
            border: "none",
            maxHeight: "300px",
            width: "100%",
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default Locations;
