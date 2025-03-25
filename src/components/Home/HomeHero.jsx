"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import OutlineButton from "../common/OutlineButton";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";
import Image from "next/image";

const HomeHero = ({ title, link, linkText, videoUrl }) => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const mobileLinkRef = useRef(null);
  const videoRef = useRef(null);
  const isMobile = useIsMobile();
  const [videoSrc, setVideoSrc] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setVideoSrc(videoUrl);
    }, 1000);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);

    if (
      typeof window !== "undefined" &&
      window.performance &&
      window.performance.mark
    ) {
      window.performance.mark("video-loaded");
    }
  };

  useEffect(() => {
    gsap.fromTo(
      [textRef.current, buttonRef.current, mobileLinkRef.current],
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
    <section
      ref={sectionRef}
      className="overflow-hidden md:h-screen relative pt-16-- md:pt-0"
    >
      <Link
        rel="preload"
        href="/Magnitude.png"
        as="image"
        fetchPriority="high"
      />

      {!videoLoaded && (
        <div className="absolute inset-0 z-10">
          <Image
            src="/Magnitude.png"
            alt="Hero Fallback"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}
      {videoSrc && (
        <video
          autoPlay
          loop
          ref={videoRef}
          onLoadedData={handleVideoLoad}
          webkitPlaysInline
          muted
          playsInline
          preload="metadata"
          width="100%"
          height="100%"
          poster={"/Magnitude.jpg"}
          className="w-screen h-[300px] md:h-full md:max-h-[288px]-- object-cover"
          src={videoUrl}
        />
      )}

      <div
        className={` ${
          isMobile ? "containers" : ""
        } absolute flex md:flex-col justify-between md:justify-start items-center md:items-start bottom-7 md:bottom-[76px] md:left-1/2 md:-translate-x-1/2  md:space-y-6 lg:space-y-9 z-50 w-full md:w-fit`}
      >
        <h1
          ref={textRef}
          className="text-lg  sm:text-xl md:text-2xl lg:text-3xl"
        >
          {" "}
          {title}
        </h1>
        <div ref={mobileLinkRef}>
          <Link
            href={link}
            className="underline text-sm md:hidden uppercase hover:no-underline transition-all duration-300"
          >
            {linkText}
          </Link>
        </div>
        <div
          ref={buttonRef}
          className="md:flex items-center justify-center hidden w-full "
        >
          <OutlineButton link={link} text={linkText} />
        </div>
      </div>

      <div className="absolute w-full h-full hidden md:block max-h-[288px] bg-homeHero2 top-0 left-0 z-40" />

      <div className="absolute w-full h-full max-h-[288px] bg-homeHero bottom-0 left-0 z-40 hidden md:block" />
    </section>
  );
};

export default HomeHero;
