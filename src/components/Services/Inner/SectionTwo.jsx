"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useInView } from "framer-motion";

const SectionTwo = ({ serviceData, layout }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });
  return (
    <div
      ref={sectionRef}
      className={`grid grid-cols-12 bg-white  ${
        isMobile ? "" : "containers mt-9"
      }`}
    >
      {layout && (
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
              className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
              sizes="100vw"
            />
          )}
          {/* <Image
            src={serviceData?.image}
            alt={serviceData?.title}
            width={0}
            height={0}
            className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          /> */}
        </motion.div>
      )}

      {isMobile && !layout && (
        <motion.div
          className="col-span-12 md:col-span-6 lg:col-span-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={serviceData?.image}
            alt={serviceData?.title}
            width={0}
            height={0}
            className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          />
        </motion.div>
      )}
      <motion.div
        className={` px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6  ${
          layout ? "lg:col-span-5" : "lg:col-span-7"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.h2
          className=" text-lg md:text-xl lg:text-2xl mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {serviceData?.title}
        </motion.h2>
        <motion.span
          className="block w-8 h-[2px]   bg-altermain mb-5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        ></motion.span>

        <motion.div
          className="serviceKey"
          dangerouslySetInnerHTML={{ __html: serviceData?.description }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </motion.div>

      {!isMobile && !layout && (
        <motion.div
          className="col-span-12 md:col-span-6  lg:col-span-5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={serviceData?.image}
            alt={serviceData?.title}
            width={0}
            height={0}
            className="w-full h-full max-w-[553px]-- hidden md:block max-h-[404px]-- object-cover"
            sizes="100vw"
          />
        </motion.div>
      )}
    </div>
  );
};

export default SectionTwo;
