import CareerForm from "@/components/Careers/CareerForm";
import CareersHero from "@/components/Careers/CareersHero";
import CareersJobList from "@/components/Careers/CareersJobList";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import React from "react";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `careers/${id}`, true);
}
const CarrerInnerPage = async ({ params }) => {
  const paramsID = (await params).id;
  const careersBannerData = await fetchData(
    `https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/careers_categorye`
  );
  console.log(paramsID, "ihuihdfugug");
  return (
    <>
      <CareersHero />
      <CareersJobList />
      <CareerForm />
    </>
  );
};

export default CarrerInnerPage;
