import React from "react";

import SectionWhatWeOffer from "./SectionWhatWeOffer";
import SectionOne from "./Old/SectionOne";
import SectionTwo from "./Old/SectionTwo";
import SectionThree from "./SectionThree";

const PreConstruction = ({ serviceData }) => {
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

export default PreConstruction;
