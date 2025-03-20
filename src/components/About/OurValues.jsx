import React from "react";
import Image from "next/image";
import listtype from "../../../public/About/list.svg";
import { aboutData2 } from "@/data/aboutData";

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
            <p className="description max-w-[432px]">
              At Magnitude, our values can be summed up in a single, powerful
              word: Excellence.{" "}
            </p>

            <div className="space-y-4">
              {aboutData2?.map((data, index) => (
                <div key={index} className="flex gap-x-3 ">
                  <Image
                    src={listtype}
                    alt="list"
                    width={0}
                    height={0}
                    className="w-5 h-4 object-cover mt-1"
                    sizes="100vw"
                  />
                  <div className="space-y-3">
                    <h3 className="font-semibold leading-[186%] font-helvatica">
                      {data?.title}
                    </h3>
                    <p className="font-helvatica text-justify font-light leading-[186%] max-w-[448px]--">
                      {data?.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="description max-w-[432px]--">
              With a profound understanding of the superyacht industry and an
              unwavering commitment to doing things better, we lead with
              expertise, knowledge, and an unrelenting pursuit of perfection at
              every stage.
            </p>

            {/* <div
              className="description"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div> */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurValues;
