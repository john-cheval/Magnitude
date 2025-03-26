"use client";
import dynamic from "next/dynamic";
import React from "react";

const CareersHero = dynamic(() => import("@/components/Careers/CareersHero"));
const CareersList = dynamic(() => import("@/components/Careers/CareersList"));
const CareerForm = dynamic(() => import("@/components/Careers/CareerForm"));
const Footer = dynamic(() => import("@/components/common/Footer"), {
  ssr: false,
});

const CarrersPage = ({
  careersData,
  careersCategory,
  email_address,
  phone_number,
}) => {
  return (
    <>
      <CareersHero
        title={careersData?.post_title}
        bannerImage={careersData?.top_banner}
      />
      <CareersList careersCategory={careersCategory} />
      <CareerForm />
      <Footer email_address={email_address} phone_number={phone_number} />
    </>
  );
};

export default CarrersPage;
