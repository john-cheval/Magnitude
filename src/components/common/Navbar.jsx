"use client";
import React from "react";
import Logo from "../../../public/Home/Logo.svg";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-navBg pt-12 pb-8 px-10 md:px-16 lg:px-[52px]">
      <nav className="flex justify-between items-center">
        <ul className="md:flex items-center gap-x-10 hidden ">
          {navLinks?.leftLink?.map((link) => {
            const isActive = pathname === link.url;
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
            const isActive = pathname === link.url;
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

        <IoMdMenu className="md:hidden " size={30} />
      </nav>
    </header>
  );
};

export default Navbar;
