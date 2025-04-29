"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceMobile from "./ServiceMobile";
import useIsMobile from "@/hooks/useIsMobile";
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
      { opacity: 1, y: 0, stagger: 0.5, ease: Power3.easeOut },
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
          className="relative pt-8-- md:pt-12-- xl:pt-14-- h-fit-- w-screen overflow-hidden"
          id="pinnedWorks"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-6 containers relative pb-32--"
            id="pinnedWorksItems"
          >
            {homeCardData?.map((cardData, index) => (
              <Link
                href={`/services`}
                className="space-y-4 lg:space-y-6 cursor-pointer work-card"
                prefetch={true}
                key={cardData?.ID || index}
              >
                <Image
                  src={cardData?.home_page_image}
                  alt={cardData?.post_title}
                  className="w-full md:h-auto-- object-cover h-[350px]"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <h5 className="text-altermain text-xl lg:text-2xl leading-[150%] ">
                  {cardData?.post_title}
                </h5>
                <span className="seperator2Dark md:!h-[2px]"></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section
        className={`relative !bg-white hidden md:block w-full -mt-[250px] lg:-mt-[150px] xl:-mt-[50px] 2xl:-mt-[60px]   `}
      >
        <div className="relative  h-fit-- w-screen overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-14 containers relative pb-16 lg:pb-24">
            {homeCardData?.slice(3).map((cardData, index) => (
              <Link
                href={`/services`}
                className="space-y-4 lg:space-y-6 cursor-pointer work-card"
                prefetch={true}
                key={cardData?.ID || index}
              >
                <motion.div
                  className="space-y-4 lg:space-y-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: false }}
                >
                  <Image
                    src={cardData?.home_page_image}
                    alt={cardData?.post_title}
                    className="w-full md:h-auto object-cover h-[350px]"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <h5 className="text-altermain text-xl lg:text-2xl leading-[150%] ">
                    {cardData?.post_title}
                  </h5>
                  <span className="seperator2Dark md:!h-[2px]"></span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
      <div className="md:hidden block">
        <ServiceMobile title={title} serviceData={serviceData} />
      </div>
    </>
  );
};

export default Section3;
