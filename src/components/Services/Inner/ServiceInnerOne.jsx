import React from "react";
import SectionWhatWeOffer from "./SectionWhatWeOffer";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
const ServiceInnerOne = ({ serviceData }) => {
  if (!serviceData || serviceData.length === 0)
    return (
      <p className="text-altermain text-base flex items-center justify-center">
        There is no data
      </p>
    );
  return (
    <>
      <section className="  pt-6-- md:pt-8-- text-altermain">
        <SectionOne serviceData={serviceData[0]?.list[0]} />
        <SectionTwo serviceData={serviceData[0]?.list[1]} layout={false} />
        <SectionWhatWeOffer serviceList={serviceData[1]?.list[0]} />
      </section>

      <SectionThree data={serviceData[2]?.list[0]} />
    </>
  );
};

export default ServiceInnerOne;
