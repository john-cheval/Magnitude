import ServiceInner from "@/components/Services/Inner/ServiceInner";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/common/Footer"));
import React from "react";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `services/${id}`, true);
}

const ServiceInnerPage = async ({ params }) => {
  const paramsID = (await params).id;
  const serviceData = await fetchData(
    `https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?slug=${paramsID}&meta_type=service`
  );

  return (
    <>
      <ServiceInner serviceData={serviceData} />
      <Footer />
    </>
  );
};

export default ServiceInnerPage;
