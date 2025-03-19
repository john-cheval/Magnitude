"use client";
import Link from "next/link";
import React, { useState } from "react";
import PreConstruction from "./PreConstruction";
import DuringConstruction from "./DuringConstruction";
import PostConstruction from "./PostConstruction";

const ServiceInner = () => {
  const [active, setActive] = useState("Post Construction");
  return (
    <section className="  pt-44">
      <div className="flex containers justify-between px-36">
        {["Pre-Construction", "During Construction", "Post Construction"]?.map(
          (section) => (
            <Link
              key={section}
              href={`/services/${section}`}
              className={`text-center text-2xl leading-[150%] ${
                active === section ? "text-altermain" : "text-[#BDBDBD]"
              }`}
            >
              {section}
            </Link>
          )
        )}
      </div>

      {/* <PreConstruction /> */}
      {/* <DuringConstruction /> */}
      <PostConstruction />
    </section>
  );
};

export default ServiceInner;
