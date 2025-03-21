"use client";
import React from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import useIsMobile from "@/hooks/useIsMobile";

const CareersList = ({ careersCategory }) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={`${
        isMobile ? "" : "containers"
      } text-altermain mt-5 sm:mt-10 lg:mt-20`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image
          src={careersCategory[1]?.list_image}
          alt={careersCategory[1]?.name}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />

        <div
          className={` px-7 md:px-14 lg:px-20 py-12  bg-[#f5f5f5] flex flex-col items-center md:items-start`}
        >
          <h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[1]?.name}
          </h2>
          <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
          <h3 className="description text-sm sm:!text-lg mb-1">
            {careersCategory[1]?.short_heading}
          </h3>
          <p className="description !text-center md:!text-justify max-w-[348px]-- mb-5 md:mb-2">
            {careersCategory[1]?.short_description}
          </p>

          <FillButton
            link={`/careers/${careersCategory[1]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  md:mt-9 mb-12">
        <Image
          src={careersCategory[0]?.list_image}
          alt={careersCategory[0]?.name}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover md:hidden"
          sizes="100vw"
        />
        <div
          className={` px-7 md:px-14 lg:px-20 py-12  bg-[#f5f5f5] flex flex-col items-center md:items-start`}
        >
          <h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[0]?.name}
          </h2>
          <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
          <h3 className="description text-sm sm:!text-lg mb-1">
            {" "}
            {careersCategory[0]?.short_heading}
          </h3>
          <p className="description !text-center md:!text-justify max-w-[348px]-- mb-5 md:mb-2">
            {careersCategory[0]?.short_description}
          </p>

          <FillButton
            link={`/careers/${careersCategory[0]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </div>

        <Image
          src={careersCategory[0]?.list_image}
          alt={careersCategory[0]?.name}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover hidden md:block "
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default CareersList;
