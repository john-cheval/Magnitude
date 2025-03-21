"use client";

import React from "react";

const Locations = () => {
  return (
    <section className="bg-altermain containers space-y-6 pt-4 md:pt-0">
      <h3 className="main-heading2 md:text-left text-center fade-item2 mb-8 md:mb-0">
        Our Locations
      </h3>
      <div className="fade-item2">
        <iframe
          src="https://snazzymaps.com/embed/693860"
          // width="100%"
          // height="300px"
          // style="border:none;"
          style={{
            border: "none",
            // maxHeight: "300px",
            height: "400px",
            width: "100%",
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default Locations;
