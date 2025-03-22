"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import heroImage from "../../../public/Careers/hero.png";
import { gsap } from "gsap";

const CareersHero = ({ title, bannerImage }) => {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="containers pt-28 md:pt-40 lg:pt-44">
      <h1
        ref={headingRef}
        className="main-heading !text-altermain capitalize text-center md:text-left "
      >
        {title}
      </h1>
      <Image
        ref={imageRef}
        src={bannerImage || heroImage}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto max-h-[530px]-- object-cover mt-5 md:mt-8 lg:mt-10 "
      />
    </section>
  );
};

export default CareersHero;
