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
        {serviceData[0]?.list[0] && (
          <SectionOne serviceData={serviceData[0]?.list[0]} />
        )}

        {serviceData[0]?.list && (
          <SectionTwo serviceData={serviceData[0]?.list} />
        )}

        {serviceData[2]?.list[0] && (
          <SectionThree data={serviceData[2]?.list[0]} />
        )}
      </div>
    </>
  );
};

export default ServiceInnerOne;
