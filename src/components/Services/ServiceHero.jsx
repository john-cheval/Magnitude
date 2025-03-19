import React from "react";
import heroImage from "../../../public/Services/image.png";
import Image from "next/image";

const ServiceHero = () => {
  return (
    <section className="containers pt-44 bg-altermain">
      <h1 className="main-heading">Services</h1>
      <div className="relative">
        <Image
          src={heroImage}
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto max-h-[530px] object-cover mt-10"
        />

        <div className="absolute z-50 top-1/2 left-20 -translate-y-1/2 space-y-5">
          <h2 className="main-heading2">What we do</h2>
          <span className="seperator"></span>
          <p className="description max-w-[413px]">
            At Magnitude Yachts, we offer end-to-end services to ensure that
            every stage of your yacht project is expertly managed. From the
            initial planning and design phase to the construction process and
            management, we provide a one stop solution.
          </p>
        </div>

        <div className="absolute  bg-serviceHeroGrad h-full w-full left-0 top-0" />
      </div>
    </section>
  );
};

export default ServiceHero;
background:;
