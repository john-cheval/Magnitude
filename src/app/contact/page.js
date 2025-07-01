import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import Locations from "@/components/Contact/Locations";
import Section2 from "@/components/Contact/Section2";
import { baseUrl } from "@/utils/apiUrl";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadataData(23, "contact", false);
}
const ContactPage = async () => {
  const contactData = await fetchData(`${baseUrl}/full_details?ID=23`);

  if (!contactData) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <ContactHero bannerVideo={contactData?.top_video?.url} />
      <Section2
        emailAddress={contactData?.email_address}
        address={contactData?.address}
        phoneList={contactData?.address_list}
        title={contactData?.post_title}
      />
      <Locations mapImage={contactData?.google_map_image?.url} />
      <ContactForm />
    </>
  );
};

export default ContactPage;
