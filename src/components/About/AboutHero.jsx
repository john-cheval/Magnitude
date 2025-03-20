import React from "react";
import Image from "next/image";

const AboutHero = ({ banner, heading, list }) => {
  return (
    <section className="relative">
      <Image
        src={banner}
        alt="hero"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-cover max-h-[400px]"
      />
      <div className="absolute w-full h-full max-h-[288px] bg-homeHero2 top-0 left-0 z-40" />

      <div className="containers -mt-36">
        <h1 className="main-heading mb-8">{heading}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {list?.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <>
                  <div>
                    <Image
                      src={item.image}
                      alt={`about-${index}`}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div className="bg-altermain lg:pl-[59px] lg:pr-20 px-14 py-16 space-y-6">
                    <h2 className="main-heading2">{item.title}</h2>
                    <span className="seperator"></span>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#1D2025] lg:pl-[59px] lg:pr-20 px-14 py-16 space-y-6">
                    <h2 className="main-heading2">{item.title}</h2>
                    <span className="seperator"></span>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                  <div>
                    <Image
                      src={item.image}
                      alt={`about-${index}`}
                      width={0}
                      height={0}
                      className="w-full h-full max-w-[553px]-- object-cover"
                      sizes="100vw"
                    />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
