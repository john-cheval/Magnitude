"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const OurValues = ({ ourValuesData }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  return (
    <section
      className={`${isMobile ? "-mt-0" : "containers mt-12"} text-altermain`}
      ref={sectionRef}
    >
      {ourValuesData?.map((data, index) => (
        <div key={index + 1} className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={data?.image}
            alt={data?.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />

          <div className="px-7 md:px-14 lg:pl-14 space-y-5 pt-8 md:pt-11 flex flex-col items-start justify-center">
            <h3 className="main-heading2">{data?.title}</h3>
            <span className="seperatorDark"></span>
            <div
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
