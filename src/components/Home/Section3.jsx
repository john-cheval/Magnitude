"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import ServiceMobile from "./ServiceMobile";
import useIsMobile from "@/hooks/useIsMobile";
import { GoArrowRight } from "react-icons/go";
import ServiceMobileAlter from "./ServiceMobileAlter";
gsap.registerPlugin(ScrollTrigger);
// import { motion } from "framer-motion";
const Section3 = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);
  const isMobile = useIsMobile();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#pinnedWorkSection",
        start: "top top",
        end: "bottom ",
        // end: "bottom+=100% ",

        // scrub: 0.6,
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    timeline
      .from("#worksText", {
        ease: Power3.easeOut,
        scale: 800,
        smoothOrigin: true,
      })
      .to("#pinnedWorks", {
        y: -window.innerHeight,
        smoothOrigin: true,
      });

    timeline.to("#worksText", {
      opacity: 0,
      scale: 0,
      ease: "power2.out",
    });

    timeline.fromTo(
      /*  ".work-card" */ gsap.utils.toArray(".work-card"),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 50, stagger: 0.5, ease: Power3.easeOut },
      "-=0.2"
    );
  }, []);

  return (
    <>
      <section
        className={`relative !bg-white hidden md:block w-full h-[100dvh] ${
          isMobile ? "" : "homeSection3--"
        } `}
        id="pinnedWorkSection"
        style={{
          background: "url(/magnitude.svg)",
          backgroundSize: "100% auto",
          backgroundPosition: "left 95%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full flex items-center justify-center overflow-hidden h-[100dvh]">
          <h3
            className="text-center text-altermain text-[30px] sm:text-[70px] md:text-[120px] lg:text-[150px] font-bold uppercase"
            id="worksText"
          >
            {title}
          </h3>
        </div>

        <div
          className="relative  h-[100dvh] w-screen flex items-center justify-center- overflow-hidden"
          id="pinnedWorks"
        >
          <div
            className=" flex gap-x-5 lg:gap-x-9 containers relative w-full "
            id="pinnedWorksItems"
          >
            <div className="w-[60%] grid grid-cols-2 gap-4">
              {homeCardData?.slice(0, 2)?.map((cardData, index) => (
                <div
                  className={`space-y-4 lg:space-y-6 cursor-pointer work-card ${
                    index === 1 && "mt-16"
                  }`}
                  prefetch={true}
                  key={cardData?.ID || index}
                >
                  <Image
                    src={cardData?.home_page_image}
                    alt={cardData?.post_title}
                    className="w-full md:h-auto-- object-cover h-[460px]"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>

            <div className="w-[40%] work-card flex flex-col">
              {homeCardData?.map((data, index) => {
                return (
                  <Link
                    key={index}
                    href={"/services"}
                    className={`text-altermain  font-century text-xl lg:text-2xl group hover:translate-x-2 transition-transform duration-300  !leading-[150%] py-4 lg:py-6 flex  items-center justify-between border-b border-b-[#CECECE] ${
                      index === 0 && "border-t border-t-[#cecece]"
                    }`}
                  >
                    {data?.post_title}{" "}
                    <GoArrowRight className="group-hover:-rotate-45 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden block">
        {/* <ServiceMobile title={title} serviceData={serviceData} /> */}
        <ServiceMobileAlter title={title} serviceData={serviceData} />
      </div>
    </>
  );
};

export default Section3;
