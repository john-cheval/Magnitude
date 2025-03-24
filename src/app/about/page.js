import React from "react";
import generateMetadataData from "@/utils/generateMetaData";
import { fetchData } from "@/utils/fetchData";
import AboutPage from "@/pages/About";

export async function generateMetadata() {
  return await generateMetadataData(14, "about", false);
}
const About = async () => {
  const aboutData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=14"
  );
  return (
    <>
      <AboutPage aboutData={aboutData} />
    </>
  );
};

export default About;
