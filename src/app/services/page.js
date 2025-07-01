import Services from "@/components/Services/Services";
import React from "react";
import generateMetadataData from "@/utils/generateMetaData";
import { fetchData } from "@/utils/fetchData";
import ServiceHero from "@/components/Services/ServiceHero";
import { baseUrl } from "@/utils/apiUrl";

export async function generateMetadata() {
  return await generateMetadataData(17, "services", false);
}
const ServicePage = async () => {
  const [servicesData, servicesList] = await Promise.all([
    fetchData(`${baseUrl}/full_details?ID=17`),
    fetchData(`${baseUrl}/services`),
  ]);

  return (
    <>
      <ServiceHero
        title={servicesData?.post_title}
        small_heading={servicesData?.small_heading}
        description={servicesData?.short_description}
        bannerImage={servicesData?.top_banner}
        bannerImageMobile={servicesData?.top_image_mobile?.url}
      />
      <Services servicesList={servicesList} />
    </>
  );
};

export default ServicePage;
