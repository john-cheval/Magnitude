import React from "react";
import Logo from "../../../public/Home/Logo.svg";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-red-500 pt-12">
      <nav className="flex justify-between ">
        <ul className="flex  items-center gap-x-10">
          {navLinks?.leftLink?.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
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

        <ul className="flex  items-center gap-x-10">
          {navLinks?.rightLink?.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
