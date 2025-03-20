import React from "react";

const WhyChooseUs = ({ whyChooseData, imageUrl }) => {
  return (
    <section
      className="bg-aboutWhyBG-- bg-cover bg-center h-[587px] mt-[86px] relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {whyChooseData?.map((cardData, index) => (
        <div
          key={index}
          className="flex flex-col containers items-center justify-center h-full z-50 relative absolute-- -bottom-12--"
        >
          <h3 className="main-heading3 text-center mb-2">{cardData?.title}</h3>
          <h2 className="main-heading text-center mb-4">
            {cardData?.sub_title}
          </h2>
          <span className="seperator2 mx-auto"></span>
          <div
            className="mt-4 text-center font-light space-y-7 "
            dangerouslySetInnerHTML={{ __html: cardData?.description }}
          />
        </div>
      ))}

      <div className="bg-aboutBgGrad w-full h-full  absolute bottom-0 left-0" />
    </section>
  );
};

export default WhyChooseUs;
