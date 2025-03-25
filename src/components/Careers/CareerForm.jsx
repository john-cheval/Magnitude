"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import useIsMobile from "@/hooks/useIsMobile";

const CareerForm = () => {
  const isMobile = useIsMobile();
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const titleChildrenRef = useRef([]);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobType: "",
    subject: "",
    resume: null,
    message: "",
    email: "",
  });

  useEffect(() => {
    gsap.fromTo(
      titleChildrenRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      inputRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        resume: file.name,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append("text-fname", formData.firstName);
    newFormData.append("text-lname", formData.lastName);
    newFormData.append("text-jobtype", formData.jobType);
    newFormData.append("text-subject", formData.subject);
    newFormData.append("email-address", formData.email);
    newFormData.append("textarea-message", formData.message);
    newFormData.append("_wpcf7_unit_tag", "69a98fb");

    if (formData.resume) {
      newFormData.append("file-cv", formData.resume);
    }

    try {
      const response = await fetch(
        "https://chevaldemo.xyz/demo/magnitude/wp-json/contact-form-7/v1/contact-forms/6/feedback",
        {
          method: "POST",
          body: newFormData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("Form Submitted Successfully");

      setFormData({
        firstName: "",
        lastName: "",
        jobType: "",
        subject: "",
        resume: null,
        message: "",
        email: "",
      });
    } catch (e) {
      toast.error("Error submitting form");
    }
  };

  return (
    <section
      ref={formRef}
      id="career-form"
      className="bg-altermain pt-11 md:pt-16 pb-12 containers"
    >
      <div ref={titleRef} className="flex flex-col items-center">
        <h2
          ref={(el) => (titleChildrenRef.current[0] = el)}
          className="main-heading2 mb-5 md:mb-6"
        >
          Apply for a Career Opportunity
        </h2>
        <span
          ref={(el) => (titleChildrenRef.current[1] = el)}
          className="seperator mb-5 md:mb-6"
        ></span>
        <h4
          ref={(el) => (titleChildrenRef.current[2] = el)}
          className="text-sm sm:!text-base md:!text-xl lg:!text-2xl description mb-3"
        >
          Join Our Team
        </h4>
        <p
          ref={(el) => (titleChildrenRef.current[3] = el)}
          className="description !text-center md:text-justify"
        >
          We are excited to learn more about you! Please complete the form below
          to apply for a position with us.
        </p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            ref={(el) => (inputRefs.current[0] = el)}
            type="text"
            placeholder="First Name"
            required
            maxLength={50}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input"
          />

          <input
            ref={(el) => (inputRefs.current[1] = el)}
            type="text"
            placeholder="Last Name"
            required
            maxLength={50}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input"
          />

          <div
            className="relative w-full"
            ref={(el) => (inputRefs.current[2] = el)}
          >
            <select
              required
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="input appearance-none pr-14"
            >
              <option className="!text-gray-500 " value="" disabled>
                Select Job Type
              </option>
              <option className="text-altermain" value="full-time">
                Full-Time
              </option>
              <option className="text-altermain" value="part-time">
                Part-Time
              </option>
              <option className="text-altermain" value="freelance">
                Freelance
              </option>
              <option className="text-altermain" value="internship">
                Internship
              </option>
            </select>

            <IoIosArrowDown
              size={20}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#9D9D9D] pointer-events-none"
            />
          </div>

          <input
            ref={(el) => (inputRefs.current[3] = el)}
            type="text"
            placeholder="Subject"
            required
            maxLength={200}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div
          className="relative w-full"
          ref={(el) => (inputRefs.current[4] = el)}
        >
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="input flex items-center gap-x-5 justify-between pr-[10px] cursor-pointer">
            <p className="font-helvatica text-sm md:text-base text-[#9D9D9D] font-medium leading-[154%]">
              {formData.resume || "Upload Resume/CV"}{" "}
              <span className="text-[#979797] text-xs md:text-sm">
                ( PDF, DOC, DOCX. File size limit: 2MB )
              </span>
            </p>

            <label
              htmlFor="fileUpload"
              className="w-[141px] h-[44px] flex items-center justify-center bg-white text-black font-[Century Gothic] text-[12px] uppercase cursor-pointer border border-gray-300"
            >
              Upload
            </label>
          </div>
        </div>

        <textarea
          ref={(el) => (inputRefs.current[5] = el)}
          type="text"
          placeholder="Message/Additional Notes"
          maxLength={2000}
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input"
        />

        <div
          className="flex justify-center mt-4 md:mt-2"
          ref={(el) => (inputRefs.current[6] = el)}
        >
          <button
            type="submit"
            className="text-sm uppercase px-9 py-4 border text-center inline-block w-fit bg-main text-altermain mx-auto hover:bg-altermain hover:text-main transition-all duration-300 ease-in-out hover:border-main"
          >
            {isMobile ? "Submit" : " Submit Your Application"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CareerForm;
