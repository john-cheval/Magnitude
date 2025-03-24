"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";

const SectionTwo = ({ serviceData, layout }) => {
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
      className={`grid grid-cols-12  ${isMobile ? "" : "containers mt-9"}`}
    >
      {layout && (
        <div className="col-span-12 md:col-span-6  lg:col-span-7">
          <Image
            src={serviceData?.image}
            alt={serviceData?.title}
            ref={imageRef}
            width={0}
            height={0}
            className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {isMobile && !layout && (
        <Image
          src={serviceData?.image}
          alt={serviceData?.title}
          width={0}
          ref={imageRef}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      )}
      <div
        className={` px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6  ${
          layout ? "lg:col-span-5" : "lg:col-span-7"
        }`}
      >
        <h2
          ref={(el) => (textRefs.current[0] = el)}
          className=" text-lg md:text-xl lg:text-2xl mb-4 md:mb-6"
        >
          {serviceData?.title}
        </h2>
        <span
          ref={(el) => (textRefs.current[1] = el)}
          className="block w-8 h-[2px]   bg-altermain mb-5"
        ></span>

        <div
          className="serviceKey"
          ref={(el) => (textRefs.current[2] = el)}
          dangerouslySetInnerHTML={{ __html: serviceData?.description }}
        />
      </div>

      {!isMobile && !layout && (
        <div className="col-span-12 md:col-span-6  lg:col-span-5">
          <Image
            src={serviceData?.image}
            alt={serviceData?.title}
            width={0}
            ref={imageRef}
            height={0}
            className="w-full h-full max-w-[553px]-- hidden md:block max-h-[404px]-- object-cover"
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
};

export default SectionTwo;
