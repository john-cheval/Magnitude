"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useInView } from "framer-motion";

const ServiceHero = ({ title, small_heading, description, bannerImage }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section
      ref={sectionRef}
      className={`pt-28 md:pt-40 lg:pt-44 bg-altermain ${
        isMobile ? "" : "containers"
      }`}
    >
      <motion.h1
        ref={titleRef}
        className="main-heading capitalize text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {title}
      </motion.h1>

      <div className="relative">
        <motion.div
          ref={imageRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={bannerImage}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[450px] md:h-auto md:max-h-[530px] object-cover mt-5 md:mt-8 lg:mt-10"
          />
        </motion.div>

        <div className="absolute z-50 about-her md:top-1/2 left-6 right-4 md:left-10 lg:left-20 md:-translate-y-1/2 space-y-5 flex flex-col items-center md:items-start">
          <motion.h2
            className="main-heading2"
            ref={(el) => (textRefs.current[0] = el)}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {small_heading}
          </motion.h2>

          <motion.span
            className="seperator"
            ref={(el) => (textRefs.current[1] = el)}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          ></motion.span>

          <motion.p
            className="description !text-center md:!text-left max-w-[413px]"
            ref={(el) => (textRefs.current[2] = el)}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="absolute bg-serviceHeroGrad2 md:bg-serviceHeroGrad h-full w-full left-0 bottom-0 md:top-0" />
      </div>
    </section>
  );
};

export default ServiceHero;
