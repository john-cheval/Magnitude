import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
// import dynamic from "next/dynamic";
import React from "react";
// import Section2 from "@/components/Home/Section2";
import HomePage from "@/page-views/HomePage";
// const HomeHero = dynamic(() => import("@/components/Home/HomeHero"));
// const Section4 = dynamic(() => import("@/components/Home/Section4"));
// const Section3 = dynamic(() => import("@/components/Home/Section3"));

export async function generateMetadata() {
  return await generateMetadataData(10, "", false);
}

export default async function Home() {
  const homeData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=10"
  );
  const serviceData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/services"
  );

  return <HomePage homeData={homeData} serviceData={serviceData} />;
}
