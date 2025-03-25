import React from "react";

function ContactHero({ bannerVideo }) {
  return (
    <section className=" overflow-hidden relative pt-16 md:pt-0">
      <video
        autoPlay
        loop
        muted
        playsInline 
        preload="auto"
        poster={"/Contact.png"}
        className="w-full md:h-full object-cover h-[275px] md:max-h-[288px]--"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="absolute w-full h-[250px] md:h-full hidden md:block md:max-h-[288px] bg-contactTopGrad top-0 left-0 z-40" />
    </section>
  );
}

export default ContactHero;
