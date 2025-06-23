"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import useIsMobile from "@/hooks/useIsMobile";
import ServiceInnerOne from "./ServiceInnerOne";

const ServiceInner = ({ serviceData, services }) => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const navLinksRef = useRef([]);
  const contentRef = useRef(null);
  const navHeight = 80;
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const servicesList = Object.values(services);

  const sectionMap = servicesList.reduce((acc, service) => {
    acc[`/services/${service.post_name}/`] = service.post_title;
    return acc;
  }, {});

  // const componentMap = servicesList.reduce((acc, service, index) => {
  //   acc[service.post_title] = index === 1 ? ServiceInnerTwo : ServiceInnerOne;
  //   return acc;
  // }, {});

  const active = sectionMap[pathname] || "Pre-Construction";

  useEffect(() => {
    const activeIndex = Object.values(sectionMap).indexOf(active);
    const activeLink = navLinksRef.current[activeIndex];

    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

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
    const DynamicComponent = /* componentMap[active] || */ ServiceInnerOne;
    return <DynamicComponent serviceData={serviceData?.section_list} />;
  };

  useEffect(() => {
    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, y: 30 },
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
        className={`containers transition-all duration-300 ${
          /* isNavVisible &&  */ "sticky"
        } bg-white transition-all duration-300 z-50 ${
          isNavVisible ? "py-5 md:py-8 " : "py-5 md:py-8 shadow-md"
        }`}
        style={{
          top: isNavVisible ? `${isMobile ? "85px" : "85px"}` : "-100px",
        }}
      >
        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-hide">
          <div className="flex  w-max-- gap-x-11-- gap-x-7 md:gap-2 md:justify-between justify-between-- serviceinnerhead">
            {Object.values(services).map((section, index) => (
              <Link
                key={index}
                ref={(el) => (navLinksRef.current[index] = el)}
                href={`/services/${section.post_name}`}
                className={`whitespace-nowrap md:whitespace-normal text-center text-sm sm:text-base xl:text-lg leading-[150%] transition-colors duration-300  ${
                  pathname === `/services/${section.post_name}/`
                    ? "text-altermain"
                    : "text-[#BDBDBD]"
                }`}
              >
                {section?.post_title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="mt-3- md:mt-8- transition-opacity duration-500 opacity-100"
      >
        {renderComponent()}
      </div>
    </section>
  );
};

export default ServiceInner;
