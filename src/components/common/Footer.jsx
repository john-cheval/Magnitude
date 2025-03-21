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
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const elements = gsap.utils.toArray(".fade-footer");

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <footer className="containers  bg-footerBG bg-cover bg-center h-full relative">
      <div className="w-full h-[1px] bg-main relative z-50 overflow-hidden" />
      <div className="flex flex-col items-center justify-center pt-20 pb-20 lg:pb-[150px] space-y-5 z-50 relative">
        <Image
          src={Logo}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto max-w-[266px] object-cover fade-footer"
        />

        <div className="flex flex-col sm:flex-row gap-x-3">
          <Link
            href={"tel:+971 56 5048488"}
            className="font-helvatica font-light leading-[186%] flex items-center gap-x-2 fade-footer"
          >
            <span className="text-center font-bold  ">T :</span>+971 56 5048488
          </Link>
          <Link
            href={"mailto:+971 56 5048488"}
            className="font-helvatica font-light leading-[186%] flex items-center gap-x-2 fade-footer"
          >
            <span className="text-center font-bold ">E :</span>+971 56 5048488
          </Link>
        </div>

        <Link
          href={"/"}
          target="_blank"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-main fade-footer"
        >
          <LiaLinkedinIn />
        </Link>

        <p className="text-center text-sm font-light leading-[170%] capitalize max-w-[515px] fade-footer">
          Designed & Developed by Cheval | © 2024 Magnitude . All rights
          reserved
        </p>
      </div>

      <div className="absolute w-full h-full max-h-[345px] bg-footerGrad top-0 left-0" />
    </footer>
  );
};

export default Footer;
