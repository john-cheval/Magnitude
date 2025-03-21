"use client";
import React from "react";
import Image from "next/image";
import heroImage from "../../../public/Careers/hero.png";
import { usePathname } from "next/navigation";

const CareersHero = ({ title, bannerImage }) => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);
  const titles =
    pathSegments.length === 1
      ? "Careers"
      : pathSegments[pathSegments.length - 1];

  return (
    <section className="containers pt-28 md:pt-40 lg:pt-44">
      <h1 className="main-heading !text-altermain capitalize text-center md:text-left">
        {title || titles}
      </h1>
      <Image
        src={bannerImage || heroImage}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto max-h-[530px]-- object-cover mt-5 md:mt-8 lg:mt-10"
      />
    </section>
  );
};

export default CareersHero;
