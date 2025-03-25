import CarrersPage from "@/page-views/CarrersPage";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadataData(20, "careers", false);
}

const Careers = async () => {
  const careersData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=20"
  );
  const careersCategory = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/careers_category"
  );
  return (
    <>
      <CarrersPage
        careersData={careersData}
        careersCategory={careersCategory}
      />
    </>
  );
};

export default Careers;
