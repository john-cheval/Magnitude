import React from "react";
import generateMetadataData from "@/utils/generateMetaData";
import { fetchData } from "@/utils/fetchData";
import AboutHero from "@/components/About/New/Hero";
import SectionTwo from "@/components/About/New/SectionTwo";
import SectionThree from "@/components/About/New/SectionThree";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import { baseUrl } from "@/utils/apiUrl";

export async function generateMetadata() {
  return await generateMetadataData(14, "about", false);
}
const About = async () => {
  const aboutData = await fetchData(` ${baseUrl}/full_details?ID=14`);

  return (
    <>
      <AboutHero list={aboutData?.section_list[0]?.list[0]} />
      <SectionTwo list={aboutData?.section_list[0]?.list[1]} />
      <SectionThree
        list={aboutData?.section_list[1]?.list[0]}
        valuesData={aboutData?.section_list[1]?.list_of_our_values}
      />
      <WhyChooseUs
        whyChooseData={aboutData?.section_list[2]?.list}
        imageUrl={aboutData?.section_list[2]?.list[0]?.image}
      />
    </>
  );
};

export default About;
