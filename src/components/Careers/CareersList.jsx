"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";
import { gsap } from "gsap";
import useIsMobile from "@/hooks/useIsMobile";

const CareersList = ({ careersCategory }) => {
  const sectionRef = useRef(null);
  const section2Ref = useRef(null);
  const card1ImageRef = useRef(null);
  const card1ContentRef = useRef(null);
  const card2ImageRef = useRef(null);
  const card2ContentRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    gsap.fromTo(
      card1ImageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      card1ContentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      card2ImageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      card2ContentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${
        isMobile ? "" : "containers"
      } text-altermain mt-5 sm:mt-10 `}
    >
      {/* First Card */}
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <Image
            src={careersCategory[1]?.list_image}
            alt={careersCategory[1]?.name}
            width={0}
            height={0}
            className="image w-full h-full max-w-[553px]-- object-cover"
            sizes="100vw"
            ref={card1ImageRef}
          />
        </div>
        <div
          className="content px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-5"
          ref={card1ContentRef}
        >
          <h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[1]?.name}
          </h2>
          <span className="block w-14 h-[2px] bg-altermain mb-5"></span>
          <h3 className="description text-sm sm:!text-lg mb-1">
            {careersCategory[1]?.short_heading}
          </h3>
          <p className="description !text-center md:!text-justify max-w-[348px]-- mb-5">
            {careersCategory[1]?.short_description}
          </p>
          <FillButton
            link={`/careers/${careersCategory[1]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </div>
      </div>

      {/* Second Card */}
      <div className="grid grid-cols-12 md:mt-9 mb-12" ref={section2Ref}>
        {isMobile && (
          <div className="col-span-12">
            <Image
              src={careersCategory[0]?.list_image}
              alt={careersCategory[0]?.name}
              width={0}
              height={0}
              className="image w-full h-full max-w-[553px]-- object-cover md:hidden"
              sizes="100vw"
              ref={card2ImageRef}
            />
          </div>
        )}

        <div
          className="content px-7 md:px-14 lg:px-20 py-12 bg-[#f5f5f5] flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 lg:col-span-7"
          ref={card2ContentRef}
        >
          <h2 className="main-heading2 mb-4 md:mb-6">
            {careersCategory[0]?.name}
          </h2>
          <span className="block w-14 h-[2px] bg-altermain mb-5"></span>
          <h3 className="description text-sm sm:!text-lg mb-1">
            {careersCategory[0]?.short_heading}
          </h3>
          <p className="description !text-center md:!text-justify max-w-[348px]-- mb-5">
            {careersCategory[0]?.short_description}
          </p>
          <FillButton
            link={`/careers/${careersCategory[0]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <Image
            src={careersCategory[0]?.list_image}
            alt={careersCategory[0]?.name}
            width={0}
            height={0}
            className="image w-full h-full max-w-[553px]-- object-cover hidden md:block"
            sizes="100vw"
            ref={card2ImageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default CareersList;
