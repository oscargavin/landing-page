"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function CountAnimation({
  number,
  className,
}: {
  number: number;
  className: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, number, { duration: 2 });
      return animation.stop;
    }
  }, [count, number, inView]);

  return (
    <motion.h1 ref={ref} className={cn(className)}>
      {rounded}
    </motion.h1>
  );
}

export { CountAnimation };
