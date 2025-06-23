import isVideo from "@/app/lib/checkVideo";
import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

const SectionTwo = ({ list }) => {
  return (
    <section className={`relative lg:h-screen`}>
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {isVideo(list?.image) ? (
            <video autoPlay loop muted playsInline preload="metadata">
              <source src={list?.image || "/about.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={list?.image}
              alt={list?.title}
              sizes="100vw"
              priority
              width={1200}
              height={500}
              className="w-full h-auto object-cover max-h-[400px]- "
            />
          )}
        </motion.div>

        <div className="md:absolute z-50 about-her md:top-1/2 left-6 right-4 md:left-10 lg:left-[10%] md:-translate-y-1/2 space-y-3 sm:space-y-5 flex flex-col items-center md:items-start py-5 md:py-0 px-5 md:px-0">
          <motion.h2
            className="main-heading2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {list?.title}
          </motion.h2>

          <motion.span
            className="seperator"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          ></motion.span>

          <motion.div
            className="text-sm md:text-base font-light font-helvatica !leading-[186%] text-center md:text-justify max-w-[413px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              lineHeight: 1.8,
            }}
            dangerouslySetInnerHTML={{ __html: list?.description }}
          ></motion.div>
        </div>

        <div className="absolute bg-serviceHeroGrad2 md:bg-aboutgrad h-full w-full md:w-[75%] left-0 bottom-0 md:top-0 hidden md:block" />
      </div>
    </section>
  );
};

export default SectionTwo;
