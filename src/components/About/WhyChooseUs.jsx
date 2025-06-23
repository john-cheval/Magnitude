"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/app/lib/framer";

const WhyChooseUs = ({ whyChooseData, imageUrl }) => {
  return (
    <section
      className="bg-altermain pt-[280px] sm:pt-[300px] md:pt-[400px] whychoose pb-10 sm:pb-20 md:mt-10  relative h-screen"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      {whyChooseData?.map((cardData, index) => (
        <motion.div
          key={index}
          className="flex flex-col containers items-center justify-center h-full z-50 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl leading-[150%] text-main text-center mb-2"
          >
            {cardData?.title}
          </motion.h3>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-4"
            variants={fadeInUp}
          >
            {cardData?.sub_title}
          </motion.h2>

          <motion.span className="seperator2 mx-auto" variants={fadeInUp} />

          <motion.div
            className="mt-6 text-center text-sm md:text-base font-light space-y-7"
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: cardData?.description }}
          />
        </motion.div>
      ))}

      <div className="bg-aboutBgGrad w-full h-full absolute bottom-0 left-0 z-20" />

      <style jsx>{`
        @media (min-width: 900px) {
          .whychoose {
            padding-top: 15%;
          }
        }

        @media (max-width: 550px) {
          .whychoose {
            padding-top: 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
