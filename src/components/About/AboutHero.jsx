import React from "react";
import Image from "next/image";
import heroImage from "../../../public/About/hero.png";
import { aboutData } from "@/data/aboutData";

const AboutHero = () => {
  return (
    <section className="relative">
      <Image
        src={heroImage}
        alt="hero"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-cover max-h-[400px]"
      />
      <div className="absolute w-full h-full max-h-[288px] bg-homeHero2 top-0 left-0 z-40" />

      <div className="containers -mt-36">
        <h1 className="main-heading mb-8">Who we are</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {aboutData.map((item, index) => (
            <div
              key={item.id}
              className={` ${
                item.imageUrl
                  ? ""
                  : index === 1
                  ? "bg-[#1D2025] "
                  : "bg-altermain "
              }`}
            >
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={`about-${item.id}`}
                  width={0}
                  height={0}
                  className="w-full h-auto max-w-[553px]-- max-h-[536px] object-cover"
                  sizes="100vw"
                />
              ) : (
                <div className="col-span-7--  max-w-[622px]-- pl-[59px] pr-20 py-16 space-y-6">
                  <h2 className="text-[40px]">{item?.title}</h2>
                  <span className="block w-14 h-[2px] bg-main"></span>
                  <p className="text-justify font-helvatica font-light leading-[186%]">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
