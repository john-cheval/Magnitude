import AboutHero from "@/components/About/AboutHero";
import OurValues from "@/components/About/OurValues";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import React from "react";
import generateMetadataData from "@/utils/generateMetaData";
import { fetchData } from "@/utils/fetchData";

export async function generateMetadata() {
  return await generateMetadataData(14, "about", false);
}
const AboutPage = async () => {
  const aboutData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=14"
  );
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
