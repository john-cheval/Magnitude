"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useInView } from "framer-motion";

const CareersList = ({ careersCategory }) => {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className={`${
        isMobile ? "" : "containers"
      } text-altermain mt-5 sm:mt-10 `}
    >
      <div className="grid grid-cols-12">
        <motion.div
          className="col-span-12 md:col-span-6 lg:col-span-7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={careersCategory[1]?.list_image}
            alt={careersCategory[1]?.name}
            width={0}
            height={0}
            className="image w-full h-full max-w-[553px]-- object-cover"
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          className="content px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[1]?.name}
          </motion.h2>
          <motion.span className="block w-14 h-[2px] bg-altermain mb-5"></motion.span>
          <motion.h3 className="description text-sm sm:!text-lg mb-1">
            {careersCategory[1]?.short_heading}
          </motion.h3>
          <motion.p className="description !text-center md:!text-justify max-w-[348px]-- mb-5">
            {careersCategory[1]?.short_description}
          </motion.p>
          <FillButton
            link={`/careers/${careersCategory[1]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </motion.div>
      </div>

      {/* Second Card */}
      <div className="grid grid-cols-12 md:col-spn-6 lg:col-span-5 md:mt-9 mb-12">
        {isMobile && (
          <motion.div
            className="col-span-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={careersCategory[0]?.list_image}
              alt={careersCategory[0]?.name}
              width={0}
              height={0}
              className="image w-full h-full max-w-[553px]-- object-cover md:hidden"
              sizes="100vw"
            />
          </motion.div>
        )}

        <motion.div
          className="content px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[0]?.name}
          </motion.h2>
          <motion.span className="block w-14 h-[2px] bg-altermain mb-5"></motion.span>
          <motion.h3 className="description text-sm sm:!text-lg mb-1">
            {careersCategory[0]?.short_heading}
          </motion.h3>
          <motion.p className="description !text-center md:!text-justify max-w-[348px]-- mb-5">
            {careersCategory[0]?.short_description}
          </motion.p>
          <FillButton
            link={`/careers/${careersCategory[0]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-6 lg:col-span-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={careersCategory[0]?.list_image}
            alt={careersCategory[0]?.name}
            width={0}
            height={0}
            className="image w-full h-full max-w-[553px]-- object-cover hidden md:block"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CareersList;
