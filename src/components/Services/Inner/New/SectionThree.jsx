import React from "react";
import * as motion from "motion/react-client";
import { containerVariants, fadeInUp } from "@/app/lib/framer";
import Image from "next/image";
import isVideo from "@/app/lib/checkVideo";

const SectionThree = ({ data }) => {
  return (
    <section className="containers pt-8 pb-3 lg:py-14 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 xl:gap-x-24 gap-y-5">
      <motion.div
        className="md:gap-y-5 gap-y-3  flex flex-col items-center md:items-start order-1 md:-order-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-lg md:text-xl lg:text-2xl "
          variants={fadeInUp}
        >
          {data?.title}
        </motion.h2>
        <motion.span
          className="w-8 h-[2px]  block bg-altermain"
          variants={fadeInUp}
        ></motion.span>

        <motion.div
          className="description why max-w-[517px]-- space-y-6 "
          dangerouslySetInnerHTML={{ __html: data?.description }}
          variants={fadeInUp}
        ></motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {isVideo(data?.image) ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover -order-1 md:order-2"
          >
            <source src={data?.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={data?.image}
            alt={data?.title}
            priority
            width={550}
            height={250}
            sizes="100vw"
            className="w-full h-full object-cover -order-1 md:order-2"
          />
        )}
      </motion.div>
    </section>
  );
};

export default SectionThree;
