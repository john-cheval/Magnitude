import React from "react";
import FillButton from "../common/FillButton";

const Section2 = () => {
  return (
    <section className="h-screen--  bg-cruise bg-cover bg-center">
      <div className="flex flex-col pt-28 pb-24 items-center sm:items-start containers justify-center h-full gap-y-6">
        <h2 className="text-5xl">Who We Are</h2>
        <span className="block w-14 h-[2px] bg-main"></span>
        <p className="text-justify font-helvatica font-light leading-[186%] max-w-[467px]">
          Magnitude is rooted in decades of collective expertise, honed through
          years of dedication and a relentless passion for excellence. Our
          commitment is to craft vessels that not only embody the cutting edge
          of technology and design but also cater to the distinctive needs and
          aspirations of each customer. Every creation is a testament to our
          unwavering pursuit of perfection.
        </p>
        <FillButton link="/about" text="Read More" />
      </div>
    </section>
  );
};

export default Section2;
