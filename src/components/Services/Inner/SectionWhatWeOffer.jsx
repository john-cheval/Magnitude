"use client";
import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const SectionWhatWeOffer = ({ serviceList }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2   ${
        isMobile ? "" : "containers mt-9"
      }`}
    >
      <Image
        src={serviceList?.image}
        alt={serviceList?.title}
        width={0}
        height={0}
        className={`w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover`}
        sizes="100vw"
      />
      <div className={` px-7 md:px-14 lg:px-20 py-12  bg-altermain text-main `}>
        <h2 className=" text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
          {serviceList?.title}
        </h2>
        <span className="block w-8 h-[2px]   bg-main mb-5 md:mb-7"></span>

        <div
          className="list2 description"
          dangerouslySetInnerHTML={{ __html: serviceList?.description }}
        />
      </div>
    </div>
  );
};

export default SectionWhatWeOffer;
