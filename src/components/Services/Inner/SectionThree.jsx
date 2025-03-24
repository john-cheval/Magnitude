"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";
const SectionThree = ({ data, layout = false }) => {
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
    <section
      ref={sectionRef}
      className={`bg-altermain   text-main  containers ${
        isMobile ? "pb-10" : "containers  mt-16 py-20"
      }`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 containers ${
          layout ? "gap-x-32" : "gap-x-[72px]"
        } `}
      >
        {!layout && (
          <Image
            src={data?.image}
            alt={data?.title}
            width={0}
            ref={imageRef}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        )}
        <div className="space-y-7 pt-12 flex flex-col items-center md:items-start ">
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className="text-lg md:text-xl lg:text-2xl "
          >
            {data?.title}
          </h2>
          <span
            ref={(el) => (textRefs.current[1] = el)}
            className="w-8 h-[2px]  block bg-main"
          ></span>

          <div
            ref={(el) => (textRefs.current[2] = el)}
            className="description why max-w-[517px] space-y-6"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
        </div>

        {layout && (
          <Image
            src={data?.image}
            alt={data?.title}
            width={0}
            height={0}
            ref={imageRef}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default SectionThree;
