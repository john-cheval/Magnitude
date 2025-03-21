import ContactForm from "@/components/Contact/ContactForm";
import Locations from "@/components/Contact/Locations";
import Section2 from "@/components/Contact/Section2";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import dynamic from "next/dynamic";
import React from "react";
const ContactHero = dynamic(() => import("@/components/Contact/ContactHero"));

export async function generateMetadata() {
  return await generateMetadataData(23, "contact", false);
}
const ContactPage = async () => {
  const contactData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=23"
  );

  return (
    <>
      <ContactHero bannerVideo={contactData?.top_video?.url} />
      <Section2
        emailAddress={contactData?.email_address}
        address={contactData?.address}
        phoneList={contactData?.address_list}
        title={contactData?.post_title}
      />
      {/* <Locations /> */}
      <ContactForm />
    </>
  );
};

export default ContactPage;
