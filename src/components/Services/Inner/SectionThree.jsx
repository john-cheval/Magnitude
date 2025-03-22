"use client";

import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const SectionThree = ({ data, layout = false }) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={`bg-altermain   text-main  containers ${
        isMobile ? "" : "containers  mt-16 py-20"
      }`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 containers ${
          layout ? "gap-x-32" : "gap-x-[72px]"
        } `}
      >
        {!layout && (
          <Image
            src={data?.image}
            alt={data?.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        )}
        <div className="space-y-7 pt-12 flex flex-col items-center md:items-start ">
          <h2 className="text-lg md:text-xl lg:text-2xl ">{data?.title}</h2>
          <span className="w-8 h-[2px]  block bg-main"></span>

          <div
            className="description why max-w-[517px] space-y-6"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
        </div>

        {layout && (
          <Image
            src={data?.image}
            alt={data?.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default SectionThree;
