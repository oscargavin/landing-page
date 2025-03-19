"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    logo: "/images/trevors-logo.png",
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
    logo: "/images/j&r.png",
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
    avatar: "/images/j&r.png",
    name: "Yan Whitechurch, Managing Director",
    company: "J&R Foodservice",
  },
  {
    logo: "/images/zooki.png",
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

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
      {/* Current slide */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:gap-10">
          {/* Logo container - fixed dimensions and proper squircle */}
          <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-white rounded-[16px] flex items-center justify-center mx-auto md:mx-0 mb-8 md:mb-0 border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
            <div className="w-full h-full p-2 flex items-center justify-center">
              <Image
                src={testimonials[activeIndex].logo}
                alt={`${testimonials[activeIndex].company} logo`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Quote content with proper text styling */}
          <div className="text-white text-left">
            <p className="font-inter text-xl md:text-2xl leading-[125%]">
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

            {/* Avatar and name section - positioned correctly */}
            <div className="flex items-center mt-8">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
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
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-16">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 mx-1.5 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#FF7C7C]" : "bg-gray-500 opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
