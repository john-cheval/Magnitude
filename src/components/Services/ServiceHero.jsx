"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { gsap } from "gsap";

const ServiceHero = ({ title, small_heading, description, bannerImage }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
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
      textRefs.current,
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

    gsap.fromTo(
      imageRef.current,
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className={` pt-28 md:pt-40 lg:pt-44 bg-altermain ${
        isMobile ? "" : "containers"
      }`}
    >
      <h1
        ref={titleRef}
        className="main-heading capitalize text-center md:text-left"
      >
        {title}
      </h1>
      <div className="relative">
        <Image
          ref={imageRef}
          src={bannerImage}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[450px] md:h-auto md:max-h-[530px]-- object-cover mt-5 md:mt-8 lg:mt-10"
        />

        <div className="absolute z-50 bottom-10 md:top-1/2 left-6 right-4 md:left-10 lg:left-20 md:-translate-y-1/2 space-y-5 flex flex-col items-center md:items-start">
          <h2
            className="main-heading2 "
            ref={(el) => (textRefs.current[0] = el)}
          >
            {small_heading}
          </h2>
          <span
            className="seperator"
            ref={(el) => (textRefs.current[1] = el)}
          ></span>
          <p
            className="description max-w-[413px]"
            ref={(el) => (textRefs.current[2] = el)}
          >
            {description}
          </p>
        </div>

        <div className="absolute  bg-serviceHeroGrad2 md:bg-serviceHeroGrad h-full w-full left-0 bottom-0 md:top-0" />
      </div>
    </section>
  );
};

export default ServiceHero;
