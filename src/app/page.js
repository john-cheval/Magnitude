import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import React from "react";
import HomePage from "@/page-views/HomePage";

export async function generateMetadata() {
  return await generateMetadataData(10, "", false);
}

export default async function Home() {
  const [homeData, serviceData] = await Promise.all([
    fetchData(
      "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=10"
    ),
    fetchData(
      "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/services"
    ),
  ]);

  return <HomePage homeData={homeData} serviceData={serviceData} />;
}
