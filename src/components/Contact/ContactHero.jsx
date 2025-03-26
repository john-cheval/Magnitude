"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React, { useRef, useState } from "react";

function ContactHero({ bannerVideo }) {
  const isMobile = useIsMobile();
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
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
  return (
    <section className=" overflow-hidden relative pt-16 md:pt-0">
      {!videoLoaded && (
        <div className="absolute inset-0 z-10">
          <Image
            src={isMobile ? "/contactMobile.jpg" : "/contactDesk.jpg"}
            alt="Contact Fallback"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}
      <video
        autoPlay
        loop
        webkitplaysinline={"true"}
        muted
        onLoadedData={handleVideoLoad}
        ref={videoRef}
        playsInline
        preload="metadata"
        poster={isMobile ? "/contactMobile.jpg" : "/contactDesk.jpg"}
        width="100%"
        height="100%"
        className="w-full md:h-full object-cover h-[275px] md:max-h-[288px]--"
        src={bannerVideo}
      >
        {/* <source src={bannerVideo} type="video/mp4" /> */}
      </video>
      <div className="absolute w-full h-[250px] md:h-full hidden md:block md:max-h-[288px] bg-contactTopGrad top-0 left-0 z-40" />
    </section>
  );
}

export default ContactHero;
