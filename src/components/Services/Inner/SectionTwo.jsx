"use client";
import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const SectionTwo = ({ serviceData, layout }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2  ${
        isMobile ? "" : "containers mt-9"
      }`}
    >
      {layout && (
        <Image
          src={serviceData?.image}
          alt={serviceData?.title}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      )}

      {isMobile && !layout && (
        <Image
          src={serviceData?.image}
          alt={serviceData?.title}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      )}
      <div
        className={` px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start`}
      >
        <h2 className=" text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
          {serviceData?.title}
        </h2>
        <span className="block w-8 h-[2px]   bg-altermain mb-5"></span>

        <div
          className="serviceKey"
          dangerouslySetInnerHTML={{ __html: serviceData?.description }}
        />
      </div>

      {!isMobile && !layout && (
        <Image
          src={serviceData?.image}
          alt={serviceData?.title}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default SectionTwo;
