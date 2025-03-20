import React from "react";
import listtype from "../../../../public/common/list.svg";
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
        <h3 className="text-base font-helvatica font-medium leading-[186%] mb-6 flex gap-x-3">
          <Image
            src={listtype}
            alt="list"
            width={0}
            height={0}
            className="w-5 h-4 object-cover mt-1"
            sizes="100vw"
          />{" "}
          Our Focus
        </h3>
        <p className="description max-w-[413px] mb-2">
          Translating your vision into actionable plans, designs, and
          strategies. <br />
          Ensuring compliance with Flag States and Classification Societies'
          regulations.
          <br />
          Creating a carefully defined budget and timeline to guide the project.
        </p>
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
