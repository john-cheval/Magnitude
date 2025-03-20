import React from "react";
import { IoMail } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

function Section2({ emailAddress, address, phoneList, title }) {
  return (
    <section className="bg-altermain py-9 containers">
      <div className="flex items-center flex-col">
        <h1 className="main-heading2 mb-6">{title}</h1>
        <span className="seperator"></span>

        <div className="mt-4 space-y-4">
          <Link
            href={"mailto:contact@magnitudeyachts.com"}
            className="flex items-center justify-center font-helvatica gap-x-2 font-light leading-[186%]"
          >
            <IoMail color="#fff" /> {emailAddress}
          </Link>

          <div className="flex items-center gap-x-3">
            {" "}
            <Link
              href={`tel:${phoneList[0]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-2 font-light leading-[186%]"
            >
              <RiPhoneFill color="#fff" />
              {phoneList[0]?.title} {phoneList[0]?.phone_number}
            </Link>
            |
            <Link
              href={`tel:${phoneList[1]?.phone_number}`}
              className="flex items-center font-helvatica gap-x-2 font-light leading-[186%]"
            >
              {phoneList[1]?.title} {phoneList[1]?.phone_number}
            </Link>
          </div>

          <Link
            href={"#"}
            target="_blank"
            className="flex items-center font-helvatica gap-x-2 font-light leading-[186%] justify-center"
          >
            <MdLocationPin color="#fff" />
            {address}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section2;
