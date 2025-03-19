import React from "react";
import image9 from "../../../public/Services/Inner/image9.png";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="bg-altermain mt-16 py-20  text-main">
      <div className="grid grid-cols-2 containers gap-x-[72px]">
        <Image
          src={image9}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="space-y-7 pt-12">
          <h2 className="text-2xl ">Why It Matters</h2>
          <span className="w-8 h-[2px]  block bg-main"></span>
          <p className="description max-w-[517px]">
            The pre-construction phase sets the tone for the entire project.
            Every choice we make at this stage ensures precision, compliance,
            and an unwavering focus on excellence.
          </p>
          <p className="description max-w-[517px]">
            Let us help you transform your vision into a design ready to build.
            Contact us to begin your journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
