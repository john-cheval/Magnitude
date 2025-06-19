"use client";
import React, { memo, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Locations = ({mapImage}) => {
  const MapComponent = memo(() => (
    <iframe
      src="https://snazzymaps.com/embed/693860"
      title="Magnitude"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className=" max-w-[350px]-- xl:w-full-- w-full h-[400px]     border-none  "
    ></iframe>
  ));

  return (
    <section className="bg-altermain containers space-y-6 pt-4 md:pt-8">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="main-heading2  !text-center  mb-8 md:mb-0"
      >
        Our Locations
      </motion.h3>

      {mapImage ? (<motion.div initial={{ opacity: 0, scale: 0.8 }}
 whileInView={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
 viewport={{ once: true, amount: 0.2 }}>
        <Image src={mapImage} alt="MagnitudeLocation" width={1000} height={400} className="w-full h-full object-cover "/>
      </motion.div>):(
 <motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
 viewport={{ once: true, amount: 0.2 }}
>
 <Suspense
   fallback={
     <div className="w-full h-[400px] bg-gray-200 mx-auto-- mt-7--" />
   }
 >
   <MapComponent />
 </Suspense>
</motion.div>
      )}

     
    </section>
  );
};

export default Locations;
