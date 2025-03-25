"use client";
import dynamic from "next/dynamic";
import React from "react";

const CareersHero = dynamic(() => import("@/components/Careers/CareersHero"), {
  ssr: false,
});
const CareersList = dynamic(() => import("@/components/Careers/CareersList"), {
  ssr: false,
});
const CareerForm = dynamic(() => import("@/components/Careers/CareerForm"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/common/Footer"), {
  ssr: false,
});

const CarrersPage = ({ careersData, careersCategory }) => {
  return (
    <>
      <CareersHero
        title={careersData?.post_title}
        bannerImage={careersData?.top_banner}
      />
      <CareersList careersCategory={careersCategory} />
      <CareerForm />
      <Footer />
    </>
  );
};

export default CarrersPage;
