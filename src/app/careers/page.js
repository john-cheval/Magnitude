import CareerForm from "@/components/Careers/CareerForm";
import CareersHero from "@/components/Careers/CareersHero";
import CareersList from "@/components/Careers/CareersList";
import { baseUrl } from "@/utils/apiUrl";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadataData(20, "careers", false);
}

const Careers = async () => {
  const [careersData, careersCategory] = await Promise.all([
    fetchData(`${baseUrl}/full_details?ID=20`),
    fetchData(`${baseUrl}/careers_category`),
  ]);

  return (
    <>
      <CareersHero
        title={careersData?.post_title}
        bannerImage={careersData?.top_banner}
      />
      <CareersList careersCategory={careersCategory} />
      <CareerForm />
    </>
  );
};

export default Careers;
