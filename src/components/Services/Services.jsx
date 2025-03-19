import React from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import { serviceData } from "@/data/servicesData";

const Services = () => {
  return (
    <section className="bg-altermain  pt-12 containers pb-20">
      {serviceData.map((service, index) => {
        const isEven = index % 2 === 1;

        const bgColors = [
          "bg-[#1D2025] text-main",
          "bg-altermain text-main",
          "bg-[#F7F7F7] !text-black",
        ];

        const bgColor = bgColors[index % bgColors.length];

        return (
          <div
            key={service?.id || index}
            className="grid grid-cols-1 lg:grid-cols-2"
          >
            {isEven ? (
              <div
                className={`lg:pl-[59px] lg:pr-20 px-14 py-16 space-y-6 ${bgColor}`}
              >
                <h2 className="main-heading2">{service.title}</h2>
                <span
                  className={`block w-14 h-[2px]   ${
                    index === 2 ? "bg-altermain" : "bg-main"
                  }`}
                ></span>
                <p className="description max-w-[480px]">
                  {service.desc || service.desc1}
                </p>
                {service.desc2 && (
                  <p className="mt-7 description max-w-[480px]">
                    {service.desc2}
                  </p>
                )}
                <FillButton link={service.link} text={service.linkText} />
              </div>
            ) : (
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={0}
                height={0}
                className="w-full h-full max-w-[553px]-- max-h-[536px]-- object-cover"
                sizes="100vw"
              />
            )}

            {!isEven ? (
              <div
                className={`lg:pl-[59px] lg:pr-20 px-14 py-16 space-y-6 ${bgColor}`}
              >
                <h2 className="main-heading2">{service.title}</h2>
                <span
                  className={`block w-14 h-[2px]   ${
                    index === 2 ? "bg-altermain" : "bg-main"
                  }`}
                ></span>
                <p className="description max-w-[480px]">
                  {service.desc || service.desc1}
                </p>
                {service.desc2 && (
                  <p className="mt-7 description max-w-[480px]">
                    {service.desc2}
                  </p>
                )}
                <FillButton link={service.link} text={service.linkText} />
              </div>
            ) : (
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={0}
                height={0}
                className="w-full h-full max-w-[553px]-- max-h-[536px]-- object-cover"
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
