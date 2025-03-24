"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const SectionOne = ({ serviceData }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <div
      ref={sectionRef}
      className={`grid grid-cols-1 md:grid-cols-2 ${
        isMobile ? "" : "containers"
      }`}
    >
      <Image
        ref={imageRef}
        src={serviceData?.image}
        alt={serviceData?.title}
        width={0}
        height={0}
        className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
        sizes="100vw"
      />

      <div
        className={` px-7 md:px-14 lg:px-16 py-12  bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center`}
      >
        <h2
          ref={(el) => (textRefs.current[0] = el)}
          className="main-heading2 mb-4 md:mb-6"
        >
          {serviceData?.title}
        </h2>
        <span
          ref={(el) => (textRefs.current[1] = el)}
          className="block w-14 h-[2px]   bg-altermain mb-5"
        ></span>
        <h3
          ref={(el) => (textRefs.current[2] = el)}
          className="text-sm sm:!text-lg  !text-center md:!text-left lg:text-2xl  leading-[160%] mb-4"
        >
          {serviceData?.sub_title}
        </h3>
        <div
          ref={(el) => (textRefs.current[3] = el)}
          dangerouslySetInnerHTML={{
            __html: serviceData?.description,
          }}
          className="serviceIn1"
        ></div>
      </div>
    </div>
  );
};

export default SectionOne;
