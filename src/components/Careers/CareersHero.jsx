"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FillButton from "../common/FillButton";
import { usePathname } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const CareersHero = ({ title, bannerImage }) => {
  const pathname = usePathname();
  const [inner, setInner] = useState("");

  const secondPathSegment = pathname.split("/").filter(Boolean)[1];
  useEffect(() => {
    if (secondPathSegment === "crew") {
      setInner("corporate");
    }
    if (secondPathSegment === "corporate") {
      setInner("crew");
    }
  }, [pathname]);

  return (
    <section className="containers pt-28 md:pt-40 lg:pt-44">
      {/* Animated Heading */}

      <div
        className={`flex ${
          secondPathSegment
            ? "justify-between"
            : "justify-center md:justify-start"
        }  items-center`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`main-heading  ${
            secondPathSegment ? "!text-altermain" : "!text-main"
          } capitalize !text-center md:!text-left`}
        >
          {title}
        </motion.h1>

        {secondPathSegment === "crew" || secondPathSegment === "corporate" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href={`/careers/${inner}`}
              prefetch={true}
              className="text-xs sm:text-sm uppercase px-7 md:px-9 py-3 md:py-4 transition-all duration-300 border ease-in-out bg-altermain text-main hover:bg-transparent hover:border-altermain hover:text-altermain text-center w-fit mt-2 flex items-center gap-3 group"
            >
              {`Go to ${inner}`}
              <IoIosArrowRoundForward className="text-main text-2xl transition-transform duration-300 ease-in-out group-hover:text-altermain group-hover:translate-x-2" />
            </Link>
          </motion.div>
        ) : null}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-5 md:mt-8 lg:mt-10 overflow-hidden"
      >
        <Image
          src={bannerImage}
          alt={title}
          width={1200}
          height={530}
          priority
          className={`w-full h-auto max-h-[530px] object-cover transition-opacity duration-500 `}
        />
      </motion.div>
    </section>
  );
};

export default CareersHero;
