import ServiceInner from "@/components/Services/Inner/ServiceInner";
import { baseUrl } from "@/utils/apiUrl";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import React from "react";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `services/${id}`, true);
}

const ServiceInnerPage = async ({ params }) => {
  const paramsID = (await params).id;

  const [serviceData, services] = await Promise.all([
    fetchData(`${baseUrl}/full_details?slug=${paramsID}&meta_type=service`),
    fetchData(` ${baseUrl}/services`),
  ]);

  return (
    <div className="bg-white">
      <ServiceInner serviceData={serviceData} services={services} />
    </div>
  );
};

export default ServiceInnerPage;
