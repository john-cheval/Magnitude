import React from "react";
import * as motion from "motion/react-client";
import { containerVariants, fadeInUp } from "@/app/lib/framer";

const SectionTwo = ({ serviceData }) => {
  return (
    <section className="containers py-8 md:py-10 lg:pt-16 lg:pb-16 xl:pb-20 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-10 lg:gap-x-16 border-b border-b-[#989898] ">
      {serviceData &&
        serviceData?.slice(1)?.map((item, index) => {
          return (
            <motion.div
              variants={containerVariants}
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="md:space-y-5 space-y-3"
            >
              <motion.h3
                variants={fadeInUp}
                className="text-xl lg:text-2xl font-normal text-altermain text-center md:text-left "
              >
                {item?.title}
              </motion.h3>
              <motion.span
                className="block w-8 h-[2px] mx-auto md:mx-0   bg-altermain "
                variants={fadeInUp}
              ></motion.span>
              <motion.div
                dangerouslySetInnerHTML={{
                  __html: item?.description,
                }}
                className="serviceIn1"
                variants={fadeInUp}
              />
            </motion.div>
          );
        })}
    </section>
  );
};

export default SectionTwo;
