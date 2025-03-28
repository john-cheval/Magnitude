"use client";
import React, { useEffect, useRef } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import { gsap } from "gsap";

const CareersJobList = ({ careersList }) => {
  const jobList = careersList && Object.values(careersList);
  const sectionRef = useRef(null);
  const jobItemRefs = useRef([]);
  const jobContentRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      jobItemRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      jobContentRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const handleScroll = () => {
    const formSection = document.getElementById("career-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="text-altermain mt-5 sm:mt-10 lg:mt-20 pb-10 containers"
    >
      {jobList?.map((job, index) => (
        <div
          key={index + 1}
          ref={(el) => (jobItemRefs.current[index] = el)}
          className={`flex flex-col md:flex-row md:justify-between gap-x-5 border-t md:items-center border-altermain pt-5 pb-9 ${
            index === jobList.length - 1 ? "border-b " : ""
          }`}
        >
          <div className="space-y-4">
            <h3
              ref={(el) => (jobContentRefs.current[index * 4] = el)}
              className="text-lg sm:text-xl lg:text-2xl leading-[136%]"
            >
              {job?.post_title}
            </h3>

            <div
              ref={(el) => (jobContentRefs.current[index * 4 + 1] = el)}
              className="flex gap-x-4"
            >
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
              ref={(el) => (jobContentRefs.current[index * 4 + 2] = el)}
              dangerouslySetInnerHTML={{ __html: job?.post_content }}
              className="description !text-sm "
            ></div>
          </div>

          <button
            ref={(el) => (jobContentRefs.current[index * 4 + 3] = el)}
            onClick={handleScroll}
            className="text-sm uppercase px-9 py-4 text-center inline-block bg-altermain text-main w-fit mt-4 md:mt-2 hover:bg-main hover:text-altermain hover:border hover:border-altermain transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      ))}
    </section>
  );
};

export default CareersJobList;
