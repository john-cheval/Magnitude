import React from "react";
import Image from "next/image";
import FillButton from "../common/FillButton";

const CareersList = ({ careersCategory }) => {
  return (
    <section className="containers text-altermain mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image
          src={careersCategory[1]?.list_image}
          alt={careersCategory[1]?.name}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />

        <div className={` px-20 py-12  bg-[#f5f5f5]`}>
          <h2 className="main-heading2 mb-6">{careersCategory[1]?.name}</h2>
          <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
          <h3 className="description !text-lg mb-1">
            {careersCategory[1]?.short_heading}
          </h3>
          <p className="description max-w-[348px]-- mb-2">
            {careersCategory[1]?.short_description}
          </p>

          <FillButton
            link={`/careers/${careersCategory[1]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-9 mb-12">
        <div className={` px-20 py-12  bg-[#f5f5f5]`}>
          <h2 className="main-heading2 mb-6">{careersCategory[0]?.name}</h2>
          <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
          <h3 className="description !text-lg mb-1">
            {" "}
            {careersCategory[0]?.short_heading}
          </h3>
          <p className="description max-w-[348px]-- mb-2">
            {careersCategory[0]?.short_description}
          </p>

          <FillButton
            link={`/careers/${careersCategory[1]?.slug}`}
            text={"View all"}
            dark={true}
          />
        </div>

        <Image
          src={careersCategory[0]?.list_image}
          alt={careersCategory[0]?.name}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default CareersList;
