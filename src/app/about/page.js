import React from "react";
import generateMetadataData from "@/utils/generateMetaData";
import { fetchData } from "@/utils/fetchData";

import dynamic from "next/dynamic";
const AboutHero = dynamic(() => import("@/components/About/AboutHero"));

const OurValues = dynamic(() => import("@/components/About/OurValues"));
const WhyChooseUs = dynamic(() => import("@/components/About/WhyChooseUs"));
const Footer = dynamic(() => import("@/components/common/Footer"));

export async function generateMetadata() {
  return await generateMetadataData(14, "about", false);
}
const About = async () => {
  const aboutData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=14"
  );
  const { email_address, phone_number } = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=23"
  );
  return (
    <div className="bg-white">
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
      <Footer email_address={email_address} phone_number={phone_number} />
    </div>
  );
};

export default About;
