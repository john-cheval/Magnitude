import React from "react";
import * as motion from "motion/react-client";
import { containerVariants, fadeInUp } from "@/app/lib/framer";

const SectionThree = ({ list, valuesData }) => {
  return (
    <section
      className="my-11 py-16 md:py-24 2xl:py-[190px] containers"
      style={{
        backgroundImage: `url(${list?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center"
      >
        <motion.h3 className="main-heading2 mb-4 md:mb-6 " variants={fadeInUp}>
          {list?.title}
        </motion.h3>
        <motion.span className="seperator mb-4" variants={fadeInUp} />
        <motion.div
          className="description !text-center w-full md:max-w-[80%] "
          dangerouslySetInnerHTML={{ __html: list?.description }}
          variants={fadeInUp}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex justify-center flex-wrap lg:flex-nowrap gap-y-5 md:gap-y-10 pt-5 md:pt-8 lg:gap-x-14 2xl:gap-x-28"
      >
        {valuesData &&
          valuesData?.map((values, index) => {
            return (
              <article key={index} className="space-y-1 md:space-y-5">
                <motion.h5
                  variants={fadeInUp}
                  className="text-center font-century text-xl lg:text-2xl !leading-[186%]"
                >
                  {values?.title}
                </motion.h5>
                <motion.div
                  variants={fadeInUp}
                  className="text-sm md:text-base font-light font-helvatica !leading-[186%] text-center"
                  dangerouslySetInnerHTML={{ __html: values?.description }}
                ></motion.div>
              </article>
            );
          })}
      </motion.div>
    </section>
  );
};

export default SectionThree;
