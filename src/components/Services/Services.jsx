"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Services = ({ servicesList }) => {
  const serviceData = Object.values(servicesList);
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useGSAP(() => {
    // gsap.fromTo(
    //   textRefs.current,
    //   { opacity: 0, y: 20 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.6,
    //     stagger: 0.3,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top 80%",
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   imageRefs.current,
    //   { scale: 0.8, opacity: 0 },
    //   {
    //     scale: 1,
    //     opacity: 1,
    //     duration: 1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top 80%",
    //     },
    //   }
    // );

    serviceData.forEach((_, index) => {
      const serviceCard = serviceRefs.current[index];
      const image = imageRefs.current[index];
      const textElements = [
        textRefs.current[index * 4], // title
        textRefs.current[index * 4 + 1], // separator
        textRefs.current[index * 4 + 2], // description
        textRefs.current[index * 4 + 3], // button
      ];

      if (!serviceCard) return;

      if (image) {
        gsap.fromTo(
          image,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: serviceCard,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      gsap.fromTo(
        textElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: serviceCard,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
  }, [servicesList]);

  return (
    <section
      ref={sectionRef}
      className={`bg-altermain md:pt-12 pb-20 ${isMobile ? "" : "containers"}`}
    >
      {serviceData.map((service, index) => {
        const isEven = index % 2 === 1;

        const bgColors = [
          "bg-[#1D2025] text-main",
          "bg-[#1d2025] md:bg-altermain text-main",
          "bg-[#F7F7F7] !text-black",
        ];

        const bgColor = bgColors[index % bgColors.length];

        return (
          <div
            key={service?.id || index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="grid grid-cols-12 opacity-100"
          >
            {isEven ? (
              <>
                {isMobile && (
                  <div className="col-span-12 md:col-span-6 lg:col-span-7">
                    <Image
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={service?.image}
                      alt={service?.post_title}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- md:hidden max-h-[536px]-- object-cover"
                      sizes="100vw"
                    />
                  </div>
                )}
                <div
                  className={`lg:pl-[59px] lg:pr-20 ${
                    isMobile ? "containers" : "px-10"
                  } py-12 md:py-16 space-y-6 ${bgColor} flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-5`}
                >
                  <h2
                    ref={(el) => (textRefs.current[index * 4] = el)}
                    className="main-heading2 opacity-0"
                  >
                    {service?.post_title}
                  </h2>
                  <span
                    ref={(el) => (textRefs.current[index * 4 + 1] = el)}
                    className={`block w-14 h-[2px] opacity-0 ${
                      index === 2 ? "bg-altermain" : "bg-main"
                    }`}
                  ></span>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: service?.short_description,
                    }}
                    ref={(el) => (textRefs.current[index * 4 + 2] = el)}
                    className="description md:max-w-[480px] md:space-y-7 !text-center md:!text-justify why opacity-0"
                  />

                  <FillButton
                    link={`/services/${service?.post_name}`}
                    text={"Read more"}
                    ref={(el) => (textRefs.current[index * 4 + 3] = el)}
                    className="opacity-0"
                  />
                </div>
              </>
            ) : (
              <div className="col-span-12 md:col-span-6 lg:col-span-5">
                <Image
                  src={service?.image}
                  ref={(el) => (imageRefs.current[index] = el)}
                  alt={service?.post_title}
                  width={0}
                  height={0}
                  className="w-full h-full max-w-[553px]-- max-h-[536px]-- object-cover opacity-0"
                  sizes="100vw"
                />
              </div>
            )}

            {!isEven ? (
              <div
                className={`lg:pl-[59px] lg:pr-20 ${
                  isMobile ? "containers" : "px-10"
                } py-12 md:py-16 space-y-6 flex flex-col items-center md:items-start ${bgColor} col-span-12 md:col-span-6 justify-center lg:col-span-7`}
              >
                <h2
                  ref={(el) => (textRefs.current[index * 4] = el)}
                  className="main-heading2 opacity-0"
                >
                  {service?.post_title}
                </h2>
                <span
                  ref={(el) => (textRefs.current[index * 4 + 1] = el)}
                  className={`block w-14 h-[2px] opacity-0 ${
                    index === 2 ? "bg-altermain" : "bg-main"
                  }`}
                ></span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: service?.short_description,
                  }}
                  ref={(el) => (textRefs.current[index * 4 + 2] = el)}
                  className="description md:max-w-[480px] md:space-y-7 !text-center md:!text-justify why opacity-0"
                />
                <FillButton
                  ref={(el) => (textRefs.current[index * 4 + 3] = el)}
                  link={`/services/${service?.post_name}`}
                  text={"Read more"}
                  dark={index === 2 && true}
                  className="opacity-0"
                />
              </div>
            ) : (
              <div className="col-span-12 md:col-span-6 lg:col-span-7">
                <Image
                  ref={(el) => (imageRefs.current[index] = el)}
                  src={service?.image}
                  alt={service?.post_title}
                  width={0}
                  height={0}
                  className="w-full hidden md:block h-full max-w-[553px]-- max-h-[536px]-- object-cover opacity-0"
                  sizes="100vw"
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Services;
