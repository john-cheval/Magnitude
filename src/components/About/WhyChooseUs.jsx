"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WhyChooseUs = ({ whyChooseData, imageUrl }) => {
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      contentRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      className="bg-altermain  pt-[280px] sm:pt-[300px] md:pt-[400px] whychoose  sm:pb-20  mt-10 md:mt-14  lg:mt-[86px] relative"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      {whyChooseData?.map((cardData, index) => (
        <div
          key={index}
          className="flex flex-col containers items-center justify-center h-full z-50 relative "
        >
          <h3
            ref={(el) => (contentRefs.current[index * 4] = el)}
            className="text-2xl md:text-3xl leading-[150%]  text-main text-center mb-2"
          >
            {cardData?.title}
          </h3>
          <h2
            ref={(el) => (contentRefs.current[index * 4 + 1] = el)}
            className=" text-3xl md:text-4xl lg:text-5xl text-center mb-4"
          >
            {cardData?.sub_title}
          </h2>
          <span
            ref={(el) => (contentRefs.current[index * 4 + 2] = el)}
            className="seperator2 mx-auto"
          ></span>
          <div
            ref={(el) => (contentRefs.current[index * 4 + 3] = el)}
            className="mt-6 text-center text-sm md:text-base font-light space-y-7 "
            dangerouslySetInnerHTML={{ __html: cardData?.description }}
          />
        </div>
      ))}

      <div className="bg-aboutBgGrad w-full h-full  absolute bottom-0 left-0 z-20" />

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
