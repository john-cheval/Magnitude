"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";

const SectionWhatWeOffer = ({ serviceList }) => {
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
      className={`grid grid-cols-1 md:grid-cols-2   ${
        isMobile ? "" : "containers mt-9"
      }`}
    >
      <Image
        src={serviceList?.image}
        alt={serviceList?.title}
        width={0}
        ref={imageRef}
        height={0}
        className={`w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover`}
        sizes="100vw"
      />
      <div
        className={` px-7 md:px-14 lg:px-20 py-12  bg-altermain text-main  flex flex-col justify-center`}
      >
        <h2
          ref={(el) => (textRefs.current[0] = el)}
          className=" text-lg md:text-xl lg:text-2xl mb-4 md:mb-6"
        >
          {serviceList?.title}
        </h2>
        <span
          ref={(el) => (textRefs.current[1] = el)}
          className="block w-8 h-[2px]   bg-main mb-5 md:mb-7"
        ></span>
        <div
          ref={(el) => (textRefs.current[2] = el)}
          className="list2 description"
          dangerouslySetInnerHTML={{ __html: serviceList?.description }}
        />
      </div>
    </div>
  );
};

export default SectionWhatWeOffer;
