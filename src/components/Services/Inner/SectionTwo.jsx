import React from "react";
import Image from "next/image";

const SectionTwo = ({ serviceData, layout }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-9">
      {layout && (
        <Image
          src={serviceData?.image}
          alt={serviceData?.title}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      )}
      <div className={` px-20 py-[72px]  bg-[#f5f5f5]`}>
        <h2 className=" text-2xl mb-6">{serviceData?.title}</h2>
        <span className="block w-8 h-[2px]   bg-altermain mb-5"></span>

        <div
          className="serviceKey"
          dangerouslySetInnerHTML={{ __html: serviceData?.description }}
        />
      </div>

      {!layout && (
        <Image
          src={serviceData?.image}
          alt={serviceData?.title}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default SectionTwo;
