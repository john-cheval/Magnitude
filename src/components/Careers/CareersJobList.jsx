"use client";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import { motion } from "framer-motion";
const CareersJobList = ({ careersList }) => {
  const jobList = careersList && Object.values(careersList);

  const handleScroll = () => {
    const formSection = document.getElementById("career-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-altermain mt-5 sm:mt-10 lg:mt-20 pb-10 containers">
      {jobList?.map((job, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          key={index + 1}
          className={`flex flex-col md:flex-row md:justify-between gap-x-5 border-t md:items-center border-altermain pt-5 pb-9 ${
            index === jobList.length - 1 ? "border-b " : ""
          }`}
        >
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl leading-[136%]">
              {job?.post_title}
            </h3>

            <div className="flex gap-x-4">
              <p className="text-sm font-helvatica font-light leading-[154%] text-[#989898] flex gap-x-2 items-center">
                <IoLocationSharp color="#787878" />{" "}
                {job?.post_location || "Dubai"}
              </p>

              <p className="text-sm font-helvatica font-light leading-[154%] text-[#989898] flex gap-x-2 items-center">
                <FaRegCalendarAlt color="#787878" />{" "}
                {format(new Date(job?.post_date), "dd MMMM yyyy")}
              </p>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: job?.post_content }}
              className="text-sm space-y-3  text-left font-helvatica font-light !leading-[186%]"
            ></div>
          </div>

          <button
            onClick={handleScroll}
            className="text-sm uppercase px-9 py-4 text-center inline-block bg-altermain text-main w-fit mt-4 md:mt-2 hover:bg-main hover:text-altermain hover:border hover:border-altermain transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </motion.div>
      ))}
    </section>
  );
};

export default CareersJobList;
