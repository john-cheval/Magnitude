import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { containerVariants, fadeInUp } from "@/app/lib/framer";

const AboutHero = ({ list }) => {
  return (
    <section className="grid grid-cols-12 mt-28 xl:mt-20 lg:h-screen items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="col-span-12 lg:col-span-6 xl:col-span-7"
      >
        {isVideo(list?.image) ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/about.gif"
          >
            <source src={list?.image || "/about.gif"} type="video/mp4" />
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="col-span-12 lg:col-span-6 xl:col-span-5 lg:-ml-10 flex flex-col justify-center items-center lg:items-start w-full lg:max-w-[85%] gap-y-6 px-[20px] lg:px-0 my-5 lg:my-0 "
      >
        <motion.h2 className="main-heading2" variants={fadeInUp}>
          {list?.title}
        </motion.h2>
        <motion.span className="seperator" variants={fadeInUp} />
        <motion.div
          className="about !text-center lg:!text-justify"
          dangerouslySetInnerHTML={{ __html: list?.description }}
          variants={fadeInUp}
        />
      </motion.div>
    </section>
  );
};

export default AboutHero;
