import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

const ServiceHero = ({ title, small_heading, description, bannerImage }) => {
  return (
    <section className={`mt-[100px]`}>
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={bannerImage}
            priority
            alt={title}
            width={1200}
            height={530}
            sizes="100vw"
            className="w-full h-[450px] md:h-auto md:max-h-[715px] object-cover mt-5 md:mt-8 lg:mt-10"
          />
        </motion.div>

        <div className="absolute z-50 about-her md:top-1/2 left-6 right-4 md:left-10 lg:left-[10%] md:-translate-y-1/2 space-y-3 sm:space-y-5 flex flex-col items-center md:items-start">
          <motion.h2
            className="main-heading2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {small_heading}
          </motion.h2>

          <motion.span
            className="seperator"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          ></motion.span>

          <motion.p
            className="description !text-center md:!text-left max-w-[413px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              lineHeight: 1.8,
            }}
          >
            {description}
          </motion.p>
        </div>

        <div className="absolute bg-serviceHeroGrad2 md:bg-serviceHeroGrad h-full w-full md:w-[75%] left-0 bottom-0 md:top-0" />
      </div>
    </section>
  );
};

export default ServiceHero;
