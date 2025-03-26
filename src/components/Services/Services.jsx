"use client";

import React, { useRef } from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import { motion, useInView } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const Services = ({ servicesList }) => {
  const serviceData = Object.values(servicesList);
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className={`bg-altermain md:pt-12 md:pb-20 ${
        isMobile ? "" : "containers"
      }`}
    >
      {serviceData.map((service, index) => {
        const isEven = index % 2 === 1;

        const bgColors = [
          "bg-[#1D2025] text-main",
          "bg-[#1d2025] md:bg-altermain text-main",
          "bg-[#F7F7F7] !text-black",
        ];

        const bgColor = bgColors[index % bgColors.length];
        const cardRef = useRef(null);
        const isInView = useInView(cardRef, {
          once: true,
          // margin: "-100px 0px",
          amount: 0.3,
        });
        return (
          <div
            key={service?.id || index}
            ref={cardRef}
            className="grid grid-cols-12"
          >
            {isEven ? (
              <>
                {isMobile && (
                  <motion.div
                    className="col-span-12 md:col-span-6 lg:col-span-7"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      src={service?.image}
                      alt={service?.post_title}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- md:hidden max-h-[536px]-- object-cover"
                      sizes="100vw"
                    />
                  </motion.div>
                )}
                <motion.div
                  className={`lg:pl-[59px] lg:pr-20 ${
                    isMobile ? "containers" : "px-10"
                  } py-12 md:py-16 space-y-6 ${bgColor} flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-5`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.h2
                    className="main-heading2 "
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {service?.post_title}
                  </motion.h2>
                  <motion.span
                    className={`block w-14 h-[2px] ${
                      index === 2 ? "bg-altermain" : "bg-main"
                    }`}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  ></motion.span>

                  <motion.div
                    dangerouslySetInnerHTML={{
                      __html: service?.short_description,
                    }}
                    className="description md:max-w-[480px] md:space-y-7 !text-center md:!text-justify why "
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <FillButton
                      link={`/services/${service?.post_name}`}
                      text="Read more"
                    />
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="col-span-12 md:col-span-6 lg:col-span-5"
              >
                <Image
                  src={service?.image}
                  alt={service?.post_title}
                  width={0}
                  height={0}
                  className="w-full h-full max-w-[553px]-- max-h-[536px]-- object-cover "
                  sizes="100vw"
                />
              </motion.div>
            )}

            {!isEven ? (
              <motion.div
                className={`lg:pl-[59px] lg:pr-20 ${
                  isMobile ? "containers" : "px-10"
                } py-12 md:py-16 space-y-6 flex flex-col items-center md:items-start ${bgColor} col-span-12 md:col-span-6 justify-center lg:col-span-7`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.h2
                  className="main-heading2 "
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {service?.post_title}
                </motion.h2>
                <motion.span
                  className={`block w-14 h-[2px]  ${
                    index === 2 ? "bg-altermain" : "bg-main"
                  }`}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                ></motion.span>
                <motion.div
                  dangerouslySetInnerHTML={{
                    __html: service?.short_description,
                  }}
                  className="description md:max-w-[480px] md:space-y-7 !text-center md:!text-justify why "
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <FillButton
                    link={`/services/${service?.post_name}`}
                    text={"Read more"}
                    dark={index === 2 && true}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="col-span-12 md:col-span-6 lg:col-span-7"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={service?.image}
                  alt={service?.post_title}
                  width={0}
                  height={0}
                  className="w-full hidden md:block h-full max-w-[553px]-- max-h-[536px]-- object-cover "
                  sizes="100vw"
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Services;
