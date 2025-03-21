"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-toastify";
gsap.registerPlugin(ScrollTrigger);
const ContactForm = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lasstName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const el = sectionRef.current;
    const elements = gsap.utils.toArray(".fade-item3");

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);

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
      ref={sectionRef}
      className="bg-altermain pt-16 pb-12  md:py-12  containers"
    >
      <h3 className="main-heading2 mb-6 fade-item3 text-center md:text-left">
        Enquire Now
      </h3>
      <span className="seperator mb-7 fade-item3 mx-auto md:mx-0"></span>
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
            className="input fade-item3"
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
            className="input fade-item3"
          />

          <input
            type="number"
            placeholder="Phone"
            required
            maxLength={200}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input fade-item3"
          />

          <input
            type="email"
            placeholder="email"
            required
            maxLength={200}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input fade-item3"
          />
        </div>

        <textarea
          type="text"
          placeholder="Message"
          maxLength={2000}
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input fade-item3"
        />

        <div className="flex justify-center mt-3 fade-item3">
          <button
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
