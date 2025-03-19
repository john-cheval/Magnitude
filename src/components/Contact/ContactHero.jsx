import React from "react";

function ContactHero() {
  return (
    <section className="h-screen overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/Contact/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full max-h-[288px] bg-contactTopGrad top-0 left-0 z-40" />
    </section>
  );
}

export default ContactHero;
