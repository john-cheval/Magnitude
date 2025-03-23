"use client";

import React from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import useIsMobile from "@/hooks/useIsMobile";

const Services = ({ servicesList }) => {
  const serviceData = Object.values(servicesList);
  const isMobile = useIsMobile();

  return (
    <section
      className={`bg-altermain  md:pt-12  pb-20 ${
        isMobile ? "" : "containers"
      }`}
    >
      {serviceData.map((service, index) => {
        const isEven = index % 2 === 1;

        const bgColors = [
          "bg-[#1D2025] text-main",
          "bg-[#1d2025]  md:bg-altermain text-main",
          "bg-[#F7F7F7] !text-black",
        ];

        const bgColor = bgColors[index % bgColors.length];

        return (
          <div
            key={service?.id || index}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {isEven ? (
              <>
                {isMobile && (
                  <Image
                    src={service?.image}
                    alt={service?.post_title}
                    width={0}
                    height={0}
                    className="w-full h-full max-w-[553px]-- max-h-[536px]-- object-cover"
                    sizes="100vw"
                  />
                )}
                <div
                  className={`lg:pl-[59px] lg:pr-20 ${
                    isMobile ? "containers" : "px-10"
                  } py-12 md:py-16 space-y-6 ${bgColor} flex flex-col items-center md:items-start`}
                >
                  <h2 className="main-heading2">{service?.post_title}</h2>
                  <span
                    className={`block w-14 h-[2px]   ${
                      index === 2 ? "bg-altermain" : "bg-main"
                    }`}
                  ></span>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: service?.short_description,
                    }}
                    className="description md:max-w-[480px] md:space-y-7 !text-center md:!text-justify why"
                  />

                  <FillButton
                    link={`/services/${service?.post_name}`}
                    text={"Read more"}
                  />
                </div>
              </>
            ) : (
              <Image
                src={service?.image}
                alt={service?.post_title}
                width={0}
                height={0}
                className="w-full h-full max-w-[553px]-- max-h-[536px]-- object-cover"
                sizes="100vw"
              />
            )}

            {!isEven ? (
              <div
                className={`lg:pl-[59px] lg:pr-20  ${
                  isMobile ? "containers" : "px-10"
                } py-12 md:py-16 space-y-6 flex flex-col items-center md:items-start ${bgColor}`}
              >
                <h2 className="main-heading2">{service?.post_title}</h2>
                <span
                  className={`block w-14 h-[2px]   ${
                    index === 2 ? "bg-altermain" : "bg-main"
                  }`}
                ></span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: service?.short_description,
                  }}
                  className="description md:max-w-[480px] md:space-y-7 !text-center md:!text-justify why"
                />
                <FillButton
                  link={`/services/${service?.post_name}`}
                  text={"Read more"}
                  dark={index === 2 && isMobile && true}
                />
              </div>
            ) : (
              <Image
                src={service?.image}
                alt={service?.post_title}
                width={0}
                height={0}
                className="w-full hidden md:block h-full max-w-[553px]-- max-h-[536px]-- object-cover"
                sizes="100vw"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Services;
