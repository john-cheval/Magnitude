import React from "react";
import Image from "next/image";

const Section3 = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);
  return (
    <section>
      <div className="bg-altermain w-full  h-[860px] h-screen--  flex items-center justify-center">
        <h3 className="text-center text-[12vw]  lg:text-[110px]-- xl:text-[150px] font-bold uppercase">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 containers pt-16 lg:pt-[120px] pb-[93px]">
        {homeCardData?.map((cardData, index) => (
          <div className="space-y-4 lg:space-y-6" key={cardData?.ID || index}>
            <Image
              src={cardData?.home_page_image}
              alt={cardData?.post_title}
              className="w-full h-auto object-cover max-h-[470px]--"
              width={0}
              height={0}
              sizes="100vw"
            />

            <h5 className="text-altermain text-xl lg:text-2xl leading-[150%]">
              {cardData?.post_title}
            </h5>
            <span className="seperator2Dark"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
