"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const OurValues = ({ ourValuesData }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  return (
    <section
      className={`${isMobile ? "-mt-0" : "containers mt-12--"} text-altermain`}
      ref={sectionRef}
    >
      {ourValuesData?.map((data, index) => {
        const itemRef = useRef(null);
        const isInView = useInView(itemRef, { once: true, amount: 0.3 });

        return (
          <motion.div
            key={index + 1}
            ref={itemRef}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8-- md:py-10"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="w-full h-full"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <Image
                src={data?.image}
                alt={data?.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="px-7 md:px-12 lg:pl-14 space-y-5 pt-8 md:pt-11 flex flex-col items-start justify-center"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              <motion.h3
                className="main-heading2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                {data?.title}
              </motion.h3>

              <motion.span
                className="seperatorDark"
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  visible: {
                    opacity: 1,
                    scaleX: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
              />

              <motion.div
                className="description list"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default OurValues;
