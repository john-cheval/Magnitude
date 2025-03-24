"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";

const AboutHero = ({ banner, heading, list }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRefs = useRef([]);
  const imageBannerRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imageBannerRefs.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      [imageRefs.current[0]],
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      [contentRefs.current[0]],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      [imageRefs.current[1]],
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      [contentRefs.current[3]],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );

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
    <section className="relative mt-20" ref={sectionRef}>
      <div className="relative md:static">
        <Image
          src={banner}
          alt="hero"
          // ref={imageBannerRefs}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover max-h-[400px]--"
        />
        <div
          ref={titleRef}
          className="absolute w-full h-full max-h-[288px] bg-homeHero2 top-0 left-0 z-40 hidden lg:block"
        />

        {isMobile && (
          <h1
            ref={titleRef}
            className="main-heading   text-center  absolute bottom-5 left-1/2 -translate-x-1/2 md:hidden "
          >
            {heading}
          </h1>
        )}
      </div>
      <div className={`  ${isMobile ? "-mt-0" : "containers -mt-36"}`}>
        <h1
          className="main-heading mb-8  text-left hidden md:block"
          ref={titleRef}
        >
          {heading}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {list?.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <>
                  <div>
                    <Image
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={item.image}
                      alt={`about-${index}`}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div
                    ref={(el) => (contentRefs.current[index * 3] = el)}
                    className="bg-[#1D2025] md:bg-altermain lg:pl-[59px] lg:pr-20 px-7 md:px-14 py-16 space-y-6 flex flex-col items-center md:items-start"
                  >
                    <h2
                      ref={(el) => (contentRefs.current[index * 3 + 1] = el)}
                      className="main-heading2"
                    >
                      {item.title}
                    </h2>
                    <span
                      ref={(el) => (contentRefs.current[index * 3 + 2] = el)}
                      className="seperator"
                    ></span>
                    <div
                      ref={(el) => (contentRefs.current[index * 3 + 3] = el)}
                      className=" about  "
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {isMobile && (
                    <Image
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={item.image}
                      alt={`about-${index}`}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- object-cover"
                      sizes="100vw"
                    />
                  )}
                  <div
                    className="bg-altermain md:bg-[#1D2025] lg:pl-[59px] lg:pr-20 px-7 md:px-14 py-16 space-y-6 flex flex-col items-center md:items-start"
                    ref={(el) => (contentRefs.current[index * 3] = el)}
                  >
                    <h2
                      ref={(el) => (contentRefs.current[index * 3 + 1] = el)}
                      className="main-heading2"
                    >
                      {item.title}
                    </h2>
                    <span
                      ref={(el) => (contentRefs.current[index * 3 + 2] = el)}
                      className="seperator"
                    ></span>
                    <div
                      ref={(el) => (contentRefs.current[index * 3 + 3] = el)}
                      className="about"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                  <div>
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
