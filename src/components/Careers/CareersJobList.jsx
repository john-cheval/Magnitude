"use client";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const CareersJobList = () => {
  const data = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleScroll = () => {
    const formSection = document.getElementById("career-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-altermain mt-20 pb-10 containers ">
      {data?.map((_, index) => (
        <div
          key={index + 1}
          className="flex justify-between border-t items-center border-altermain pt-5 pb-9"
        >
          <div className="space-y-4 ">
            <h3 className="text-2xl leading-[136%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h3>

            <div className="flex gap-x-4">
              <p className="text-sm font-helvatica font-light leading-[154%] text-[#989898] flex gap-x-2 items-center">
                <IoLocationSharp color="#787878" /> Dubai
              </p>

              <p className="text-sm font-helvatica font-light leading-[154%] text-[#989898] flex gap-x-2 items-center">
                <FaRegCalendarAlt color="#787878" /> 25 january 2024
              </p>
            </div>

            <p className="description !text-sm max-w-[823px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <button
            onClick={handleScroll}
            className="text-sm uppercase  px-9 py-4 text-center inline-block bg-altermain text-main w-fit  mt-2"
          >
            Apply Now
          </button>
        </div>
      ))}
    </section>
  );
};

export default CareersJobList;
