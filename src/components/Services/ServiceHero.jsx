import React from "react";
import Image from "next/image";

const ServiceHero = ({ title, small_heading, description, bannerImage }) => {
  return (
    <section className="containers pt-44 bg-altermain">
      <h1 className="main-heading">{title}</h1>
      <div className="relative">
        <Image
          src={bannerImage}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto max-h-[530px] object-cover mt-10"
        />

        <div className="absolute z-50 top-1/2 left-20 -translate-y-1/2 space-y-5">
          <h2 className="main-heading2">{small_heading}</h2>
          <span className="seperator"></span>
          <p className="description max-w-[413px]">{description}</p>
        </div>

        <div className="absolute  bg-serviceHeroGrad h-full w-full left-0 top-0" />
      </div>
    </section>
  );
};

export default ServiceHero;
background:;
