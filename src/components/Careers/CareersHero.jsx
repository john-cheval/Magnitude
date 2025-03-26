"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CareersHero = ({ title, bannerImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (bannerImage) {
      setImageLoaded(true);
    }
  }, [bannerImage]);

  return (
    <section className="containers pt-28 md:pt-40 lg:pt-44">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="main-heading !text-altermain capitalize text-center md:text-left"
      >
        {title}
      </motion.h1>

      {/* Skeleton Loader
      {!imageLoaded && (
        <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-lg mt-5 md:mt-8 lg:mt-10" />
      )} */}

      {/* Animated Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-5 md:mt-8 lg:mt-10 overflow-hidden"
      >
        <Image
          src={bannerImage}
          alt={title}
          width={1200}
          height={530}
          priority
          className={`w-full h-auto max-h-[530px] object-cover transition-opacity duration-500 `}
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
    </section>
  );
};

export default CareersHero;
