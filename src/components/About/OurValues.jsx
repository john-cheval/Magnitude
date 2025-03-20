import React from "react";
import Image from "next/image";

const OurValues = ({ ourValuesData }) => {
  return (
    <section className="containers text-altermain mt-12">
      {ourValuesData?.map((data, index) => (
        <div key={index + 1} className="grid grid-cols-1 md:grid-cols-2 ">
          <Image
            src={data?.image}
            alt={data?.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />

          <div className="pl-14 space-y-5 pt-11 ">
            <h3 className="main-heading2 ">{data?.title}</h3>
            <span className="seperatorDark"></span>

            <div
              className="description list"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurValues;
