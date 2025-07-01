import { containerVariants, fadeInUp } from "@/app/lib/framer";
import CareerForm from "@/components/Careers/CareerForm";
import CareersHero from "@/components/Careers/CareersHero";
import CareersJobList from "@/components/Careers/CareersJobList";
import { baseUrl } from "@/utils/apiUrl";
import { fetchData } from "@/utils/fetchData";
import generateMetadataData from "@/utils/generateMetaData";
import * as motion from "motion/react-client";
import Link from "next/link";

import React from "react";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `careers/${id}`, true);
}

const CarrerInnerPage = async ({ params }) => {
  const paramsID = (await params).id;

  const careersBannerData = await fetchData(
    `${baseUrl}/careers_category_detail?slug=${paramsID}`
  );

  const careersList = await fetchData(
    `${baseUrl}/careers_list?catid=${careersBannerData?.term_id}`
  );

  return (
    <div className="bg-white">
      <CareersHero
        title={careersBannerData?.name}
        bannerImage={careersBannerData?.banner}
      />

      {careersList ? (
        <CareersJobList careersList={careersList} />
      ) : (
        <>
          <motion.div
            className="flex flex-col containers items-center justify-center h-full z-50 relative text-altermain mt-5 sm:mt-10 lg:mt-14 pb-10 containers"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl md:text-3xl leading-[150%] text-altermain text-center md:mb-2"
            >
              Join Our Team
            </motion.h3>

            <motion.span className="seperator2 mx-auto" variants={fadeInUp} />

            <motion.div
              className="mt-3 md:mt-6 text-center text-sm md:text-base font-light space-y-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.p variants={fadeInUp}>
                At Magnitude, we believe excellence begins with people. While we
                currently do not have any open positions, we are always open to
                hearing from talented professionals who align with our values
                and vision.
              </motion.p>

              <motion.p variants={fadeInUp}>
                If you’re passionate about operational innovation, attention to
                detail, and delivering results with integrity, we’d love to hear
                from you.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Please send your CV and a brief introduction to{" "}
                <Link
                  className="underline"
                  href={"mailto:contact@magnitudeyachts.com"}
                >
                  contact@magnitudeyachts.com.
                </Link>
                We will keep your information on file and contact you should a
                relevant opportunity arise.
              </motion.p>
            </motion.div>
          </motion.div>
        </>
      )}

      <CareerForm />
    </div>
  );
};

export default CarrerInnerPage;
