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

      <div className="text-red-500 grid grid-cols-1 pt-8 space-y-8">
        {homeCardData?.map((cardData, index) => (
          <Link
            key={index}
            href={`/services/${cardData?.post_name}`}
            prefetch={true}
          >
            <Image
              src={cardData?.home_page_image}
              alt={cardData?.post_title}
              className="w-full h-auto object-cover h-[350px]--"
              height={0}
              width={0}
              sizes="100vw"
            />

            <h5 className="text-altermain text-xl lg:text-2xl leading-[150%] mt-2">
              {cardData?.post_title}
            </h5>
            <span className="seperator2Dark"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceMobile;
