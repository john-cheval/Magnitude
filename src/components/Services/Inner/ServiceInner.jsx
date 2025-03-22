"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import PreConstruction from "./PreConstruction";
import DuringConstruction from "./DuringConstruction";
import PostConstruction from "./PostConstruction";

const ServiceInner = ({ serviceData }) => {
  const pathname = usePathname();

  const sectionMap = {
    "/services/pre-construction": "Pre-Construction",
    "/services/during-construction": "During Construction",
    "/services/post-construction": "Post Construction",
  };

  const active = sectionMap[pathname] || "Pre-Construction";

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

  return (
    <section className="pt-28 md:pt-40 lg:pt-44 ">
      <div className="containers">
        <div className="flex  justify-between lg:px-16 xl:px-36">
          {Object.values(sectionMap).map((section) => (
            <Link
              key={section}
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

      <div className="mt-3 md:mt-8 transition-opacity duration-500 opacity-100">
        {renderComponent()}
      </div>
    </section>
  );
};

export default ServiceInner;
