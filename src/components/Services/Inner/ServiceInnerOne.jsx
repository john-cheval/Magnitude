import React from "react";

import SectionOne from "./New/SectionOne";
import SectionTwo from "./New/SectionTwo";
import SectionThree from "./New/SectionThree";
const ServiceInnerOne = ({ serviceData }) => {
  if (!serviceData || serviceData.length === 0)
    return (
      <p className="text-altermain text-base flex items-center justify-center">
        There is no data
      </p>
    );
  return (
    <>
      <div className="text-altermain">
        <SectionOne serviceData={serviceData[0]?.list[0]} />
        <SectionTwo serviceData={serviceData[0]?.list} />
        <SectionThree data={serviceData[2]?.list[0]} />
      </div>
    </>
  );
};

export default ServiceInnerOne;
