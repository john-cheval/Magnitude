import Link from "next/link";
import React from "react";

const FillButton = ({ link, text, dark = false }) => {
  return (
    <Link
      href={link}
      className={`text-sm uppercase  px-9 py-4 ${
        dark ? "bg-altermain text-main" : "bg-main text-altermain"
      } text-center inline-block w-fit mt-2`}
    >
      {text}
    </Link>
  );
};

export default FillButton;
