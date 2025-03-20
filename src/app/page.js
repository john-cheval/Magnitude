import HomeHero from "@/components/Home/HomeHero";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";

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

  return (
    <>
      <HomeHero
        title={homeData?.slider_list[0].title}
        link={homeData?.slider_list[0].link}
        linkText={homeData?.slider_list[0].link_text}
        videoUrl={homeData?.slider_list[0]?.video?.url}
      />
      <Section2
        title={homeData?.who_we_are_heading}
        desc={homeData?.who_we_are_description}
        imageUrl={homeData?.who_we_are_image}
      />
      <Section3
        title={homeData?.what_we_do_heading}
        serviceData={serviceData}
      />
      <Section4
        imageUrl={homeData?.ship_image}
        homeCardData={homeData?.ship_detail_list}
      />
    </>
  );
}
