import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { containerVariants, fadeInUp } from "@/app/lib/framer";
import { IoMdMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { FaLocationDot, FaLinkedinIn } from "react-icons/fa6";

const Footer = ({ data }) => {
  return (
    <footer className="containers bg-footerBG bg-cover bg-center h-full relative pb-10 md:pb-14 ">
      <div className="w-full h-[1px] bg-main/[0.5] relative z-50  overflow-hidden" />

      <div className="flex flex-row  items-center- items-start flex-wrap xl:flex-nowrap justify-center md:justify-between space-y-5- z-50 relative pt-10 md:pt-24 grid- grid-cols-4 gap-x-10 border-b border-b-main/[0.5] pb-14 md:pb-20 gap-y-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src={"/common/footer_logo.svg"}
              alt="Logo"
              width={300}
              height={60}
              sizes="100vw"
              className="w-full h-auto max-w-[250px] md:max-w-[300px] object-cover- mx-auto md:mx-0"
            />
          </motion.div>

          <motion.p
            nitial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="description-footer mt-3 md:mt-6 md:max-w-[300px] !text-center md:!text-left"
          >
            {data?.footer_text}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p variants={fadeInUp} className="footer_heading !text-left">
            Quick Links
          </motion.p>

          <ul className="space-y-2 md:space-y-4 ">
            {data?.menu_quicklinks?.map((link, index) => {
              return (
                <motion.li
                  key={index}
                  className="description-footer  "
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <Link href={link?.url}>{link?.title}</Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p variants={fadeInUp} className="footer_heading !text-left">
            Services
          </motion.p>

          <ul className="space-y-2 md:space-y-4">
            {data?.menu_services?.map((link, index) => {
              const [servic, links] = link?.url?.split("/").filter(Boolean);
              return (
                <motion.li
                  key={index}
                  className="description-footer"
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <Link href={`/services/${links}`}>{link?.title}</Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p variants={fadeInUp} className="footer_heading">
            Contact
          </motion.p>

          <ul className="space-y-2 md:space-y-4 ">
            <motion.li
              variants={fadeInUp}
              whileHover={{ x: 8 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <Link
                href={`mailto:${data?.email_address}`}
                className="description-footer flex items-center gap-x-3 "
              >
                <IoMdMail size={15} />
                {data?.email_address}
              </Link>
            </motion.li>

            {data?.address_list?.map((item, index) => {
              return (
                <motion.li
                  variants={fadeInUp}
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <Link
                    href={`tel:${data?.phone_number}`}
                    className="description-footer flex items-center gap-x-3"
                  >
                    <MdPhone size={15} />

                    <span>
                      {item?.title}: {item?.phone_number}
                    </span>
                  </Link>
                </motion.li>
              );
            })}

            <motion.li
              variants={fadeInUp}
              whileHover={{ x: 8 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <Link
                href={"https://maps.app.goo.gl/jE6vfutkvJc5KacC7"}
                target="_blank"
                className="description-footer flex items-center gap-x-3 "
              >
                <FaLocationDot size={15} />
                {data?.address}
              </Link>
            </motion.li>
          </ul>

          <motion.p
            variants={fadeInUp}
            className="mt-6 ml-2 flex flex-col items-center md:items-start"
          >
            <span className="description-footer block  mb-3 md:mb-4 ">
              Follow us on
            </span>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/magnitudeyachtsllc/"}
              className="p-3 border border-main rounded-full flex items-center justify-center w-fit"
            >
              <FaLinkedinIn />
            </Link>
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="pt-7  flex flex-col items-center sm:items-start gap-y-2 sm:gap-y-0 sm:flex-row sm:justify-between relative z-[999999]"
      >
        <motion.p
          variants={fadeInUp}
          className="font-helvatica text-sm md:text-base leading-[170%]  "
        >
          © {new Date().getFullYear()} MAGNITUDE.All Rights Reserved
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="font-helvatica text-sm md:text-base leading-[170%] group"
        >
          Designed & Developed by{" "}
          <Link
            className="group-hover:underline"
            href={"https://chevalme.com/"}
            target="_blank"
          >
            Cheval
          </Link>
        </motion.p>
      </motion.div>

      <div className="absolute w-full h-full max-h-[345px] md:max-h-full bg-footerGrad2 md:bg-footerGrad top-0 left-0" />
    </footer>
  );
};

export default Footer;
