import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceMobile = ({ title, serviceData }) => {
  const homeCardData = Object?.values(serviceData);

  return (
    <div className="containers py-10">
      <h3 className="font-semibold text-center text-altermain text-[30px] sm:text-[70px] uppercase">
        {title}
      </h3>

      <div className="relative pt-8  h-fit w-screen overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 l  relative ">
          {homeCardData?.map((cardData, index) => (
            <Link
              href={`/services/${cardData?.post_name}`}
              className="space-y-4 lg:space-y-6 cursor-pointer work-card"
              prefetch={true}
              key={cardData?.ID || index}
            >
              <Image
                src={cardData?.home_page_image}
                alt={cardData?.post_title}
                className="w-full md:h-auto object-cover h-[350px]"
                width={500}
                height={300}
                sizes="100vw"
              />
              <h5 className="text-altermain text-xl lg:text-2xl leading-[150%]">
                {cardData?.post_title}
              </h5>
              <span className="seperator2Dark"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMobile;
