import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import React from "react";
import HomePage from "@/page-views/HomePage";
import { baseUrl } from "@/utils/apiUrl";

export async function generateMetadata() {
  return await generateMetadataData(10, "", false);
}

export default async function Home() {
  const [homeData, serviceData] = await Promise.all([
    fetchData(`${baseUrl}/full_details?ID=10`),
    fetchData(`${baseUrl}/services`),
  ]);

  return <HomePage homeData={homeData} serviceData={serviceData} />;
}
