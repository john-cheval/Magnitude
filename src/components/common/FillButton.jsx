import Link from "next/link";
import React from "react";

const FillButton = ({ link, text, dark = false }) => {
  return (
    <Link
      href={link}
      className={`text-xs sm:text-sm uppercase px-7 md:px-9 py-3 md:py-4 transition-all duration-300 border ease-in-out ${
        dark
          ? "bg-altermain text-main hover:bg-transparent  hover:border-altermain hover:text-altermain"
          : "bg-main text-altermain hover:text-main hover:bg-transparent  hover:border-white"
      } text-center inline-block w-fit mt-2--`}
    >
      {text}
    </Link>
  );
};

export default FillButton;
