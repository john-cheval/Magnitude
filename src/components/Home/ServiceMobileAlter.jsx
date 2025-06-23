"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import isVideo from "@/app/lib/checkVideo";

const ServiceMobileAlter = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);
  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.2, once: true });

  return (
    <section className="containers py-10 bg-white">
      <motion.h3
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-semibold text-center text-altermain text-[30px] sm:text-[70px] uppercase"
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-2 gap-x-2 mt-8">
        {homeCardData?.slice(0, 2)?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {isVideo(item?.home_page_image?.url) ? (
                <video
                  src={item?.home_page_image?.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full"
                />
              ) : (
                <Image
                  src={item?.home_page_image?.url}
                  alt={item?.post_title}
                  className="w-full h-auto md:h-auto-- object-cover h-[460px]-"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className=" flex flex-col mt-8">
        {homeCardData?.map((data, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
            >
              <Link
                href={"/services"}
                className={`text-altermain  font-century text-lg  group hover:translate-x-2 transition-transform duration-300  !leading-[150%] py-4 flex  items-center justify-between border-b border-b-[#CECECE] ${
                  index === 0 && "border-t border-t-[#cecece]"
                }`}
              >
                {data?.post_title}{" "}
                <GoArrowRight className="group-hover:-rotate-45 transition-transform duration-300" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceMobileAlter;
