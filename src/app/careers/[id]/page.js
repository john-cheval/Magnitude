import CareerForm from "@/components/Careers/CareerForm";
import CareersHero from "@/components/Careers/CareersHero";
import CareersJobList from "@/components/Careers/CareersJobList";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/common/Footer"));

import React from "react";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `careers/${id}`, true);
}
const CarrerInnerPage = async ({ params }) => {
  const paramsID = (await params).id;

  const careersBannerData = await fetchData(
    `https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/careers_category_detail?slug=${paramsID}`
  );

  const careersList = await fetchData(
    `https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/careers_list`
  );
  const { email_address, phone_number } = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=23"
  );
  return (
    <>
      <CareersHero
        title={careersBannerData?.name}
        bannerImage={careersBannerData?.banner}
      />
      <CareersJobList careersList={careersList} />
      <CareerForm />
      <Footer email_address={email_address} phone_number={phone_number} />
    </>
  );
};

export default CarrerInnerPage;
