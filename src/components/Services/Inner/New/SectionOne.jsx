import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { containerVariants, fadeInUp } from "@/app/lib/framer";
import SectionOneMobile from "./SectionOneMobile";
const SectionOne = ({ serviceData }) => {
  return (
    <>
      <section className="hidden md:block">
        {serviceData?.image && (
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {serviceData?.image?.endsWith(".mp4") ? (
              <video
                src={serviceData?.image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full  object-cover"
              />
            ) : (
              <Image
                src={serviceData?.image}
                alt={serviceData?.title}
                width={1000}
                height={700}
                priority
                className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
                sizes="100vw"
              />
            )}

            <motion.div
              className={`  flex flex-col items-center md:items-start justify-center md:absolute top-1/2 right-[5%]   md:-translate-y-1/2 w-full md:max-w-[400px] lg:max-w-[600px] 2xl:max-w-[800px]- py-7 md:py-0 containers bg-[#f5f5f5] md:bg-transparent ${
                serviceData?.title === "Pre-Construction"
                  ? "text-altermain"
                  : "text-main"
              }`}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2
                className="main-heading2 mb-2 md:mb-6"
                variants={fadeInUp}
                style={{
                  lineHeight: 1.2,
                }}
              >
                {serviceData?.title}
              </motion.h2>
              <motion.span
                className={`block w-14 h-[2px]    mb-2 md:mb-5 ${
                  serviceData?.title === "Pre-Construction"
                    ? "bg-altermain"
                    : "bg-main"
                }`}
                variants={fadeInUp}
              ></motion.span>
              <motion.h3
                className="text-sm sm:!text-lg  !text-center md:!text-left lg:text-2xl  leading-[160%] mb-2 md:mb-4"
                variants={fadeInUp}
              >
                {serviceData?.sub_title}
              </motion.h3>
              <motion.div
                dangerouslySetInnerHTML={{
                  __html: serviceData?.description,
                }}
                className="serviceIn1"
                variants={fadeInUp}
              />
            </motion.div>
          </motion.div>
        )}
      </section>

      <div className="md:hidden">
        <SectionOneMobile servicesOne={serviceData} />
      </div>
    </>
  );
};

export default SectionOne;
