"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";

const ServiceMobile = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);
  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.2, once: true });

  return (
    <div className="containers py-10 bg-white">
      <motion.h3
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-semibold text-center text-altermain text-[30px] sm:text-[70px] uppercase"
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-1 pt-8 space-y-8">
        {homeCardData?.map((cardData, index) => {
          const cardRef = React.useRef(null);
          const cardInView = useInView(cardRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              key={index}
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={cardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href={`/services`} prefetch={true}>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={cardInView ? { scale: 1.05 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={cardData?.home_page_image}
                    alt={cardData?.post_title}
                    height={100}
                    width={300}
                    sizes="100vw"
                    className="w-full h-auto object-cover h-[350px]-- mb-5"
                  />
                </motion.div>

                <motion.h5
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-altermain text-lg leading-[150%] text-center mb-4"
                >
                  {cardData?.post_title}
                </motion.h5>

                <span className="seperator2Dark mx-auto"></span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceMobile;
