import React from "react";
import image1 from "../../../public/Services/Inner/image1.png";
import image2 from "../../../public/Services/Inner/image2.png";
import image3 from "../../../public/Services/Inner/image3.png";
import listTYpeWhite from "../../../public/Services/Inner/listTYpeWhite.svg";
import listtype from "../../../public/About/list.svg";

import Image from "next/image";
import Section3 from "./Section3";

const PreConstruction = () => {
  const data = Array.from({ length: 4 }, (_, i) => i + 1);
  return (
    <>
      <section className=" containers pt-16 text-altermain">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={image1}
            alt={"image1"}
            width={0}
            height={0}
            className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          />

          <div className={` px-20 py-12  bg-[#f5f5f5]`}>
            <h2 className="main-heading2 mb-6">Pre-Construction</h2>
            <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
            <h3 className="text-2xl  leading-[160%] mb-4">
              Building Dreams: The Cornerstone of Every Yacht Project
            </h3>
            <p className="description max-w-[348px]-- mb-2">
              The pre-construction phase is where every detail begins to take
              shape, laying the foundation for a truly extraordinary yacht. This
              critical stage ensures that each decision aligns with rigorous
              safety and environmental standards while crafting a vessel that
              combines luxury, innovation, and functionality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-9">
          <div className={` px-20 py-[72px]  bg-[#f5f5f5]`}>
            <h2 className=" text-2xl mb-6">Key Sections</h2>
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
              Creating a carefully defined budget and timeline to guide the
              project.
            </p>
          </div>

          <Image
            src={image2}
            alt={"image2"}
            width={0}
            height={0}
            className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-9">
          <Image
            src={image3}
            alt={"image2"}
            width={0}
            height={0}
            className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
            sizes="100vw"
          />
          <div className={` px-20 py-12  bg-altermain text-main `}>
            <h2 className=" text-2xl mb-6">What We Offer</h2>
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
                      Initial design concepts and feasibility studies tailored
                      to your dream yacht.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section3 />
    </>
  );
};

export default PreConstruction;
