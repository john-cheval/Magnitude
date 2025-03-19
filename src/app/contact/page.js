import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import Locations from "@/components/Contact/Locations";
import Section2 from "@/components/Contact/Section2";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <Section2 />
      <Locations />
      <ContactForm />
    </>
  );
};

export default ContactPage;
