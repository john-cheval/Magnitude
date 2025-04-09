"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
const SectionOne = ({ serviceData }) => {
  console.log(serviceData?.image?.endsWith(".mp4"), "sectionOne video check");
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  return (
    <div
      ref={sectionRef}
      className={`grid  md:grid-cols-12 ${isMobile ? "" : "containers"}`}
    >
      <motion.div
        className="col-span-12 md:col-span-6  lg:col-span-7"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {serviceData?.image?.endsWith(".mp4") ? (
          <video
            src={serviceData?.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={serviceData?.image}
            alt={serviceData?.title}
            width={0}
            height={0}
            priority
            className="w-full h-auto max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          />
        )}
      </motion.div>

      <motion.div
        className={` px-7 md:px-10 lg:px-14  py-12  bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6  lg:col-span-5`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.h2
          className="main-heading2 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {serviceData?.title}
        </motion.h2>
        <motion.span
          className="block w-14 h-[2px]   bg-altermain mb-5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        ></motion.span>
        <motion.h3
          className="text-sm sm:!text-lg  !text-center md:!text-left lg:text-2xl  leading-[160%] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {serviceData?.sub_title}
        </motion.h3>
        <motion.div
          dangerouslySetInnerHTML={{
            __html: serviceData?.description,
          }}
          className="serviceIn1"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

export default SectionOne;
