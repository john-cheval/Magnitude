"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/common/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ navLeft, navRight, mobileMenu }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) return;
      if ( window.scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ isMobileOpen]);

  const toggleMobileNav = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <header
      className={`bg-navBg py-7- md:py-10- md:pb-8-- px-6   md:px-16 lg:px-[52px] fixed left-0-- top-0  w-full z-[999955] transition-all duration-300 ${
        isVisible ? "py-7 md:py-10" : "-translate-y-full- py-7"
      }`}
      style={{
        willChange: "transform",
      }}
    >
      <nav className="flex justify-between items-center">
        <ul className="md:flex items-center gap-x-10 hidden">
          {navLeft &&
            navLeft.map((link) => {
              const isActive =
                link.url === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.url);

              return (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className={`text-sm uppercase relative transition-all duration-300 
              ${isActive ? "text-white" : ""} 
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
              after:bottom-[-9px] after:w-[17px] after:h-[1px] after:bg-white 
              after:opacity-0 after:transition-all after:duration-300 
              ${isActive ? "after:opacity-100" : "hover:after:opacity-100"}`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
        </ul>

        <Link href="/" onClick={() => setIsMobileOpen(false)}>
          <Image
            src={Logo}
            className="w-full h-full object-cover"
            alt="magnitude_logo"
            priority
            height={0}
            width={0}
            sizes="100vw"
          />
        </Link>

        <ul className="md:flex items-center gap-x-10 hidden ">
          {navRight &&
            navRight?.map((link) => {
              const isActive =
                link.url === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.url);
              return (
                <li key={link.id}>
                  <Link
                    className={`text-sm uppercase relative transition-all duration-300 
                      ${isActive ? "text-white" : ""} 
                      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                      after:bottom-[-9px] after:w-[17px] after:h-[1px] after:bg-white 
                      after:opacity-0 after:transition-all after:duration-300 
                      ${
                        isActive
                          ? "after:opacity-100"
                          : "hover:after:opacity-100"
                      }`}
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
        </ul>

        {isMobileOpen ? (
          <IoMdClose
            className="md:hidden"
            size={30}
            onClick={toggleMobileNav}
          />
        ) : (
          <RiMenu3Fill
            className="md:hidden"
            size={30}
            onClick={toggleMobileNav}
          />
        )}
      </nav>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNav
              MobileNavLinks={mobileMenu}
              isOpen={isMobileOpen}
              handleClose={toggleMobileNav}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
