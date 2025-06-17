import React from "react";
import SectionOne from "./Old/SectionOne";
import SectionTwo from "./Old/SectionTwo";
import SectionWhatWeOffer from "./SectionWhatWeOffer";
import SectionThree from "./SectionThree";

const DuringConstruction = ({ serviceData }) => {
  return (
    <>
      <section className="  pt-6 lg:pt-16  text-altermain">
        <SectionOne serviceData={serviceData[0]?.list[0]} />
        <SectionTwo serviceData={serviceData[0]?.list[1]} layout={true} />
        <SectionWhatWeOffer serviceList={serviceData[1]?.list[0]} />
      </section>
      <SectionThree data={serviceData[2]?.list[0]} layout={true} />
    </>
  );
};

export default DuringConstruction;
