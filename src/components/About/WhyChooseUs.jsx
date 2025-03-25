"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = ({ whyChooseData, imageUrl }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="bg-altermain pt-[280px] sm:pt-[300px] md:pt-[400px] whychoose pb-10 sm:pb-20 mt-10 md:mt-14 lg:mt-[86px] relative"
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
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h3
            className="text-2xl md:text-3xl leading-[150%] text-main text-center mb-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            {cardData?.title}
          </motion.h3>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            {cardData?.sub_title}
          </motion.h2>

          <motion.span
            className="seperator2 mx-auto"
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4 } },
            }}
          />

          <motion.div
            className="mt-6 text-center text-sm md:text-base font-light space-y-7"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
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
