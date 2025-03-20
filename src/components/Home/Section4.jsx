import React from "react";
const Section4 = ({ imageUrl, homeCardData }) => {
  return (
    <>
      <section
        className=" h-screen--  relative pt-[700px] pb-20 bg-altermain"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <div className="grid grid-cols-3 gap-x-9 gap-y-12  z-10 containers absolute-- top-[50%]-- relative  ">
          {homeCardData?.map((cardData, index) => (
            <div
              key={cardData?.id || index}
              className="px-9 border border-[#fff]  pt-8 pb-14 max-w-[370px]-- space-y-5 bg-altermain/20"
            >
              <h3 className="main-heading3">{cardData?.title}</h3>
              <span className="block w-11 h-[2px] bg-main"></span>
              <div
                dangerouslySetInnerHTML={{ __html: cardData?.description }}
                className="text-justify font-helvatica font-light leading-[186%] max-w-[296px]--"
              />
            </div>
          ))}
        </div>

        <div className="bg-homeBottomGrad w-full h-full max-h-[50%] absolute bottom-0 left-0 z-0" />
      </section>

      {/* <section className="bg-altermain h-screen  w-full"></section> */}
    </>
  );
};

export default Section4;
