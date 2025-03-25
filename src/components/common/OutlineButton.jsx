import Link from "next/link";
import React from "react";

function OutlineButton({ link, text }) {
  return (
    <Link
      href={link}
      className="relative inline-block text-xs md:text-sm  uppercase py-3 px-7 md:py-4 md:px-11 border border-white text-white text-center transition-all duration-300 ease-in-out 
      before:absolute before:inset-0 before:bg-main before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out 
      hover:text-altermain hover:before:scale-x-100"
    >
      <span className="relative z-10">{text}</span>
    </Link>
  );
}

export default OutlineButton;
