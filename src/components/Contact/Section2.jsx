import React from "react";
import { IoMail } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

function Section2() {
  return (
    <section className="bg-altermain py-9 containers">
      <div className="flex items-center flex-col">
        <h1 className="main-heading2 mb-6">Contact</h1>
        <span className="seperator"></span>

        <div className="mt-4 space-y-4">
          <Link
            href={"mailto:contact@magnitudeyachts.com"}
            className="flex items-center justify-center font-helvatica gap-x-2 font-light leading-[186%]"
          >
            <IoMail color="#fff" /> contact@magnitudeyachts.com
          </Link>

          <div className="flex items-center gap-x-3">
            {" "}
            <Link
              href={"tel:+971 56 50 48488"}
              className="flex items-center font-helvatica gap-x-2 font-light leading-[186%]"
            >
              <RiPhoneFill color="#fff" />
              Dubai: +971 56 50 48488
            </Link>
            |
            <Link
              href={"tel:+852 2824 8139"}
              className="flex items-center font-helvatica gap-x-2 font-light leading-[186%]"
            >
              Hong Kong: +852 2824 8139
            </Link>
          </div>

          <Link
            href={"#"}
            className="flex items-center font-helvatica gap-x-2 font-light leading-[186%] justify-center"
          >
            <MdLocationPin color="#fff" />
            Downtown, Dubai, UAE
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section2;
