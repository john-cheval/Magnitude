"use client";
import dynamic from "next/dynamic";
import React from "react";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
// import Section4 from "@/components/Home/Section4";
const HomeHero = dynamic(() => import("@/components/Home/HomeHero"), {
  ssr: false,
});
const Section4 = dynamic(() => import("@/components/Home/Section4"), {
  ssr: false,
});

const HomePage = ({ homeData, serviceData }) => {
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
};

export default HomePage;
