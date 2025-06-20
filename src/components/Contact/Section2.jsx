// "use client";
import React /*  { useEffect, useRef } */ from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMail } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import * as motion from "motion/react-client";
// import { useGSAP } from "@gsap/react";
// import useIsMobile from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

function Section2({ emailAddress, address, phoneList, title }) {
  // const sectionRef = useRef(null);
  // const isMobile = useIsMobile();

  // useGSAP(() => {
  //   const ctx = gsap.context(() => {
  //     const elements = gsap.utils.toArray(".fade-item");

  //     // ScrollTrigger.clearMatchMedia();
  //     // ScrollTrigger.refresh();

  //     gsap.from(elements, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,
  //       ease: "power3.out",
  //       stagger: 0.05,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: `top ${isMobile ? "70%" : "50%"}`,
  //         // markers: true,
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   }, sectionRef);

  //   return () => {
  //     ctx.revert();
  //     // ScrollTrigger.clearMatchMedia();
  //   };
  // }, []);

  return (
    <section
      /* ref={sectionRef} */ className="bg-altermain pt-9 md:py-9 containers"
    >
      <div className="flex items-center flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="main-heading2 mb-4 md:mb-6 fade-item"
        >
          {title}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="seperator fade-item"
        ></motion.span>

        <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-center font-helvatica gap-x-2 font-light leading-[186%] fade-item text-sm  sm:text-base"
            >
              <IoMail color="#fff" /> {emailAddress}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex phone items-center gap-x-0 md:gap-x-3 fade-item"
          >
            <Link
              href={`tel:${phoneList[0]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-1 md:gap-x-2 font-light leading-[186%] text-sm  sm:text-base"
            >
              <RiPhoneFill color="#fff" />
              {phoneList[0]?.title}: {phoneList[0]?.phone_number}
            </Link>
            <span className="sep">|</span>
            <Link
              href={`tel:${phoneList[1]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-0 md:gap-x-2 font-light leading-[186%] text-sm  sm:text-base"
            >
              {phoneList[1]?.title}: {phoneList[1]?.phone_number}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href={"#"}
              target="_blank"
              className="flex items-center font-helvatica gap-x-2 font-light leading-[186%] justify-center fade-item text-sm  sm:text-base"
            >
              <MdLocationPin color="#fff" />
              {address}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
