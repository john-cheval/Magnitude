"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OutlineButton from "../common/OutlineButton";

const HomeHero = ({ title, link, linkText, videoUrl }) => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [textRef.current, buttonRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
    <section ref={sectionRef} className=" h-screen overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute bottom-7 md:bottom-[76px] left-1/2 -translate-x-1/2 space-y-4 md:space-y-6 lg:space-y-9 z-50">
        <h1
          ref={textRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
          {" "}
          {title}
        </h1>
        <div ref={buttonRef} className="flex items-center justify-center">
          <OutlineButton link={link} text={linkText} />
        </div>
      </div>

      <div className="absolute w-full h-full max-h-[288px] bg-homeHero bottom-0 left-0 z-40" />

      <div className="absolute w-full h-full max-h-[288px] bg-homeHero2 top-0 left-0 z-40" />
    </section>
  );
};

export default HomeHero;
