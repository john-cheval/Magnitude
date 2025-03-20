import React from "react";
import FillButton from "../common/FillButton";

const Section2 = ({ title, desc, imageUrl }) => {
  return (
    <section
      className="h-screen--  bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex flex-col pt-28 pb-24 items-center sm:items-start containers justify-center h-full gap-y-6">
        <h2 className="main-heading">{title}</h2>
        <span className="seperator"></span>
        <div
          dangerouslySetInnerHTML={{ __html: desc }}
          className="description max-w-[467px]"
        />

        <FillButton link="/about" text="Read More" />
      </div>
    </section>
  );
};

export default Section2;
