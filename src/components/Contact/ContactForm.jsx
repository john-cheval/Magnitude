"use client";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { gsap } from "gsap";

const ContactForm = () => {
  const locationRef = useRef(null);
  const titleRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lasstName: "",
    phone: "",
    email: "",
    message: "",
  });

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
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // const data = await response.json();
      // console.log("Form Submitted Successfully:", data);
      toast.success("Form Submitted Successfully");

      setFormData({
        firstName: "",
        lasstName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (e) {
      console.log("Error submitting form:", e.message);
    }
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
            type="number"
            placeholder="Phone"
            required
            maxLength={200}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input "
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

        <div className="flex justify-center mt-3 ">
          <button
            ref={buttonRef}
            type="submit"
            className="text-sm uppercase  px-9 py-4 text-center inline-block w-fit bg-main text-altermain mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
