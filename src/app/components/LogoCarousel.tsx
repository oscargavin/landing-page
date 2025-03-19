"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const logos = [
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-2.png",
  "/images/partner-1.png",
  "/images/partner-7.png",
  "/images/partner-6.png",
  "/images/partner-5.png",
];

const LogoCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div ref={ref} className="relative w-full overflow-hidden py-12">
        {/* Add a gradient overlay on both sides for a fade effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent"></div>

        <div
          className="flex whitespace-nowrap"
          style={{
            animation: inView ? "scroll 30s linear infinite" : "none",
            opacity: inView ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {/* First set of logos */}
          <div className="flex">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="mx-8 flex h-12 w-40 flex-shrink-0 items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Partner logo"
                  width={160}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set of logos for seamless looping */}
          <div className="flex">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="mx-8 flex h-12 w-40 flex-shrink-0 items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Partner logo"
                  width={160}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
