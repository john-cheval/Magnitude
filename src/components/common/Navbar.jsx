"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/common/Logo.svg";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Navbar = (/* { navLinks } */) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-navBg py-7 md:pt-12 md:pb-8 px-6   md:px-16 lg:px-[52px] fixed left-0 top-0  w-full z-[999] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center">
        <ul className="md:flex items-center gap-x-10 hidden  ">
          {navLinks?.leftLink?.map((link) => {
            const isActive =
              link.url === "/"
                ? pathname === "/"
                : pathname.startsWith(link.url);

            return (
              <li key={link.id}>
                <Link
                  className={`text-sm uppercase relative transition-all duration-300 ${
                    isActive
                      ? "text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-9px] after:w-[17px] after:h-[1px] after:bg-white"
                      : ""
                  }`}
                  href={link.url}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/">
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
          {navLinks?.rightLink?.map((link) => {
            const isActive =
              link.url === "/"
                ? pathname === "/"
                : pathname.startsWith(link.url);
            return (
              <li key={link.id}>
                <Link
                  className={`text-sm uppercase relative transition-all duration-300 ${
                    isActive
                      ? "text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-9px] after:w-[17px] after:h-[1px] after:bg-white"
                      : ""
                  }`}
                  href={link.url}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <RiMenu3Fill className="md:hidden " size={30} />
      </nav>
    </header>
  );
};

export default Navbar;
