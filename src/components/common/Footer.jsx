"use client";
import React, { useEffect, useRef } from "react";
import Logo from "../../../public/Home/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { LiaLinkedinIn } from "react-icons/lia";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const fadeElementsRef = useRef([]);

  useEffect(() => {
    const elements = fadeElementsRef.current;

    const trigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      },
    });

    const footer = footerRef.current;
    const rect = footer.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isInView) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="containers  bg-footerBG bg-cover bg-center h-full relative pb-14 md:pb-16"
    >
      <div className="w-full h-[1px] bg-main relative z-50 hidden-- md:block-- overflow-hidden" />
      <div className="flex flex-col items-center justify-center  space-y-5 z-50 relative pt-10">
        <Image
          ref={(el) => (fadeElementsRef.current[0] = el)}
          src={Logo}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto max-w-[266px] object-cover fade-footer"
        />

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:gap-x-3">
          <Link
            ref={(el) => (fadeElementsRef.current[1] = el)}
            href={"tel:+971 56 5048488"}
            className="description flex items-center justify-center gap-x-2 fade-footer"
          >
            <span className="text-center font-bold  ">T :</span>+971 56 5048488
          </Link>
          <Link
            ref={(el) => (fadeElementsRef.current[2] = el)}
            href={"mailto:contact@magnitudeyachts.com"}
            className="description flex items-center gap-x-2 fade-footer"
          >
            <span className="text-center font-bold ">E :</span>
            contact@magnitudeyachts.com
          </Link>
        </div>

        <Link
          ref={(el) => (fadeElementsRef.current[3] = el)}
          href={"/"}
          target="_blank"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-main fade-footer"
        >
          <LiaLinkedinIn />
        </Link>

        <p
          ref={(el) => (fadeElementsRef.current[4] = el)}
          className="text-center text-sm font-light leading-[170%] capitalize max-w-[515px] fade-footer flex flex-col sm:flex-row gap-y-3 "
        >
          <span>Designed & Developed by Cheval</span>{" "}
          <span className="mx-1 hidden sm:block">|</span>{" "}
          <span>© 2025 Magnitude . All rights reserved</span>
        </p>
      </div>

      <div className="absolute w-full h-full max-h-[345px] bg-footerGrad2 md:bg-footerGrad top-0 left-0" />
    </footer>
  );
};

export default Footer;
