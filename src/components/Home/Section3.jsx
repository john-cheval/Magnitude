"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section3 = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);

  return (
    <section className="relative w-full h-full---  h-[500px]--  md:h-[500px]-- lg:h-[750px]-- ">
      <div className="bg-altermain-- w-full min-h-[100dvh]   flex items-center justify-center overflow-hidden">
        <h3 className="text-center text-altermain text-[90px] sm:text-[100px] md:text-[100px] lg:text-[150px] font-bold uppercase">
          {title}
        </h3>
      </div>

      <div
        className="relative  h-fit w-screen overflow-hidden"
        id="pinnedWorks"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 containers relative pt-8 md:pt-12 xl:pt-14 pb-20">
          {homeCardData?.map((cardData, index) => (
            <Link
              href={`/services/${cardData?.post_name}`}
              className="space-y-4 lg:space-y-6 cursor-pointer"
              prefetch={true}
              key={cardData?.ID || index}
            >
              <Image
                src={cardData?.home_page_image}
                alt={cardData?.post_title}
                className="w-full md:h-auto object-cover h-[350px] max-h-[470px]--"
                width={0}
                height={0}
                sizes="100vw"
              />

              <h5 className="text-altermain text-xl lg:text-2xl leading-[150%]">
                {cardData?.post_title}
              </h5>
              <span className="seperator2Dark"></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
