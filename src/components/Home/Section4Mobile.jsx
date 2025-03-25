"use client";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const Section4Mobile = ({ homeCardData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: false,
    align: "start",
    dragFree: true,
  });
  return (
    <div
      className="md:hidden z-10 containers  relative overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex gap-x-3">
        {homeCardData?.map((cardData, index) => (
          <div
            key={cardData?.id || index}
            className="px-9 border border-[#fff]  pt-8 pb-14 max-w-[370px] space-y-5 bg-altermain/20 flex flex-col items-center md:items-start w-full shrink-0 "
          >
            <h3 className="main-heading3 !text-center md:!text-left">
              {cardData?.title}
            </h3>
            <span className="block w-11 h-[2px] bg-main"></span>
            <div
              dangerouslySetInnerHTML={{ __html: cardData?.description }}
              className="home2"
            />
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Section4Mobile;
