"use client";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import ReCaptcha from "@/utils/reCaptcha";

const ContactForm = () => {
  const locationRef = useRef(null);
  const titleRef = useRef(null);
  const inputRefs = useRef([]);
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

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: locationRef.current,
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
          trigger: locationRef.current,
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
          trigger: locationRef.current,
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
        "https://chevaldemo.xyz/demo/magnitude/wp-json/contact-form-7/v1/contact-forms/111/feedback",
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
    <section
      ref={locationRef}
      className="bg-altermain pt-16 pb-12  md:py-12  containers"
    >
      <h3
        ref={titleRef}
        className="main-heading2 mb-6  text-center md:text-left"
      >
        Enquire Now
      </h3>
      <span className="seperator mb-7  mx-auto md:mx-0"></span>
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
            className="input "
          />

          <input
            ref={(el) => (inputRefs.current[1] = el)}
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

          <input
            ref={(el) => (inputRefs.current[2] = el)}
            type="text"
            placeholder="Phone"
            required
            maxLength={200}
            id="phone"
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

          <input
            ref={(el) => (inputRefs.current[3] = el)}
            type="email"
            placeholder="email"
            required
            maxLength={200}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input "
          />
        </div>

        <textarea
          type="text"
          placeholder="Message"
          ref={(el) => (inputRefs.current[4] = el)}
          maxLength={2000}
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input "
        />

        <div className="flex justify-center">
          <ReCaptcha
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            callback={handleToken}
            ref={recaptchaRef}
          />
        </div>

        <div className="flex justify-center mt-3 ">
          <button
            ref={buttonRef}
            type="submit"
            disabled={!isFormValid}
            className={`text-sm uppercase px-9 py-4 text-center inline-block w-fit bg-main border text-altermain mx-auto transition-all duration-300 hover:bg-transparent hover:text-main hover:border-main ${
              !isFormValid
                ? "opacity-50-- cursor-not-allowed"
                : "hover:bg-transparent hover:text-main hover:border-main"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
