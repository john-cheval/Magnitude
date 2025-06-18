"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";

const ServiceMobileAlter = ({ title, serviceData }) => {
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
    </section>
  );
};

export default ServiceMobileAlter;
