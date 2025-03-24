"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Section3 = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        // end: "+=300%",
        end: "bottom+=100% top",
        scrub: true,
        pin: true,
      },
    });

    tl.from(titleRef.current, {
      scale: 1000,
      ease: Power3.easeOut,
    });
    tl.to("#pinnedWorks", {
      y: -window.innerHeight,
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-full---  h-[500px]  md:h-[500px] lg:h-[750px] "
    >
      <div className="bg-altermain-- w-full min-h-[100dvh]   flex items-center justify-center overflow-hidden">
        <h3
          ref={titleRef}
          className="text-center text-altermain text-[90px] sm:text-[100px] md:text-[100px] lg:text-[150px] font-bold uppercase"
        >
          {title}
        </h3>
      </div>

      <div
        className="relative  h-fit w-screen overflow-hidden"
        id="pinnedWorks"
      >
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-6 containers relative pt-8 md:pt-12 xl:pt-14 pb-20--">
          {homeCardData?.map((cardData, index) => (
            <div className="space-y-4 lg:space-y-6" key={cardData?.ID || index}>
              <Image
                src={cardData?.home_page_image}
                alt={cardData?.post_title}
                className="w-full md:h-auto object-cover h-[350px] max-h-[470px]--"
                width={0}
                height={0}
                sizes="100vw"
              />

              <h5 className="text-altermain text-xl lg:text-2xl leading-[150%]">
                {cardData?.post_title}
              </h5>
              <span className="seperator2Dark"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
