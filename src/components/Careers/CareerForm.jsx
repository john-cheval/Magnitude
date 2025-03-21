"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobType: "",
    subject: "",
    resume: null,
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
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
        "https://chevaldemo.xyz/demo/magnitude/wp-json/contact-form-7/v1/contact-forms/111/feedback",

        {
          method: "POST",
          body: newFormData,
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Form Submitted Successfully:", data);

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
      console.log("Error submitting form:", e.message);
    }
    console.log("Form Submitted:", formData);

    setFormData({
      firstName: "",
      lasstName: "",
      jobType: "",
      Subject: "",
      resume: "",
      message: "",
    });
  };
  return (
    <section
      id="career-form"
      className="bg-altermain pt-11 md:pt-16 pb-12 containers"
    >
      <div className="flex flex-col items-center">
        <h2 className="main-heading2 mb-5 md:mb-6">
          Apply for a Career Opportunity
        </h2>
        <span className="seperator mb-5 md:mb-6"></span>
        <h4 className=" text-sm sm:!text-base md:!text-xl lg:!text-2xl description mb-3">
          Join Our Team
        </h4>
        <p className="description !text-center md:text-justify">
          We are excited to learn more about you! Please complete the form below
          to apply for a position with us.
        </p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
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
            type="text"
            placeholder="Last Name"
            required
            maxLength={50}
            id="lasstName"
            name="lasstName"
            value={formData.lasstName}
            onChange={handleChange}
            className="input"
          />

          <div className="relative w-full">
            <select
              required
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="input appearance-none pr-14"
            >
              <option className="text-altermain" value="" disabled>
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
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-main pointer-events-none "
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            required
            maxLength={200}
            id="Subject"
            name="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="relative w-full">
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="input flex items-center gap-x-5 justify-between pr-[10px] cursor-pointer">
            <p className="font-helvatica text-sm md:text-base  font-medium leading-[154%]">
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

        <div className="flex justify-center mt-4 md:mt-2">
          <button
            type="submit"
            className="text-sm uppercase  px-9 py-4 text-center inline-block w-fit bg-main text-altermain mx-auto"
          >
            Submit Your Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default CareerForm;
