import Image from "next/image";
import React from "react";

const SectionOne = ({ serviceData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Image
        src={serviceData?.image}
        alt={serviceData?.title}
        width={0}
        height={0}
        className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
        sizes="100vw"
      />

      <div className={` px-20 py-12  bg-[#f5f5f5]`}>
        <h2 className="main-heading2 mb-6">{serviceData?.title}</h2>
        <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
        <h3 className="text-2xl  leading-[160%] mb-4">
          {serviceData?.sub_title}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: serviceData?.description,
          }}
          className="description max-w-[348px]-- mb-2"
        ></div>
      </div>
    </div>
  );
};

export default SectionOne;
