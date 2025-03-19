import React from "react";
import image from "../../../public/About/image3.png";
import Image from "next/image";
import listtype from "../../../public/About/list.svg";
import { aboutData2 } from "@/data/aboutData";

const OurValues = () => {
  return (
    <section className="containers text-altermain mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <Image
          src={image}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />

        <div className="pl-14 space-y-5 pt-11 ">
          <h3 className="text-[40px] ">Our Values</h3>
          <span className="block h-[2px] w-14 bg-altermain"></span>
          <p className="font-light leading-[186%] max-w-[432px] font-helvatica">
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

          <p className="font-light leading-[186%] max-w-[486px]-- font-helvatica">
            With a profound understanding of the superyacht industry and an
            unwavering commitment to doing things better, we lead with
            expertise, knowledge, and an unrelenting pursuit of perfection at
            every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
