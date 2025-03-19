import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-aboutWhyBG bg-cover bg-center h-[587px] mt-[86px] relative">
      <div className="flex flex-col containers items-center justify-center h-full z-50 relative absolute-- -bottom-12--">
        <h3 className=" text-2xl lg:text-3xl  text-center mb-2">
          Why Choose Magnitude?
        </h3>
        <h2 className="main-heading text-center mb-4">
          The Magnitude Difference
        </h2>
        <span className="w-11 h-[2px] bg-main block mx-auto"></span>

        <ul className="mt-4 space-y-8 text-center font-light">
          <li>
            At Magnitude, we stand apart because we are mariners at heart.
          </li>
          <li>
            Our founders bring decades of hands-on maritime experience, offering
            unique insights into the practical and technical demands of
            superyacht construction. This deep-rooted expertise allows us to
            anticipate challenges and deliver exceptional results.
          </li>
          <li>
            {" "}
            Every yacht we build is a bespoke masterpiece. From selecting the
            perfect shipyard to refining the final design touches, we handle
            every detail with precision and care. Our personalized approach,
            combined with an unwavering commitment to transparency, innovation,
            and excellence, ensures our clients are not only supported but also
            fully informed and empowered throughout the entire process.
          </li>
          <li>
            With Magnitude, you're not just building a yacht—you're creating a
            legacy.
          </li>
        </ul>
      </div>

      <div className="bg-aboutBgGrad w-full h-full  absolute bottom-0 left-0" />
    </section>
  );
};

export default WhyChooseUs;
