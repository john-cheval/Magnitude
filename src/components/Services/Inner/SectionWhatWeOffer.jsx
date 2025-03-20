import React from "react";
import listTYpeWhite from "../../../../public/Services/Inner/listTYpeWhite.svg";
import Image from "next/image";

const SectionWhatWeOffer = ({ serviceList }) => {
  const data = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-9">
      <Image
        src={serviceList?.image}
        alt={serviceList?.title}
        width={0}
        height={0}
        className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
        sizes="100vw"
      />
      <div className={` px-20 py-12  bg-altermain text-main `}>
        <h2 className=" text-2xl mb-6">{serviceList?.title}</h2>
        <span className="block w-8 h-[2px]   bg-main mb-7"></span>

        <div className="space-y-6">
          {data?.map((data, index) => (
            <div key={index} className="flex gap-x-3 ">
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
                  Creative Visioning
                </h3>
                <p className="description max-w-[306px] mb-2">
                  Initial design concepts and feasibility studies tailored to
                  your dream yacht.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWhatWeOffer;
