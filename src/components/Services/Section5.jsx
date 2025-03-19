import React from "react";
import image10 from "../../../public/Services/Inner/image10.png";
import listTYpeWhite from "../../../public/Services/Inner/listTYpeWhite.svg";
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="bg-altermain mt-16 py-20 text-main">
      <div className="grid grid-cols-1 md:grid-cols-2 containers gap-x-32">
        <div className="space-y-7 pt-12">
          <h2 className="text-2xl ">Why It Matters</h2>
          <span className="w-8 h-[2px]  block bg-main"></span>
          <div className="flex gap-x-3 ">
            <Image
              src={listTYpeWhite}
              alt="list"
              width={0}
              height={0}
              className="w-5 h-4 object-cover mt-1"
              sizes="100vw"
            />
            <div className="space-y-3">
              <h3 className="text-base font-helvatica font-medium leading-[186%]">
                Our Expertise
              </h3>
            </div>
          </div>
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
        <Image
          src={image10}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Section5;
