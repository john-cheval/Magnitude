"use client";
import React, { useEffect, useRef } from "react";
import FillButton from "../common/FillButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMobile from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const Section2 = ({ title, desc, imageUrl }) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const desktopContentRefs = useRef([]);
  const mobileContentRefs = useRef([]);

  useEffect(() => {
    const contentRefs = isMobile ? mobileContentRefs : desktopContentRefs;

    if (!contentRefs.current.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            // markers: true,
            start: `top ${isMobile ? "70%" : "50%"}`,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative">
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      </div>

      {isMobile && (
        <div className="block md:hidden">
          <div className="containers bg-altermain py-10 flex flex-col items-center gap-y-6">
            <h2
              ref={(el) => (mobileContentRefs.current[0] = el)}
              className="main-heading"
            >
              {title}
            </h2>
            <span
              ref={(el) => (mobileContentRefs.current[1] = el)}
              className="seperator"
            ></span>
            <div
              ref={(el) => (mobileContentRefs.current[2] = el)}
              dangerouslySetInnerHTML={{ __html: desc }}
              className="home"
            />

            {/* <FillButton
              ref={(el) => (mobileContentRefs.current[3] = el)}
              link="/about"
              text="Read More"
            /> */}
          </div>
          <div
            className="h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      )}

      <div className="hidden md:flex containers relative z-10 h-screen items-center">
        <div className="flex flex-col gap-y-6 max-w-lg">
          <h2
            ref={(el) => (desktopContentRefs.current[0] = el)}
            className="main-heading"
          >
            {title}
          </h2>
          <span
            ref={(el) => (desktopContentRefs.current[1] = el)}
            className="seperator"
          ></span>
          <div
            ref={(el) => (desktopContentRefs.current[2] = el)}
            dangerouslySetInnerHTML={{ __html: desc }}
            className="description max-w-[467px]--"
          />

          <div ref={(el) => (desktopContentRefs.current[3] = el)}>
            <FillButton link="/about" text="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
