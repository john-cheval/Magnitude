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
  const { email_address, phone_number } = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=23"
  );
  return (
    <div>
      <CarrersPage
        careersData={careersData}
        careersCategory={careersCategory}
        email_address={email_address}
        phone_number={phone_number}
      />
    </div>
  );
};

export default Careers;
