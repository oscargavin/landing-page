"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    logo: "/images/partner-1.png",
    text: {
      start: '"',
      bold1: "OpenInfo have been great",
      middle:
        " so far and simple to implement due to their Lady Lodge integration. ",
      bold2: "AI is going to be a priority",
      end: " across multiple areas of our business going forward - Tom and Noah are the ",
      bold3: "right partners",
      closing: ' for that."',
    },
    avatar: "/images/guy1.png",
    name: "Matthew Hitchen, Commercial Director",
    company: "Trevors Foodservice",
  },
  {
    logo: "/images/partner-7.png",
    text: {
      start: '"The launch has been ',
      bold1: "very successful",
      middle:
        ", and the team at OpenInfo have been impressive in implementing the process. Their ",
      bold2: "expertise in AI",
      end: " has made this transition seamless, and we're ",
      bold3: "already seeing the benefits",
      closing:
        '. AI will be a priority in the coming weeks, and OpenInfo are the right partner for that."',
    },
    avatar: "/images/partner-7.png",
    name: "Yan Whitechurch, Managing Director",
    company: "J&R Foodservice",
  },
  {
    logo: "/images/partner-4.png",
    text: {
      start: '"OpenInfo have been ',
      bold1: "great to work with",
      middle: ". Their order processing has ",
      bold2: "save 100s of hours of manual work",
      end: " every month. It also means we can take orders however our customers like to send them and won't have to ",
      bold3: "reject orders",
      closing: ' as we did in the past."',
    },
    avatar: "/images/jack.png",
    name: "Jack Morrison, CEO",
    company: "Zooki",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Direction state for animation
  const [direction, setDirection] = useState(0);

  // Auto-rotation reference to pause during swipe
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // Check if we're on mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    setDirection(1);
    setActiveIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    setDirection(-1);
    setActiveIndex(prevIndex);
  };

  // Handle swipe gestures
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // Resume auto-rotation after swipe finishes
    if (autoRotateRef.current === null) {
      setupAutoRotation();
    }

    const swipeThreshold = 50; // Minimum distance to recognize as a swipe

    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous slide
      goToPrevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next slide
      goToNextSlide();
    }
  };

  // Setup auto-rotation with ref for pausing
  const setupAutoRotation = () => {
    autoRotateRef.current = setInterval(() => {
      goToNextSlide();
    }, 7000);

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    };
  };

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const cleanup = setupAutoRotation();
    return cleanup;
  }, [activeIndex]);

  // Pause auto-rotation during swipe
  const handleDragStart = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  // Slide animation variants - reduced distance for mobile
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isMobile ? 300 : 800) : isMobile ? -300 : -800,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? (isMobile ? -300 : -800) : isMobile ? 300 : 800,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Fixed height container to prevent layout shifts */}
      <div className="max-w-4xl mx-auto relative pb-12">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {/* Mobile Layout - Stacked with fixed height */}
            <div className="flex flex-col items-center h-[500px] md:hidden">
              {/* Logo container for mobile */}
              <div className="w-[110px] h-[110px] bg-white rounded-2xl flex items-center justify-center mb-6 border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
                <div className="w-full h-full p-3 flex items-center justify-center">
                  <Image
                    src={testimonials[activeIndex].logo}
                    alt={`${testimonials[activeIndex].company} logo`}
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Quote content for mobile */}
              <div className="text-white px-8 text-left flex flex-col justify-between h-[280px]">
                <p className="font-inter text-xl sm:text-2xl leading-[1.4]">
                  {testimonials[activeIndex].text.start}
                  <span className="font-bold">
                    {testimonials[activeIndex].text.bold1}
                  </span>
                  {testimonials[activeIndex].text.middle}
                  <span className="font-bold">
                    {testimonials[activeIndex].text.bold2}
                  </span>
                  {testimonials[activeIndex].text.end}
                  <span className="font-bold">
                    {testimonials[activeIndex].text.bold3}
                  </span>
                  {testimonials[activeIndex].text.closing}
                </p>

                {/* Avatar and name section for mobile - positioned at bottom */}
                <div className="flex items-center justify-center mt-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-white">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-normal text-sm">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-white font-semibold text-base">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Side-by-side with fixed height */}
            <div className="hidden md:flex md:flex-row md:items-start md:gap-10 lg:gap-12 h-[280px] lg:h-[300px]">
              {/* Logo container for desktop - left aligned */}
              <div className="w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] bg-white rounded-[20px] flex items-center justify-center border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
                <div className="w-full h-full p-3 flex items-center justify-center">
                  <Image
                    src={testimonials[activeIndex].logo}
                    alt={`${testimonials[activeIndex].company} logo`}
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Quote content and avatar for desktop - text left-aligned with flex-col */}
              <div className="text-white text-left flex-1 flex flex-col justify-between h-full">
                <div>
                  <p className="font-inter text-2xl lg:text-3xl leading-[1.4]">
                    {testimonials[activeIndex].text.start}
                    <span className="font-bold">
                      {testimonials[activeIndex].text.bold1}
                    </span>
                    {testimonials[activeIndex].text.middle}
                    <span className="font-bold">
                      {testimonials[activeIndex].text.bold2}
                    </span>
                    {testimonials[activeIndex].text.end}
                    <span className="font-bold">
                      {testimonials[activeIndex].text.bold3}
                    </span>
                    {testimonials[activeIndex].text.closing}
                  </p>
                </div>

                {/* Avatar and name section for desktop - fixed at bottom */}
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-white">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-normal text-base">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-white font-semibold text-lg">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mb-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 mx-2 rounded-full transition-colors cursor-pointer ${
              index === activeIndex
                ? "bg-[#FF7C7C]"
                : "bg-gray-500 opacity-50 hover:opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
