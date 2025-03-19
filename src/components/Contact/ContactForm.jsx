"use client";
import React, { useState } from "react";

const ContactForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    setFormData({
      firstName: "",
      lasstName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-altermain py-12  containers">
      <h3 className="main-heading2 mb-6">Enquire Now</h3>
      <span className="seperator mb-7"></span>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
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

          <input
            type="number"
            placeholder="Phone"
            required
            maxLength={200}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
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
            className="input"
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
          className="input"
        />

        <div className="flex justify-center mt-3">
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
