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

const safeFetchData = async (url) => {
  try {
    const res = await fetchData(url);
    return res || [];
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};
const CarrerInnerPage = async ({ params }) => {
  const paramsID = (await params).id;

  const careersBannerData = await fetchData(
    `https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/careers_category_detail?slug=${paramsID}`
  );

  const careersList = await safeFetchData(
    `https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/careers_list?catid=${careersBannerData?.term_id}`
  );
  return (
    <div className="bg-white">
      <CareersHero
        title={careersBannerData?.name}
        bannerImage={careersBannerData?.banner}
      />

      {careersList && <CareersJobList careersList={careersList} />}

      <CareerForm />
    </div>
  );
};

export default CarrerInnerPage;
