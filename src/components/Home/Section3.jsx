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

    tl.from(
      titleRef.current,

      {
        scale: 1000,

        ease: Power3.easeOut,
      }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  return (
    <section ref={sectionRef} className="relative w-full h-full  ">
      <div className="bg-altermain-- w-full h-[100dvh]   flex items-center justify-center overflow-hidden">
        <h3
          ref={titleRef}
          className="text-center text-altermain text-[40px] sm:text-[80px] md:text-[100px]   xl:text-[150px] font-bold uppercase"
        >
          {title}
        </h3>
      </div>

      <div className="relative  h-fit w-screen overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 containers relative pb-20">
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
