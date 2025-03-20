import React from "react";
import image1 from "../../../public/Careers/image1.png";
import image2 from "../../../public/Careers/image2.png";
import Image from "next/image";
import FillButton from "../common/FillButton";

const CareersList = ({ careersCategory }) => {
  return (
    <section className="containers text-altermain mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image
          src={image1}
          alt={"image1"}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />

        <div className={` px-20 py-12  bg-[#f5f5f5]`}>
          <h2 className="main-heading2 mb-6">Crew</h2>
          <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
          <h3 className="description !text-lg mb-1">
            Experience Excellence at Sea
          </h3>
          <p className="description max-w-[348px]-- mb-2">
            Join a crew with extensive expertise, where every journey is a
            testament to skill, adventure, and collaboration. Elevate your
            career while creating unforgettable experiences on board.
          </p>

          <FillButton link={"/careers/crew"} text={"View all"} dark={true} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-9 mb-12">
        <div className={` px-20 py-12  bg-[#f5f5f5]`}>
          <h2 className="main-heading2 mb-6">Corporate</h2>
          <span className="block w-14 h-[2px]   bg-altermain mb-5"></span>
          <h3 className="description !text-lg mb-1">Driven by Expertise</h3>
          <p className="description max-w-[348px]-- mb-2">
            Be part of a team with a wealth of experience shaping the future of
            luxury yachting. Collaborate, innovate, and take your career to new
            heights in an inspiring environment.
          </p>

          <FillButton
            link={"/careers/corporate"}
            text={"View all"}
            dark={true}
          />
        </div>

        <Image
          src={image2}
          alt={"image2"}
          width={0}
          height={0}
          className="w-full h-full max-w-[553px]-- max-h-[404px]-- object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default CareersList;
