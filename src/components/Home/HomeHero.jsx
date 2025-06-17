"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import OutlineButton from "../common/OutlineButton";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";
import Image from "next/image";
import { GoMute } from "react-icons/go";
import { LuVolume } from "react-icons/lu";

const HomeHero = ({ title, link, linkText, videoUrl }) => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const mobileLinkRef = useRef(null);
  const videoRef = useRef(null);
  const isMobile = useIsMobile();
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden md:h-screen relative pt-24 md:pt-[125px]"
    >
      <Link rel="preload" href="/" as="image" fetchPriority="high" />

      {!videoLoaded && (
        <div className="absolute inset-0 z-10">
          <Image
            // src={isMobile ? "/home.gif" : "/homee.gif"}
            src={isMobile ? "/MagnitudeMobile.jpg" : "/Magnitude.jpg"}
            alt="Hero Fallback"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}

      <video
        autoPlay
        loop
        ref={videoRef}
        onLoadedData={handleVideoLoad}
        webkitplaysinline={"true"}
        poster={isMobile ? "/MagnitudeMobile.jpg" : "/Magnitude.jpg"}
        // poster="/home.gif"
        muted={isMuted}
        playsInline
        preload="metadata"
        width="100%"
        height="100%"
        className="w-screen h-[300px] md:h-full md:max-h-[288px]-- object-cover"
        src={videoUrl}
      />

      <div
        className={` ${
          isMobile ? "containers" : ""
        } absolute flex flex-col gap-y-4 md:gap-y-0 justify-center md:justify-start items-center md:items-start bottom-7 md:bottom-[76px] md:left-1/2 md:-translate-x-1/2  md:space-y-6 lg:space-y-9-- z-50 w-full md:w-fit`}
      >
        <h1
          ref={textRef}
          className="text-lg  sm:text-xl md:text-2xl lg:text-3xl"
        >
          {" "}
          {title}
        </h1>

        {videoLoaded && (
          <div
            className=" w-fit  cursor-pointer z-50 md:hidden"
            onClick={toggleMute}
          >
            {isMuted ? (
              <GoMute className="text-main text-lg" />
            ) : (
              <LuVolume className="text-main text-lg" />
            )}
          </div>
        )}
      </div>

      {videoLoaded && (
        <div
          className="absolute w-fit h-full-- right-10 md:top-[87%] lg:top-[86%] xl:top-[88%] cursor-pointer z-50 hidden md:block"
          onClick={toggleMute}
        >
          {isMuted ? (
            <GoMute className="text-main text-xl" />
          ) : (
            <LuVolume className="text-main text-xl" />
          )}
        </div>
      )}

      <div className="absolute w-full h-full hidden md:block max-h-[288px] bg-homeHero2 top-0 left-0 z-40" />

      <div className="absolute w-full h-full max-h-[288px] bg-homeHero bottom-0 left-0 z-40 hidden md:block" />
    </section>
  );
};

export default HomeHero;
