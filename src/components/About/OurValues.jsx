"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";

const OurValues = ({ ourValuesData }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imageRefs.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      contentRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section
      className={`${isMobile ? "-mt-0" : "containers mt-12"} text-altermain`}
      ref={sectionRef}
    >
      {ourValuesData?.map((data, index) => (
        <div key={index + 1} className="grid grid-cols-1 md:grid-cols-2">
          <Image
            ref={(el) => (imageRefs.current[index] = el)}
            src={data?.image}
            alt={data?.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />

          <div className="px-7 md:px-14 lg:pl-14 space-y-5 pt-8 md:pt-11 flex flex-col items-start justify-center">
            <h3
              ref={(el) => (contentRefs.current[index * 3] = el)}
              className="main-heading2"
            >
              {data?.title}
            </h3>
            <span
              ref={(el) => (contentRefs.current[index * 3 + 1] = el)}
              className="seperatorDark"
            ></span>
            <div
              ref={(el) => (contentRefs.current[index * 3 + 2] = el)}
              className="description list"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurValues;
