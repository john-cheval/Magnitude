"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const ServiceMobile = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    cardsRef.current.forEach((card, index) => {
      const image = card.querySelector("img");
      const heading = card.querySelector("h5");
      const separator = card.querySelector("span");

      gsap.from([image, heading, separator], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [homeCardData]);
  return (
    <div className="containers py-10" ref={sectionRef}>
      <h3
        ref={titleRef}
        className="font-semibold text-center text-altermain text-[30px] sm:text-[70px] uppercase"
      >
        {title}
      </h3>

      <div className="text-red-500 grid grid-cols-1 pt-8 space-y-8">
        {homeCardData?.map((cardData, index) => (
          <Link
            ref={addToCardsRef}
            key={index}
            href={`/services/${cardData?.post_name}`}
            prefetch={true}
          >
            <Image
              src={cardData?.home_page_image}
              alt={cardData?.post_title}
              className="w-full h-auto object-cover h-[350px]-- mb-5"
              height={0}
              width={0}
              sizes="100vw"
            />

            <h5 className="text-altermain text-lg  leading-[150%]  text-center mb-4">
              {cardData?.post_title}
            </h5>
            <span className="seperator2Dark mx-auto"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceMobile;
