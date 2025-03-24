"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
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
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    tl.from(
      titleRef.current,

      {
        scale: 8,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        `-=0.5`
      );
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative bg-altermain-- w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="bg-altermain w-full h-[100vh]  h-[860px]-- h-screen--  flex items-center justify-center">
        <h3
          ref={titleRef}
          className="text-center text-[12vw]  lg:text-[110px] xl:text-[150px] font-bold uppercase"
        >
          {title}
        </h3>
      </div>

      <div
        id="pinnedWorks"
        className="relative pt-8-- md:pt-12-- xl:pt-14-- h-fit w-screen overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 containers pt-16 lg:pt-[120px] pb-[93px] relative">
          {homeCardData?.map((cardData, index) => (
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="space-y-4 lg:space-y-6"
              key={cardData?.ID || index}
            >
              <Image
                src={cardData?.home_page_image}
                alt={cardData?.post_title}
                className="w-full h-auto object-cover max-h-[470px]--"
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
