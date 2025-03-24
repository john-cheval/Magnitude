"use client";
import React from "react";
// import AboutHero from "@/components/About/AboutHero";

const AboutHero = dynamic(() => import("@/components/About/AboutHero"), {
  ssr: false,
});

const OurValues = dynamic(() => import("@/components/About/OurValues"), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import("@/components/About/WhyChooseUs"), {
  ssr: false,
});
// import OurValues from "@/components/About/OurValues";
// import WhyChooseUs from "@/components/About/WhyChooseUs";
import dynamic from "next/dynamic";
const AboutPage = ({ aboutData }) => {
  return (
    <>
      <AboutHero
        banner={aboutData?.top_banner}
        heading={aboutData?.small_heading}
        list={aboutData?.section_list[0]?.list}
      />
      <OurValues ourValuesData={aboutData?.section_list[1]?.list} />
      <WhyChooseUs
        whyChooseData={aboutData?.section_list[2]?.list}
        imageUrl={aboutData?.section_list[2]?.list[0]?.image}
      />
    </>
  );
};

export default AboutPage;
