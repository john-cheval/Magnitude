"use client";
import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const ServiceHero = ({ title, small_heading, description, bannerImage }) => {
  const isMobile = useIsMobile();
  return (
    <section
      className={` pt-28 md:pt-40 lg:pt-44 bg-altermain ${
        isMobile ? "" : "containers"
      }`}
    >
      <h1 className="main-heading capitalize text-center md:text-left">
        {title}
      </h1>
      <div className="relative">
        <Image
          src={bannerImage}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[450px] md:h-auto md:max-h-[530px]-- object-cover mt-5 md:mt-8 lg:mt-10"
        />

        <div className="absolute z-50 bottom-10 md:top-1/2 left-6 right-4 md:left-10 lg:left-20 md:-translate-y-1/2 space-y-5 flex flex-col items-center md:items-start">
          <h2 className="main-heading2 ">{small_heading}</h2>
          <span className="seperator"></span>
          <p className="description max-w-[413px]">{description}</p>
        </div>

        <div className="absolute  bg-serviceHeroGrad2 md:bg-serviceHeroGrad h-full w-full left-0 bottom-0 md:top-0" />
      </div>
    </section>
  );
};

export default ServiceHero;
