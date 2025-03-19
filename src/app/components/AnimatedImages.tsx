"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedImages() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State to track if initial animations are complete
  const [image1Ready, setImage1Ready] = useState(false);
  const [image2Ready, setImage2Ready] = useState(false);
  const [image3Ready, setImage3Ready] = useState(false);

  // Set images as ready after they become visible
  useEffect(() => {
    if (inView1) {
      const timer = setTimeout(() => setImage1Ready(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      const timer = setTimeout(() => setImage2Ready(true), 1400);
      return () => clearTimeout(timer);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      const timer = setTimeout(() => setImage3Ready(true), 1600);
      return () => clearTimeout(timer);
    }
  }, [inView3]);

  // Floating animation configurations
  const floatAnimation1 = {
    y: [0, -6, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
  };

  const floatAnimation2 = {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
  };

  const floatAnimation3 = {
    y: [0, -10, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative h-[500px]">
      {/* Warehouse shelving image */}
      <motion.div
        ref={ref1}
        className="absolute left-0 top-[40%] w-[70%] h-[60%] z-10"
        initial={{ y: 80, opacity: 0 }}
        animate={{
          y: inView1 ? 0 : 80,
          opacity: inView1 ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {image1Ready && (
          <motion.div className="w-full h-full" animate={floatAnimation1}>
            <Image
              src="/images/about-3.jpg"
              alt="Food distribution"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        )}
        {!image1Ready && (
          <Image
            src="/images/about-3.jpg"
            alt="Food distribution"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        )}
      </motion.div>

      {/* Yellow containers image */}
      <motion.div
        ref={ref2}
        className="absolute right-0 top-[20%] w-[60%] h-[50%] z-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: inView2 ? 0 : 100,
          opacity: inView2 ? 1 : 0,
        }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        {image2Ready && (
          <motion.div className="w-full h-full" animate={floatAnimation2}>
            <Image
              src="/images/about-2.jpg"
              alt="Warehouse operations"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        )}
        {!image2Ready && (
          <Image
            src="/images/about-2.jpg"
            alt="Warehouse operations"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        )}
      </motion.div>

      {/* Mushrooms image */}
      <motion.div
        ref={ref3}
        className="absolute right-[15%] top-0 w-[50%] h-[45%] z-30"
        initial={{ y: 120, opacity: 0 }}
        animate={{
          y: inView3 ? 0 : 120,
          opacity: inView3 ? 1 : 0,
        }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        {image3Ready && (
          <motion.div className="w-full h-full" animate={floatAnimation3}>
            <Image
              src="/images/about-1.jpg"
              alt="Wholesaler operations"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        )}
        {!image3Ready && (
          <Image
            src="/images/about-1.jpg"
            alt="Wholesaler operations"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        )}
      </motion.div>
    </div>
  );
}
