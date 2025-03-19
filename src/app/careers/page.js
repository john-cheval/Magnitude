import CareerForm from "@/components/Careers/CareerForm";
import CareersHero from "@/components/Careers/CareersHero";
import CareersList from "@/components/Careers/CareersList";
import React from "react";

const CareersPage = () => {
  return (
    <>
      <CareersHero />
      <CareersList />
      <CareerForm />
    </>
  );
};

export default CareersPage;
