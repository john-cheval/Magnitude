"use client";
import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import useIsMobile from "@/hooks/useIsMobile";
import ReCaptcha from "@/utils/reCaptcha";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/app/lib/framer";

const CareerForm = () => {
  const isMobile = useIsMobile();

  const buttonRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

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
    if (file) {
      setFormData({
        ...formData,
        resume: file,
      });
    }

    e.target.value = null;
  };

  const handleSubmit = async (e) => {
    if (!token) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);

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
        "https://manage.magnitudeyachts.com/wp-json/contact-form-7/v1/contact-forms/6/feedback",
        {
          method: "POST",
          body: newFormData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (!token) {
        toast.error("Captcha token is missing. Please try again.");
        return;
      }

      // if (response.status === 200) {
      //   toast.success("Form Submitted Successfully");
      // }

      const result = await response.json();

      if (result.status === "mail_sent") {
        toast.success("Form submitted successfully!");
      } else {
        toast.error(result.message || "Form submission failed.");
      }

      setToken("");
      if (recaptchaRef.current) {
        recaptchaRef.current.resetCaptcha();
      }

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

  const handleToken = (token) => {
    setToken(token);
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.jobType.trim() &&
    formData.subject.trim() &&
    formData.resume &&
    token;
  return (
    <section
      id="career-form"
      className="bg-altermain pt-11 md:pt-16 pb-12 containers"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center"
      >
        <motion.h2 variants={fadeInUp} className="main-heading2 mb-5 md:mb-6">
          Apply for a Career Opportunity
        </motion.h2>
        <motion.span
          variants={fadeInUp}
          className="seperator mb-5 md:mb-6"
        ></motion.span>
        <motion.h4
          variants={fadeInUp}
          className="text-sm sm:!text-base md:!text-xl lg:!text-2xl description mb-3"
        >
          Join Our Team
        </motion.h4>
        <motion.p
          variants={fadeInUp}
          className="description !text-center md:text-justify"
        >
          We are excited to learn more about you! Please complete the form below
          to apply for a position with us.
        </motion.p>
      </motion.div>

      <form
        className="mt-6 flex flex-col gap-y-4 md:space-y-6 md:px-12 lg:px-20 xl:px-28"
        onSubmit={handleSubmit}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-11 gap-y-5"
        >
          <motion.input
            type="text"
            placeholder="First Name"
            required
            maxLength={50}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input"
            variants={fadeInUp}
          />

          <motion.input
            variants={fadeInUp}
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

          <motion.div className="relative w-full" variants={fadeInUp}>
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
          </motion.div>

          <motion.input
            variants={fadeInUp}
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
        </motion.div>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <label htmlFor="fileUpload" className="block cursor-pointer">
            <div className="input flex items-center gap-x-5 justify-between pr-[10px]">
              <p className="font-helvatica text-sm md:text-base text-[#9D9D9D] font-medium leading-[154%]">
                {formData?.resume?.name ? (
                  <span>{formData.resume?.name}</span>
                ) : (
                  <>
                    <span> Upload Resume/CV</span>
                    <span className="text-[#979797] text-xs md:text-sm">
                      ( PDF, DOC, DOCX. File size limit: 2MB )
                    </span>
                  </>
                )}
              </p>

              <div className="w-[141px] h-[44px] flex items-center justify-center bg-white text-black font-[Century Gothic] text-[12px] uppercase border border-gray-300">
                Upload
              </div>
            </div>
          </label>
          <input
            type="file"
            id="fileUpload"
            name="file-cv"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </motion.div>

        <motion.textarea
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <ReCaptcha
            siteKey={
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
              "6LeCshMrAAAAAHsDPIn5ewGPJQkPdXoSGeaQI6nY"
            }
            callback={handleToken}
            ref={recaptchaRef}
          />
        </motion.div>

        <motion.div
          className="flex justify-center mt-4 md:mt-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <button
            ref={buttonRef}
            type="submit"
            disabled={!isFormValid}
            className={`text-sm uppercase px-9 py-4 text-center inline-block w-fit bg-main border text-altermain mx-auto transition-all hover:bg-altermain hover:text-main hover:border-main duration-300 ${
              !isFormValid
                ? "opacity-50-- cursor-not-allowed"
                : "hover:bg-transparent hover:text-main hover:border-main"
            }`}
          >
            {isMobile ? "Submit" : " Submit Your Application"}
          </button>
        </motion.div>
      </form>
    </section>
  );
};

export default CareerForm;
