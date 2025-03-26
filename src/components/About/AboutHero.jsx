"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useInView } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  }),
};

const AboutHero = ({ banner, heading, list }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    if (banner) {
      setImageLoaded(true);
    }
  }, [banner]);

  return (
    <section className="relative mt-20" ref={sectionRef}>
      <div className="relative md:static">
        <Image
          src={banner}
          alt="hero"
          // width={0}
          // height={0}
          sizes="100vw"
          priority
          width={1200}
          height={530}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-auto object-cover max-h-[400px] hidden md:block"
        />

        {isMobile && (
          <h1 className="main-heading text-center absolute top-5 left-1/2 -translate-x-1/2 md:hidden">
            {heading}
          </h1>
        )}
      </div>

      <div className={`${isMobile ? "-mt-0" : "containers -mt-36"}`}>
        <h1 className="main-heading mb-8 text-left hidden md:block">
          {heading}
        </h1>

        <div className="grid grid-cols-12">
          {list?.map((item, index) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, {
              once: true,
              amount: index === 1 ? 0.3 : 0.5,
            });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial="hidden"
                animate={isCardInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.3 } },
                }}
                className="col-span-12 grid grid-cols-12"
              >
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      className="col-span-12 md:col-span-6 lg:col-span-5 relative"
                      variants={{
                        hidden: { scale: 0.9, opacity: 0 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.5, ease: "easeOut" },
                        },
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={`about-${index}`}
                        width={0}
                        height={0}
                        className="w-full h-full max-w-[553px]-- object-cover"
                        sizes="100vw"
                      />
                    </motion.div>
                    <motion.div
                      className="bg-[#1D2025] md:bg-altermain lg:pl-[59px] lg:pr-20 px-7 md:px-14 py-16 space-y-6 flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-7"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.6,
                            staggerChildren: 0.2,
                            when: "beforeChildren",
                          },
                        },
                      }}
                    >
                      <motion.h2
                        className="main-heading2"
                        variants={textVariants}
                      >
                        {item.title}
                      </motion.h2>
                      <motion.span
                        className="seperator"
                        variants={textVariants}
                      />
                      <motion.div
                        className="about"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                        variants={textVariants}
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    {isMobile && (
                      <motion.div
                        className="col-span-12 md:col-span-6 lg:col-span-7 md:hidden"
                        variants={{
                          hidden: { scale: 0.9, opacity: 0 },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.5, ease: "easeOut" },
                          },
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={`about-${index}`}
                          width={0}
                          height={0}
                          className="w-full h-full max-w-[553px]-- object-cover"
                          sizes="100vw col-span-12"
                        />
                      </motion.div>
                    )}

                    <motion.div
                      className="bg-altermain col-span-12 md:col-span-6 lg:col-span-5 md:bg-[#1D2025] lg:pl-[59px] lg:pr-20 px-7 md:px-14 py-16 space-y-6 flex flex-col items-center md:items-start justify-center"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.6,
                            staggerChildren: 0.2,
                            when: "beforeChildren",
                          },
                        },
                      }}
                    >
                      <motion.h2
                        className="main-heading2"
                        variants={textVariants}
                      >
                        {item.title}
                      </motion.h2>
                      <motion.span
                        className="seperator"
                        variants={textVariants}
                      />
                      <motion.div
                        className="about"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                        variants={textVariants}
                      />
                    </motion.div>

                    <motion.div
                      className="col-span-12 md:col-span-6 lg:col-span-7 hidden md:block"
                      variants={{
                        hidden: { scale: 0.9, opacity: 0 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.5, ease: "easeOut" },
                        },
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={`about-${index}`}
                        width={0}
                        height={0}
                        className="w-full h-full max-w-[553px]-- object-cover"
                        sizes="100vw"
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

export default AboutHero;
