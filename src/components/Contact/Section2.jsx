"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMail } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Section2({ emailAddress, address, phoneList, title }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const elements = gsap.utils.toArray(".fade-item");

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
    <section ref={sectionRef} className="bg-altermain py-9 containers">
      <div className="flex items-center flex-col">
        <h1 className="main-heading2 mb-6 fade-item">{title}</h1>
        <span className="seperator fade-item"></span>

        <div className="mt-4 space-y-4">
          <Link
            href={`mailto:${emailAddress}`}
            className="flex items-center justify-center font-helvatica gap-x-2 font-light leading-[186%] fade-item"
          >
            <IoMail color="#fff" /> {emailAddress}
          </Link>

          <div className="flex items-center gap-x-3 fade-item">
            <Link
              href={`tel:${phoneList[0]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-2 font-light leading-[186%]"
            >
              <RiPhoneFill color="#fff" />
              {phoneList[0]?.title} {phoneList[0]?.phone_number}
            </Link>
            |
            <Link
              href={`tel:${phoneList[1]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-2 font-light leading-[186%]"
            >
              {phoneList[1]?.title} {phoneList[1]?.phone_number}
            </Link>
          </div>

          <Link
            href={"#"}
            target="_blank"
            className="flex items-center font-helvatica gap-x-2 font-light leading-[186%] justify-center fade-item"
          >
            <MdLocationPin color="#fff" />
            {address}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section2;
