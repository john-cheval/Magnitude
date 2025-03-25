"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
const SectionThree = ({ data, layout = false }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  return (
    <section
      ref={sectionRef}
      className={`bg-altermain   text-main  containers ${
        isMobile ? "py-10" : "containers  mt-16 py-20"
      }`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 containers-- ${
          layout ? "gap-x-32" : "gap-x-[72px]"
        } `}
      >
        {layout && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={data?.image}
              alt={data?.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
        <motion.div
          className="space-y-7 pt-12 flex flex-col items-center md:items-start "
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2
            className="text-lg md:text-xl lg:text-2xl "
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {data?.title}
          </motion.h2>
          <motion.span
            className="w-8 h-[2px]  block bg-main"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          ></motion.span>

          <motion.div
            className="description why max-w-[517px] space-y-6"
            dangerouslySetInnerHTML={{ __html: data?.description }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          ></motion.div>
        </motion.div>

        {!layout && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={data?.image}
              alt={data?.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SectionThree;
