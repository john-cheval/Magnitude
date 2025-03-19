import CareerForm from "@/components/Careers/CareerForm";
import CareersHero from "@/components/Careers/CareersHero";
import CareersJobList from "@/components/Careers/CareersJobList";
import React from "react";

const CarrerInnerPage = () => {
  return (
    <>
      <CareersHero />
      <CareersJobList />
      <CareerForm />
    </>
  );
};

export default CarrerInnerPage;
