import React from "react";
import heroImage from "../../../public/Careers/hero.png";
import Image from "next/image";
const CareersHero = () => {
  return (
    <section className="containers pt-44 ">
      <h1 className="main-heading !text-altermain">Careers</h1>
      <Image
        src={heroImage}
        alt="hero"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto max-h-[530px]-- object-cover mt-10"
      />
    </section>
  );
};

export default CareersHero;
