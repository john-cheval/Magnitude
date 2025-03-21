import React from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";

const Services = ({ servicesList }) => {
  const serviceData = Object.values(servicesList);

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
                  className="description max-w-[480px] space-y-7"
                />

                <FillButton
                  link={`/services/${service?.post_name}`}
                  text={"Read more"}
                />
              </div>
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
                className={`lg:pl-[59px] lg:pr-20 px-14 py-16 space-y-6 ${bgColor}`}
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
                  className="description max-w-[480px] space-y-7"
                />
                <FillButton
                  link={`/services/${service?.post_name}`}
                  text={"Read more"}
                />
              </div>
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
          </div>
        );
      })}
    </section>
  );
};

export default Services;
