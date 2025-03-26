"use client";
import React, { useRef } from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useInView } from "framer-motion";

const CareersList = ({ careersCategory }) => {
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const isMobile = useIsMobile();

  const firstCardInView = useInView(firstCardRef, {
    once: true,
    margin: "-10% 0px",
    amount: 0.5,
  });
  const secondCardInView = useInView(secondCardRef, {
    once: true,
    // margin: "-100px",
    amount: 0.3,
  });

  return (
    <section
      className={`${isMobile ? "" : "containers"} text-altermain mt-5 sm:mt-10`}
    >
      <div ref={firstCardRef} className="grid grid-cols-12">
        <motion.div
          className="col-span-12 md:col-span-6 lg:col-span-7"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={careersCategory[1]?.list_image}
            alt={careersCategory[1]?.name}
            width={0}
            height={0}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="content px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={firstCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[1]?.name}
          </motion.h2>
          <motion.span
            className="block w-14 h-[2px] bg-altermain mb-5"
            initial={{ scaleX: 0 }}
            animate={firstCardInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <motion.h3 className="description text-sm sm:!text-lg mb-1">
            {careersCategory[1]?.short_heading}
          </motion.h3>
          <motion.p className="description !text-center md:!text-justify mb-5">
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
      <div ref={secondCardRef} className="grid grid-cols-12 md:mt-9 mb-12">
        {/* Mobile Image */}
        {isMobile && (
          <motion.div
            className="col-span-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={secondCardInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={careersCategory[0]?.list_image}
              alt={careersCategory[0]?.name}
              width={0}
              height={0}
              className="w-full h-full object-cover"
              sizes="100vw"
            />
          </motion.div>
        )}

        {/* Content - appears first on desktop */}
        <motion.div
          className="content px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-7 order-2 md:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={secondCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[0]?.name}
          </motion.h2>
          <motion.span
            className="block w-14 h-[2px] bg-altermain mb-5"
            initial={{ scaleX: 0 }}
            animate={secondCardInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
          <motion.h3 className="description text-sm sm:!text-lg mb-1">
            {careersCategory[0]?.short_heading}
          </motion.h3>
          <motion.p className="description !text-center md:!text-justify mb-5">
            {careersCategory[0]?.short_description}
          </motion.p>
          <FillButton
            link={`/careers/${careersCategory[0]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          className="col-span-12 md:col-span-6 lg:col-span-5 order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={secondCardInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={careersCategory[0]?.list_image}
            alt={careersCategory[0]?.name}
            width={0}
            height={0}
            className="w-full h-full object-cover hidden md:block"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CareersList;
