"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import PreConstruction from "./PreConstruction";
import DuringConstruction from "./DuringConstruction";
import PostConstruction from "./PostConstruction";
import { gsap } from "gsap";
import useIsMobile from "@/hooks/useIsMobile";

const ServiceInner = ({ serviceData }) => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const navLinksRef = useRef([]);
  const contentRef = useRef(null);
  const navHeight = 80;
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sectionMap = {
    "/services/pre-construction/": "Pre-Construction",
    "/services/during-construction/": "During Construction",
    "/services/post-construction/": "Post Construction",
  };

  const active = sectionMap[pathname] || "Pre-Construction";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const renderComponent = () => {
    switch (active) {
      case "Pre-Construction":
        return <PreConstruction serviceData={serviceData?.section_list} />;
      case "During Construction":
        return <DuringConstruction serviceData={serviceData?.section_list} />;
      case "Post Construction":
        return <PostConstruction serviceData={serviceData?.section_list} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, [active]);

  return (
    <section ref={sectionRef} className="pt-24 md:pt-32 lg:pt-36  ">
      <div
        className={`containers ${
          isNavVisible && "sticky"
        } bg-white transition-all duration-300 z-50 ${
          isNavVisible ? "py-8 " : "py-8 shadow-md"
        }`}
        style={{
          top: isNavVisible ? `${isMobile ? "85px" : "100px"}` : "0px",
        }}
      >
        <div className="flex  justify-between lg:px-16 xl:px-36">
          {Object.values(sectionMap).map((section, index) => (
            <Link
              key={section}
              ref={(el) => (navLinksRef.current[index] = el)}
              href={`/services/${section.toLowerCase().replace(" ", "-")}`}
              className={`text-center text-sm sm:text-base md:text-xl lg:text-2xl leading-[150%] transition-colors duration-300 ${
                active === section ? "text-altermain" : "text-[#BDBDBD]"
              }`}
            >
              {section}
            </Link>
          ))}
        </div>
      </div>

      <div
        ref={contentRef}
        className="mt-3 md:mt-8 transition-opacity duration-500 opacity-100"
      >
        {renderComponent()}
      </div>
    </section>
  );
};

export default ServiceInner;
