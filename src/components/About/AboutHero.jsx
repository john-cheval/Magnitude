"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = ({ banner, heading, list }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  return (
    <section className="relative mt-20" ref={sectionRef}>
      <div className="relative md:static">
        <Image
          src={banner}
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover max-h-[400px]-- hidden md:block"
        />

        {isMobile && (
          <h1
            ref={titleRef}
            className="main-heading text-center absolute top-5 left-1/2 -translate-x-1/2-- md:hidden"
          >
            {heading}
          </h1>
        )}
      </div>

      <div className={` ${isMobile ? "-mt-0" : "containers -mt-36"}`}>
        <h1 className="main-heading mb-8 text-left hidden md:block">
          {heading}
        </h1>

        <div className="grid grid-cols-12">
          {list?.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="col-span-12 md:col-span-6 lg:col-span-5 relative">
                    <Image
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={item.image}
                      alt={`about-${index}`}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- object-cover"
                      sizes="100vw"
                    />

                    {isMobile && (
                      <h1
                        ref={titleRef}
                        className="main-heading text-center absolute top-7 left-1/2 -translate-x-1/2 md:hidden"
                      >
                        {heading}
                      </h1>
                    )}
                  </div>
                  <div className="bg-[#1D2025] md:bg-altermain lg:pl-[59px] lg:pr-20 px-7 md:px-14 py-16 space-y-6 flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-7">
                    <h2
                      ref={(el) => (contentRefs.current[index * 3] = el)}
                      className="main-heading2"
                    >
                      {item.title}
                    </h2>
                    <span
                      ref={(el) => (contentRefs.current[index * 3 + 1] = el)}
                      className="seperator"
                    ></span>
                    <div
                      ref={(el) => (contentRefs.current[index * 3 + 2] = el)}
                      className="about"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {isMobile && (
                    <div className="col-span-12 md:col-span-6 lg:col-span-7 md:hidden">
                      <Image
                        ref={(el) => (imageRefs.current[index] = el)}
                        src={item.image}
                        alt={`about-${index}`}
                        width={0}
                        height={0}
                        className="w-full h-full max-w-[553px]-- object-cover"
                        sizes="100vw col-span-12"
                      />
                    </div>
                  )}
                  <div className="bg-altermain col-span-12 md:col-span-6 lg:col-span-5 md:bg-[#1D2025] lg:pl-[59px] lg:pr-20 px-7 md:px-14 py-16 space-y-6 flex flex-col items-center md:items-start justify-center">
                    <h2
                      ref={(el) => (contentRefs.current[index * 3] = el)}
                      className="main-heading2"
                    >
                      {item.title}
                    </h2>
                    <span
                      ref={(el) => (contentRefs.current[index * 3 + 1] = el)}
                      className="seperator"
                    ></span>
                    <div
                      ref={(el) => (contentRefs.current[index * 3 + 2] = el)}
                      className="about"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-7">
                    <Image
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={item.image}
                      alt={`about-${index}`}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- object-cover hidden md:block"
                      sizes="100vw"
                    />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
