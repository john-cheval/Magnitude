"use client";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import ReCaptcha from "@/utils/reCaptcha";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/app/lib/framer";

const ContactForm = () => {
  const buttonRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lasstName: "",
    phone: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.firstName.trim() &&
    formData.lasstName.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.message.trim() &&
    token;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    if (!token) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);

    e.preventDefault();
    const newformData = new FormData();
    newformData.append("text-fname", formData.firstName);
    newformData.append("text-lname", formData.lasstName);
    newformData.append("tel-phone", formData.phone);
    newformData.append("email-address", formData.email);
    newformData.append("textarea-message", formData.message);
    newformData.append("_wpcf7_unit_tag", "00b8018");

    try {
      const response = await fetch(
        "https://manage.magnitudeyachts.com/wp-json/contact-form-7/v1/contact-forms/111/feedback",
        {
          method: "POST",
          body: newformData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (!token) {
        toast.error("Captcha token is missing. Please try again.");
        return;
      }

      if (response.status === 200) {
        toast.success("Form Submitted Successfully");
      }
      setToken("");
      if (recaptchaRef.current) {
        recaptchaRef.current.resetCaptcha();
      }

      setFormData({
        firstName: "",
        lasstName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (e) {
      toast.error("Error submitting form");
    }
  };

  const handleToken = (token) => {
    setToken(token);
  };
  return (
    <section className="bg-altermain pt-16 pb-12  md:py-12  containers">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="main-heading2 mb-6  !text-center "
      >
        Enquire Now
      </motion.h3>
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="seperator mb-7  mx-auto "
      ></motion.span>
      <form
        className="mt-6 flex flex-col gap-y-4 md:px-12 lg:px-20 xl:px-28 "
        onSubmit={handleSubmit}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-8 gap-y-6"
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
            className="input "
            variants={fadeInUp}
          />

          <motion.input
            variants={fadeInUp}
            type="text"
            placeholder="Last Name"
            required
            maxLength={50}
            id="lasstName"
            name="lasstName"
            value={formData.lasstName}
            onChange={handleChange}
            className="input "
          />

          <motion.input
            type="text"
            placeholder="Phone"
            required
            maxLength={200}
            id="phone"
            variants={fadeInUp}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input "
            onInput={(e) => {
              if (e.target.value.length > 15) {
                e.target.value = e.target.value.slice(0, 15);
              }
            }}
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
                "Delete",
              ];

              const isNumber = /^[0-9]$/.test(e.key);
              const isPlus = e.key === "+";
              const inputValue = e.currentTarget.value;
              const cursorPosition = e.currentTarget.selectionStart;

              if (
                (isPlus &&
                  (cursorPosition !== 0 || inputValue.includes("+"))) ||
                (!isNumber && !isPlus && !allowedKeys.includes(e.key))
              ) {
                e.preventDefault();
              }
            }}
          />

          <motion.input
            type="email"
            placeholder="Email"
            required
            maxLength={200}
            id="email"
            variants={fadeInUp}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input "
          />
        </motion.div>

        <motion.textarea
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          type="text"
          placeholder="Message"
          maxLength={2000}
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input "
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mt-3"
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mt-2 "
        >
          <button
            ref={buttonRef}
            type="submit"
            disabled={!isFormValid}
            className={`text-sm uppercase px-11 py-4 text-center inline-block w-fit bg-main border text-altermain mx-auto transition-all duration-300 hover:bg-transparent hover:text-main hover:border-main ${
              !isFormValid
                ? "opacity-50-- cursor-not-allowed"
                : "hover:bg-transparent hover:text-main hover:border-main"
            }`}
          >
            Submit
          </button>
        </motion.div>
      </form>
    </section>
  );
};

export default ContactForm;
