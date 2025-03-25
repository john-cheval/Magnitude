"use client";
import React, { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Detect page changes
import Logo from "../../../public/common/Logo2.svg";
import Image from "next/image";
import Link from "next/link";
import { LiaLinkedinIn } from "react-icons/lia";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const pathname = usePathname(); // Detect page changes
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1); // Update key to force animation restart
  }, [pathname]); // Runs on every route change

  return (
    <footer
      className="containers bg-footerBG bg-cover bg-center h-full relative pb-14 md:pb-16"
      ref={footerRef}
    >
      <div className="w-full h-[1px] bg-main relative z-50 hidden md:block overflow-hidden" />

      {/* Key changes on navigation to restart animation */}
      <motion.div
        key={animationKey} // This forces animation to restart on navigation
        className="flex flex-col items-center justify-center space-y-5 z-50 relative pt-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Image
            src={Logo}
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto max-w-[266px] object-cover"
          />
        </motion.div>

        {/* Contact Links */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:gap-x-3">
            <Link
              href={"tel:+971 56 5048488"}
              className="description flex items-center justify-center gap-x-2"
            >
              <span className="text-center font-bold">T :</span>+971 56 5048488
            </Link>
            <Link
              href={"mailto:contact@magnitudeyachts.com"}
              className="description flex items-center gap-x-2"
            >
              <span className="text-center font-bold">E :</span>
              contact@magnitudeyachts.com
            </Link>
          </div>
        </motion.div>

        {/* Social Icon */}
        <motion.div variants={itemVariants}>
          <Link
            href={"/"}
            target="_blank"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-main"
          >
            <LiaLinkedinIn />
          </Link>
        </motion.div>

        {/* Footer Text */}
        <motion.div variants={itemVariants}>
          <p className="text-center text-sm font-light leading-[170%] capitalize max-w-[515px] flex flex-col sm:flex-row gap-y-3">
            <span>
              Designed & Developed by{" "}
              <Link href={"https://chevalme.com/"} target="_blank">
                Cheval
              </Link>
            </span>
            <span className="mx-1 hidden sm:block">|</span>
            <span>© 2025 Magnitude. All rights reserved</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute w-full h-full max-h-[345px] bg-footerGrad2 md:bg-footerGrad top-0 left-0" />
    </footer>
  );
};

export default Footer;
