import { homeCardData2 } from "@/data/homeData";
import React from "react";

const Section4 = () => {
  return (
    <>
      <section className="bg-yatch h-screen bg-cover bg-center relative">
        <div className="grid grid-cols-3 gap-x-9 gap-y-12  z-10 containers absolute top-[50%] pb-16">
          {homeCardData2?.map((cardData, index) => (
            <div
              key={cardData?.id || index}
              className="px-9 border border-[#fff]  pt-8 pb-14 max-w-[370px]-- space-y-5 bg-altermain/20"
            >
              <h3 className="text-3xl leading-[150%]">{cardData?.title}</h3>
              <span className="block w-11 h-[2px] bg-main"></span>
              <p className="text-justify font-helvatica font-light leading-[186%] max-w-[296px]--">
                {cardData?.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-homeBottomGrad w-full h-full max-h-[450px] absolute bottom-0 left-0" />
      </section>

      <section className="bg-altermain h-screen  w-full"></section>
    </>
  );
};

export default Section4;
