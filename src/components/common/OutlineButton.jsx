import Link from "next/link";
import React from "react";

function OutlineButton({ link, text }) {
  return (
    <Link
      href={link}
      className="text-xs uppercase py-4 px-11 border border-[#fff] inline-block text-center "
    >
      {text}
    </Link>
  );
}

export default OutlineButton;
