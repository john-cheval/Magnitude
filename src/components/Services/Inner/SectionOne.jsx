"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";

const SectionOne = ({ serviceData }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        isMobile ? "" : "containers"
      }`}
    >
      <Image
        src={serviceData?.image}
        alt={serviceData?.title}
        width={0}
        height={0}
        className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
        sizes="100vw"
      />

      <div
        className={` px-7 md:px-14 lg:px-16 py-12  bg-[#f5f5f5] flex flex-col items-center md:items-start`}
      >
        <h2 className="main-heading2 mb-4 md:mb-6">{serviceData?.title}</h2>
        <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
        <h3 className="text-sm sm:!text-lg  !text-center md:!text-left lg:text-2xl  leading-[160%] mb-4">
          {serviceData?.sub_title}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: serviceData?.description,
          }}
          className="description  !text-center md:!text-justify"
        ></div>
      </div>
    </div>
  );
};

export default SectionOne;
