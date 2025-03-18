import Link from "next/link";
import React from "react";

const FillButton = ({ link, text }) => {
  return (
    <Link
      href={link}
      className="text-sm uppercase text-altermain px-9 py-4 bg-main text-center inline-block w-fit mt-2"
    >
      {text}
    </Link>
  );
};

export default FillButton;
