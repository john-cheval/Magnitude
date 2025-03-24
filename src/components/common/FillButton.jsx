import Link from "next/link";
import React from "react";

const FillButton = ({ link, text, dark = false }) => {
  return (
    <Link
      href={link}
      className={`text-sm uppercase px-9 py-4 transition-all duration-300 ease-in-out ${
        dark
          ? "bg-altermain text-main hover:bg-transparent hover:border hover:border-white"
          : "bg-main text-altermain hover:text-main hover:bg-transparent hover:border hover:border-white"
      } text-center inline-block w-fit mt-2`}
    >
      {text}
    </Link>
  );
};

export default FillButton;
