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
  const [initialAnimationsComplete, setInitialAnimationsComplete] =
    useState(false);

  // Set initial animations as complete after all images are in view
  useEffect(() => {
    if (inView1 && inView2 && inView3) {
      const timer = setTimeout(() => setInitialAnimationsComplete(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView1, inView2, inView3]);

  return (
    <div className="relative h-[500px] md:h-[500px] w-full overflow-visible">
      {/* Warehouse shelving image */}
      <motion.div
        ref={ref1}
        className="absolute left-0 top-[40%] w-[65%] md:w-[70%] h-[50%] md:h-[60%] z-10"
        initial={{ y: 80, opacity: 0 }}
        animate={{
          y: inView1 ? 0 : 80,
          opacity: inView1 ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/about-3.jpg"
          alt="Food distribution"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Yellow containers image */}
      <motion.div
        ref={ref2}
        className="absolute right-0 top-[20%] w-[55%] md:w-[60%] h-[45%] md:h-[50%] z-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: inView2 ? 0 : 100,
          opacity: inView2 ? 1 : 0,
        }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <Image
          src="/images/about-2.jpg"
          alt="Warehouse operations"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Mushrooms image */}
      <motion.div
        ref={ref3}
        className="absolute right-[35%] top-0 w-[45%] md:w-[50%] h-[40%] md:h-[45%] z-30"
        initial={{ y: 120, opacity: 0 }}
        animate={{
          y: inView3 ? 0 : 120,
          opacity: inView3 ? 1 : 0,
        }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/images/about-1.jpg"
          alt="Wholesaler operations"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
    </div>
  );
}
