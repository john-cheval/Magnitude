"use client";
import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/app/lib/framer";
import { GoMute } from "react-icons/go";
import { LuVolume } from "react-icons/lu";

const AboutHero = ({ list }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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

  React.useEffect(() => {
    const video = videoRef.current;

    if (video?.readyState >= 3) {
      setVideoLoaded(true);
    } else {
      const onReady = () => setVideoLoaded(true);
      video?.addEventListener("canplaythrough", onReady);

      return () => video?.removeEventListener("canplaythrough", onReady);
    }
  }, []);

  return (
    <section className="grid grid-cols-12 mt-28 xl:mt-20 lg:h-screen items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="col-span-12 lg:col-span-6 xl:col-span-7"
      >
        {isVideo(list?.image) ? (
          <div className="relative">
            <video
              autoPlay
              loop
              onLoadedData={handleVideoLoad}
              muted={isMuted}
              playsInline
              preload="metadata"
              ref={videoRef}
              // poster="/about.gif"
            >
              <source src={list?.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {videoLoaded && (
              <div
                className=" w-fit  cursor-pointer z-50 absolute bottom-5 md:bottom-1/4 right-1/2 -translate-x-1/2- md:-translate-x-0 md:right-1/4"
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
        ) : (
          <Image
            src={list?.image}
            alt={list?.title}
            sizes="100vw"
            priority
            width={1200}
            height={500}
            className="w-full h-auto object-cover max-h-[400px]- "
          />
        )}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="col-span-12 lg:col-span-6 xl:col-span-5 lg:-ml-10 flex flex-col justify-center items-center lg:items-start w-full lg:max-w-[85%] gap-y-6 px-[20px] lg:px-0 my-5 lg:my-0 relative z-[100] "
      >
        <motion.h2 className="main-heading2" variants={fadeInUp}>
          {list?.title}
        </motion.h2>
        <motion.span className="seperator" variants={fadeInUp} />
        <motion.div
          className="about !text-center lg:!text-justify"
          dangerouslySetInnerHTML={{ __html: list?.description }}
          variants={fadeInUp}
        />
      </motion.div>
    </section>
  );
};

export default AboutHero;
