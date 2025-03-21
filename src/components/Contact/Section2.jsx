"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMail } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

function Section2({ emailAddress, address, phoneList, title }) {
  return (
    <section className="bg-altermain py-9 containers">
      <div className="flex items-center flex-col">
        <h1 className="main-heading2 mb-4 md:mb-6 fade-item">{title}</h1>
        <span className="seperator fade-item"></span>

        <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
          <Link
            href={`mailto:${emailAddress}`}
            className="flex items-center justify-center font-helvatica gap-x-2 font-light leading-[186%] fade-item text-xs  sm:text-base"
          >
            <IoMail color="#fff" /> {emailAddress}
          </Link>

          <div className="flex items-center gap-x-0 md:gap-x-3 fade-item">
            <Link
              href={`tel:${phoneList[0]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-1 md:gap-x-2 font-light leading-[186%] text-xs  sm:text-base"
            >
              <RiPhoneFill color="#fff" />
              {phoneList[0]?.title} {phoneList[0]?.phone_number}
            </Link>
            |
            <Link
              href={`tel:${phoneList[1]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-0 md:gap-x-2 font-light leading-[186%] text-xs  sm:text-base"
            >
              {phoneList[1]?.title} {phoneList[1]?.phone_number}
            </Link>
          </div>

          <Link
            href={"#"}
            target="_blank"
            className="flex items-center font-helvatica gap-x-2 font-light leading-[186%] justify-center fade-item text-xs  sm:text-base"
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
