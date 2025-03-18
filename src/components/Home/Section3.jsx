import React from "react";
import image1 from "../../../public/Home/image.png";
import Image from "next/image";
import { homeCardData } from "@/data/homeData";

const Section3 = () => {
  return (
    <section>
      <div className="bg-altermain w-full  h-[860px] h-screen--  flex items-center justify-center">
        <h3 className="text-center text-[12vw]  lg:text-[110px]-- xl:text-[150px] font-bold uppercase">
          What we do
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 containers pt-16 lg:pt-[120px] pb-[93px]">
        {homeCardData?.map((cardData, index) => (
          <div className="space-y-4 lg:space-y-6" key={cardData?.id || index}>
            <Image
              src={cardData?.imageUrl || image1}
              alt={cardData?.title}
              className="w-full h-auto object-cover max-h-[470px]"
              width={0}
              height={0}
              sizes="100vw"
            />

            <h5 className="text-altermain text-xl lg:text-2xl leading-[150%]">
              {cardData?.title}
            </h5>
            <span className="w-12 h-[2px] bg-altermain block"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
