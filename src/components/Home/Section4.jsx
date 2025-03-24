"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = ({ imageUrl, homeCardData }) => {
  const cardRefs = useRef([]);
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const content = card.querySelectorAll(".card-content > *");
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);
  return (
    <>
      <section
        className=" h-screen--  relative pt-[80%] md:pt-[70%] lg:pt-[60%] pb-20 bg-altermain"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-12  z-10 containers  relative  ">
          {homeCardData?.map((cardData, index) => (
            <div
              key={cardData?.id || index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="px-9 border border-[#fff]  pt-8 pb-14 max-w-[370px]-- space-y-5 bg-altermain/20 flex flex-col items-center md:items-start card-content"
            >
              <h3 className="main-heading3 !text-center md:!text-left">
                {cardData?.title}
              </h3>
              <span className="block w-11 h-[2px] bg-main"></span>
              <div
                dangerouslySetInnerHTML={{ __html: cardData?.description }}
                className="home2"
              />
            </div>
          ))}
        </div>

        <div className="bg-homeBottomGrad w-full h-full max-h-[50%] absolute bottom-0 left-0 z-0" />
      </section>

      {/* <section className="bg-altermain h-screen  w-full"></section> */}
    </>
  );
};

export default Section4;
