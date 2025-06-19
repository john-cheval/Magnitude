import React from "react";
import * as motion from "motion/react-client";
import { containerVariants, fadeInUp } from "@/app/lib/framer";
import Image from "next/image";

const SectionOneMobile = ({ servicesOne }) => {
  return (
    <section className=" containers">
      {" "}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {servicesOne?.mobile_image?.url?.endsWith(".mp4") ? (
          <video
            src={servicesOne?.mobile_image?.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full  object-cover"
          />
        ) : (
          <Image
            src={servicesOne?.mobile_image?.url}
            alt={servicesOne?.title}
            width={1000}
            height={700}
            priority
            className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          />
        )}

        <div
          className="bg-serviceInnerGrad absolute bottom-0 left-0 w-full h-20
        "
        />
      </motion.div>
      <motion.div
        className={`  flex flex-col items-center md:items-start justify-center  w-full  py-7  containers bg-altermain md:bg-transparent text-main`}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="main-heading2 mb-2 md:mb-6"
          variants={fadeInUp}
          style={{
            lineHeight: 1.2,
          }}
        >
          {servicesOne?.title}
        </motion.h2>
        <motion.span
          className={`block w-14 h-[2px]    mb-2 md:mb-5 bg-main`}
          variants={fadeInUp}
        ></motion.span>
        <motion.h3
          className="text-sm sm:!text-lg  !text-center md:!text-left lg:text-2xl  leading-[160%] mb-2 md:mb-4"
          variants={fadeInUp}
        >
          {servicesOne?.sub_title}
        </motion.h3>
        <motion.div
          dangerouslySetInnerHTML={{
            __html: servicesOne?.description,
          }}
          className="serviceIn1"
          variants={fadeInUp}
        />
      </motion.div>
    </section>
  );
};

export default SectionOneMobile;
