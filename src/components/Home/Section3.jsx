"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceMobile from "./ServiceMobile";
gsap.registerPlugin(ScrollTrigger);

const Section3 = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);

  useGSAP(() => {
    const pinnedWorksItems = document.getElementById("pinnedWorksItems");
    const workInnerHeight = pinnedWorksItems.children[0].clientHeight;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#pinnedWorkSection",
        start: "top top",
        end: "bottom+=100% top",
        scrub: 0.9,
        pin: true,
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

    timeline.fromTo(
      ".work-card",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 100, stagger: 0.2, ease: Power3.easeOut },
      "-=0.5"
    );
  }, []);

  return (
    <>
      <section
        className="relative hidden md:block w-full h-full min-h-[100dvh]-- md:h-[580px] lg:h-[750px]"
        id="pinnedWorkSection"
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
          className="relative pt-8 md:pt-12 xl:pt-14 h-fit w-screen overflow-hidden"
          id="pinnedWorks"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-6 containers relative pb-20"
            id="pinnedWorksItems"
          >
            {homeCardData?.map((cardData, index) => (
              <Link
                href={`/services/${cardData?.post_name}`}
                className="space-y-4 lg:space-y-6 cursor-pointer work-card"
                prefetch={true}
                key={cardData?.ID || index}
              >
                <Image
                  src={cardData?.home_page_image}
                  alt={cardData?.post_title}
                  className="w-full md:h-auto object-cover h-[350px]"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <h5 className="text-altermain text-xl lg:text-2xl leading-[150%]">
                  {cardData?.post_title}
                </h5>
                <span className="seperator2Dark"></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="md:hidden block">
        <ServiceMobile title={title} serviceData={serviceData} />
      </div>
    </>
  );
};

export default Section3;
