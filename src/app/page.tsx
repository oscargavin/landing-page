import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import Carousel from "./components/Carousel";
import LogoCarousel from "./components/LogoCarousel";
import AnimatedImages from "./components/AnimatedImages";
import { CountAnimation } from "@/components/ui/count-animation";

export const metadata: Metadata = {
  title: "OpenInfo - AI for Food & Drink Wholesalers",
  description: "Automation solutions that work for you",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background circular pattern */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ bottom: "auto", height: "140vh" }}
      >
        <Image
          src="/images/bg_circular_lines.svg"
          alt="Background pattern"
          fill
          className="object-cover opacity-90"
          style={{ objectPosition: "center top", background: "transparent" }}
          priority
        />
      </div>

      {/* Second background circular pattern */}
      <div
        className="absolute z-0 overflow-hidden"
        style={{ top: "180vh", left: 0, right: 0, height: "140vh" }}
      >
        <Image
          src="/images/bg_circular_lines.svg"
          alt="Background pattern"
          fill
          className="object-cover opacity-70"
          style={{ objectPosition: "center", background: "transparent" }}
        />
      </div>

      {/* Header/Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b border-[#E8E6E2] fixed w-full z-50 shadow-sm">
        <div className="flex items-center">
          <Link href="/" className="text-[#22263B]">
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="OpenInfo Logo"
                width={28}
                height={28}
                className="mr-2"
              />
              <Image
                src="/images/name-logo.svg"
                alt="OpenInfo Logo"
                width={100}
                height={28}
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#product"
            className="text-base font-medium text-[#22263B] hover:text-[#FF7C7C] transition-colors"
          >
            Product
          </Link>
          <Link
            href="#about"
            className="text-base font-medium text-[#22263B] hover:text-[#FF7C7C] transition-colors"
          >
            About us
          </Link>
          <Link
            href="#login"
            className="text-base font-medium text-[#22263B] hover:text-[#FF7C7C] transition-colors"
          >
            Login
          </Link>
          <Link
            href="https://calendly.com/tom-morrison-openinfo/30min?month=2025-03"
            target="_blank"
            className="py-2.5 px-6 rounded-full text-base font-medium text-white bg-gradient-to-br from-[#22263B] to-[#FF7C7C] hover:shadow-md transition-all"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile menu button (only shown on small screens) */}
        <div className="md:hidden">
          <button className="flex items-center p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                fill="#22263B"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-64 pb-16 px-4 sm:px-6 md:px-12 relative z-10 w-full">
        <div className="text-center w-full">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold text-[#22263B] leading-tight mb-[42px] font-inter">
            Automation solutions that
            <br />
            work for you
          </h1>

          <span className="text-[#22263B] text-xl font-semibold uppercase tracking-widest mb-[77px] block">
            THE TRUSTED AI PARTNER FOR FOOD AND DRINK WHOLESALERS
          </span>

          <div className="mb-12 flex justify-center">
            <Link
              href="https://calendly.com/tom-morrison-openinfo/30min?month=2025-03"
              target="_blank"
              className="flex items-center justify-center gap-2 px-6 py-3 mb-[67px] rounded-full bg-gradient-to-br from-[#22263B] to-[#FF7C7C] text-white hover:opacity-90 transition-opacity"
            >
              <span>Let's chat</span>
              <div className="bg-white/20 p-1 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 16l4-4-4-4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Partner logos */}
        <div className="w-full mx-auto">
          <LogoCarousel />
        </div>
      </section>

      {/* Success Stories Section (Carousel) */}
      <section
        className="py-16 px-4 sm:px-6 md:px-8 relative z-10 mb-16 w-full"
        id="success-stories"
      >
        <div className="bg-[#22263B] rounded-2xl py-20 relative w-full">
          <span className="text-[#FF7C7C] text-sm font-bold uppercase tracking-widest mb-16 block text-center">
            SUCCESS STORIES
          </span>

          {/* Carousel component */}
          <Carousel />
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        className="py-20 px-4 sm:px-12 lg:px-24 relative z-10 w-full"
        id="about"
      >
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF7C7C] text-2xl font-bold uppercase tracking-widest mb-16 block">
            WHO WE ARE
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 pr-0 lg:pr-12">
              <p className="text-xl text-[#22263B] leading-relaxed mb-12">
                We're based in London and work with wholesalers across the UK to
                help them implement AI into their business.
              </p>
              <p className="text-xl text-[#22263B] leading-relaxed mb-12">
                We take a people-first approach to AI. We work closely with your
                team to understand your existing workflows and avoid disruption
                to the way you like to do business.
              </p>
              <p className="text-xl text-[#22263B] leading-relaxed">
                AI has the potential to transform all areas of your operation,
                but people will always remain at the heart of great businesses.
              </p>
            </div>

            <div className="order-1 lg:order-2 mb-10 lg:mb-0 -mt-32">
              <AnimatedImages />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        className="relative z-10 bg-gradient-to-b from-[#F5F5F5] via-[#FAFAFA] to-white"
        id="product"
      >
        {/* What We Do Header */}
        <div className="py-16 min-h-[800px] flex items-center">
          <div className="px-8 sm:px-12 lg:px-24 max-w-7xl mx-auto relative w-full">
            <span className="text-[#FF7C7C] text-lg font-bold uppercase tracking-widest mb-16 block">
              WHAT WE DO
            </span>
            <div className="flex justify-between items-start">
              <h2 className="text-3xl md:text-8xl text-[#22263B] leading-tight">
                Workflow automation
                <br />
                platform
              </h2>
              <div className="relative h-96 w-full">
                <div className="absolute top-0 right-60 z-30 transform hover:-translate-y-2 transition-transform duration-300">
                  <svg
                    width="109"
                    height="74"
                    viewBox="0 0 109 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <foreignObject
                      x="-128.469"
                      y="-128.469"
                      width="365.937"
                      height="330.937"
                    >
                      <div
                        style={{
                          backdropFilter: "blur(64.23px)",
                          clipPath: "url(#bgblur_0_13788_7508_clip_path)",
                          height: "100%",
                          width: "100%",
                        }}
                      ></div>
                    </foreignObject>
                    <rect
                      data-figma-bg-blur-radius="128.469"
                      x="0.5"
                      y="0.5"
                      width="73"
                      height="108"
                      rx="36.5"
                      transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 109 74)"
                      stroke="#FF7C7C"
                    />
                    <path
                      d="M57.1578 35.3531C56.4047 34.514 55.6625 33.5765 54.9938 32.7343C54.6781 32.3359 54.3766 31.9562 54.0938 31.6109L54.0734 31.5859C54.4875 30.4078 54.7234 29.4437 54.7766 28.7203C54.9109 26.8765 54.7047 25.6875 54.1469 25.089C53.7703 24.6843 53.2047 24.5421 52.6735 24.7218C52.2922 24.85 51.7766 25.1922 51.4828 26.0953C51.0437 27.4421 51.2563 29.8265 52.5047 31.7984C51.9469 33.2578 51.1703 34.9344 50.3125 36.5312C48.6782 37.1047 47.3766 37.8578 46.4406 38.7703C45.2188 39.9625 44.7235 41.1453 45.0782 42.0156C45.2969 42.5547 45.8032 42.8765 46.4313 42.8765C46.8688 42.8765 47.3422 42.7187 47.8 42.4203C48.9563 41.664 50.4657 39.1453 51.2766 37.6859C52.9516 37.1625 54.6062 36.9484 55.447 36.8671C55.8266 36.8296 56.2048 36.8015 56.5688 36.7812C58.0407 38.3359 59.2438 39.1546 60.3532 39.3593C60.5766 39.4015 60.8001 39.4218 61.0173 39.4218C61.9204 39.4218 62.6673 39.0609 63.0157 38.4577C63.2782 38.0015 63.2735 37.4702 63.0016 36.9984C62.386 35.9328 60.5298 35.3468 57.7737 35.3468C57.5752 35.3437 57.3703 35.3468 57.1578 35.3531ZM47.0331 41.245C46.8143 41.3872 46.5893 41.4732 46.4315 41.4732C46.4018 41.4732 46.3815 41.47 46.369 41.4669C46.3409 41.3278 46.4409 40.7232 47.419 39.7685C47.8784 39.32 48.4596 38.9107 49.1471 38.5482C48.2784 39.9435 47.4987 40.9419 47.0331 41.245ZM52.8126 26.5279C52.9142 26.2154 53.0408 26.0748 53.1205 26.0482C53.122 26.0482 53.1236 26.0467 53.1251 26.0467C53.2017 26.1326 53.5236 26.6217 53.3798 28.6185C53.3548 28.967 53.2705 29.4076 53.1267 29.931C52.6595 28.7279 52.5298 27.3904 52.8126 26.5279ZM55.3126 35.4715C54.5673 35.5433 53.433 35.6902 52.1673 35.9902C52.658 35.0105 53.1126 34.0168 53.4923 33.0965C53.6236 33.2605 53.7579 33.4308 53.8954 33.6043C54.3532 34.1808 54.8673 34.8308 55.4017 35.4636L55.3126 35.4715ZM61.7878 37.6949C61.8081 37.7308 61.8081 37.7449 61.8034 37.7543C61.7441 37.8558 61.4784 38.0183 61.0159 38.0183C60.8862 38.0183 60.7487 38.0058 60.6066 37.9793C60.0284 37.873 59.355 37.473 58.5519 36.7605C60.7316 36.8652 61.6112 37.3902 61.7878 37.6949Z"
                      fill="#22263B"
                    />
                    <path
                      d="M60.125 19H42.0127C40.9033 19 40.0002 19.9 40.0002 21.0125V52.9875C40.0002 54.0984 40.9017 55 42.0127 55H66.1609C67.2734 55 68.1734 54.0984 68.1734 52.9875V27.05L60.125 19ZM60.125 21.8453L65.3298 27.0501H60.125V21.8453ZM66.1625 52.9872H42.0127V21.0121H58.1126V27.0497C58.1126 28.1606 59.0126 29.0622 60.1251 29.0622H66.1626L66.1625 52.9872Z"
                      fill="#22263B"
                    />
                    <path
                      d="M50.7625 44.7418C50.5984 44.5965 50.4016 44.4902 50.1766 44.4293C49.9547 44.3668 49.6391 44.334 49.2344 44.334H47.8953C47.6406 44.334 47.4484 44.3918 47.3234 44.509C47.1984 44.6262 47.1328 44.8168 47.1328 45.0746V49.048C47.1328 49.2793 47.1906 49.459 47.3031 49.584C47.4172 49.7121 47.5703 49.7777 47.7578 49.7777C47.9359 49.7777 48.0859 49.7121 48.2047 49.584C48.3203 49.4574 48.3781 49.2746 48.3781 49.0418V47.6824H49.2344C49.8953 47.6824 50.4031 47.5387 50.7437 47.2527C51.089 46.9637 51.2656 46.5371 51.2656 45.9824C51.2656 45.7246 51.2234 45.4887 51.139 45.2809C51.0531 45.0684 50.9281 44.8887 50.7625 44.7418ZM49.8969 46.4027C49.8219 46.5043 49.7156 46.5746 49.5703 46.6199C49.4156 46.6683 49.2187 46.6933 48.9828 46.6933H48.3797V45.3183H48.9828C49.5265 45.3183 49.7469 45.4261 49.8343 45.5152C49.9515 45.6402 50.0078 45.7996 50.0078 46.0027C50.0078 46.1684 49.9703 46.3043 49.8969 46.4027Z"
                      fill="#22263B"
                    />
                    <path
                      d="M55.7112 44.8262C55.494 44.6355 55.2487 44.5043 54.9815 44.4355C54.7221 44.3684 54.4065 44.334 54.0456 44.334H52.6847C52.4331 44.334 52.2456 44.3949 52.1253 44.5137C52.005 44.634 51.9456 44.8215 51.9456 45.073V48.8527C51.9456 49.0293 51.9612 49.1714 51.9925 49.2855C52.0284 49.4152 52.1066 49.5167 52.2253 49.5871C52.3378 49.6558 52.4956 49.6886 52.705 49.6886H54.0659C54.3065 49.6886 54.5268 49.673 54.7206 49.6417C54.9174 49.6105 55.1049 49.5542 55.2753 49.4761C55.4487 49.398 55.6096 49.2902 55.7549 49.1605C55.9377 48.9917 56.0909 48.7996 56.208 48.5855C56.3237 48.373 56.4127 48.1308 56.4674 47.8667C56.5221 47.6058 56.5502 47.3136 56.5502 46.998C56.5502 46.0323 56.2674 45.3027 55.7112 44.8262ZM54.8018 48.4402C54.7346 48.4996 54.6534 48.5465 54.5596 48.5793C54.4628 48.6137 54.3674 48.6355 54.2784 48.6434C54.1831 48.6527 54.0503 48.6574 53.8799 48.6574H53.1893V45.359H53.7784C54.0862 45.359 54.3518 45.3934 54.5643 45.459C54.7643 45.5199 54.9362 45.6668 55.0752 45.8981C55.219 46.134 55.2908 46.5012 55.2908 46.9887C55.2924 47.6778 55.1284 48.1652 54.8018 48.4402Z"
                      fill="#22263B"
                    />
                    <path
                      d="M60.4468 44.3342H57.9859C57.8218 44.3342 57.689 44.3592 57.5797 44.4092C57.4641 44.4624 57.3766 44.5483 57.3219 44.6655C57.2703 44.7749 57.2453 44.9092 57.2453 45.0749V49.0405C57.2453 49.2795 57.3031 49.4623 57.4172 49.5858C57.5328 49.7124 57.6859 49.7764 57.8687 49.7764C58.0484 49.7764 58.1984 49.7139 58.3172 49.5873C58.4312 49.4639 58.489 49.2795 58.489 49.0389V47.4405H60.1078C60.289 47.4405 60.4312 47.3967 60.5297 47.3108C60.6312 47.2202 60.6828 47.0999 60.6828 46.9514C60.6828 46.803 60.6328 46.6811 60.5328 46.592C60.4359 46.503 60.2922 46.4577 60.1078 46.4577H58.4891V45.3389H60.4453C60.6375 45.3389 60.7843 45.2936 60.8844 45.2014C60.9859 45.1092 61.0375 44.9858 61.0375 44.8342C61.0375 44.6874 60.9859 44.5639 60.8828 44.4702C60.7844 44.3795 60.6374 44.3342 60.4468 44.3342Z"
                      fill="#22263B"
                    />
                    <defs>
                      <clipPath
                        id="bgblur_0_13788_7508_clip_path"
                        transform="translate(128.469 128.469)"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="73"
                          height="108"
                          rx="36.5"
                          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 109 74)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="absolute top-32 right-8 z-20 transform hover:-translate-y-2 transition-transform duration-300">
                  <svg
                    width="113"
                    height="74"
                    viewBox="0 0 113 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <foreignObject
                      x="-128.469"
                      y="-128.469"
                      width="369.937"
                      height="330.937"
                    >
                      <div
                        style={{
                          backdropFilter: "blur(64.23px)",
                          clipPath: "url(#bgblur_0_13788_7517_clip_path)",
                          height: "100%",
                          width: "100%",
                        }}
                      ></div>
                    </foreignObject>
                    <rect
                      data-figma-bg-blur-radius="128.469"
                      x="0.5"
                      y="-0.5"
                      width="112"
                      height="73"
                      rx="36.5"
                      transform="matrix(-1 0 0 1 113 1)"
                      stroke="#FF7C7C"
                    />
                    <path
                      d="M71.2942 29.4289H71.0668L71.2942 29.3969C71.264 29.1696 71.1627 28.9583 71.0029 28.7931L61.5418 19.3357C61.4885 19.2824 61.4317 19.2344 61.3678 19.1954L61.3216 19.1687L61.3234 19.1669C61.2736 19.1368 61.2239 19.1101 61.1724 19.0852L61.0907 19.0622C61.0481 19.0444 61.0037 19.0302 60.9593 19.0213C60.8865 19.0071 60.8119 19 60.7355 19H45.5507C44.9237 19 44.414 19.5079 44.414 20.1367V32.3575C44.414 32.9845 44.9237 33.4942 45.5507 33.4942C46.1794 33.4942 46.6873 32.9845 46.6873 32.3575V21.2856H59.5988V29.5336C59.6024 30.1588 60.1068 30.665 60.7319 30.6703L69.035 30.7165L69.0332 52.7267H46.6874V50.9667C46.6874 50.3379 46.1795 49.83 45.5508 49.83C44.9239 49.83 44.4141 50.3379 44.4141 50.9667V53.8633C44.4141 54.1635 44.5349 54.453 44.748 54.6661C44.9611 54.8792 45.2489 55 45.5508 55H70.1699C70.4718 55 70.7613 54.8792 70.9744 54.6661C71.1875 54.453 71.3065 54.1635 71.3065 53.8633V29.5834C71.3065 29.5319 71.303 29.4804 71.2942 29.4289ZM61.8722 28.4024V22.895L67.4118 28.4292L61.8722 28.4024Z"
                      fill="#22263B"
                    />
                    <path
                      d="M65.0917 34.8586H42.1367C41.5079 34.8586 41 35.3666 41 35.9953V47.33C41 47.632 41.119 47.9197 41.3321 48.1328C41.5452 48.3459 41.8347 48.4667 42.1366 48.4667H65.0917C65.3936 48.4667 65.6813 48.3459 65.8962 48.1328C66.1093 47.9197 66.2283 47.6319 66.2283 47.33V35.9953C66.2283 35.6934 66.1093 35.4039 65.8962 35.1908C65.6813 34.9777 65.3936 34.8586 65.0917 34.8586ZM49.7377 44.9253V44.8845L48.633 42.8243L47.4786 44.9254H45.937L47.8107 41.8066L45.9405 38.4322H47.5496L47.5727 38.4784L48.6774 40.67L49.8283 38.4322H51.3468L49.473 41.7462L51.3503 44.9289L49.7377 44.9253ZM55.6483 44.9253H51.9062V38.4323H53.3484L53.3466 43.6291H55.6697L55.6483 44.9253ZM59.8398 44.5062C59.378 44.8738 58.799 45.0639 58.2076 45.039C57.5949 45.0248 56.9857 44.9484 56.389 44.8117L55.984 44.7335L56.1332 43.5827H56.2114C56.8419 43.6768 57.4759 43.7336 58.1117 43.7514C58.7263 43.7514 59.0211 43.5063 59.0211 43.0108C59.0424 42.8634 58.9891 42.716 58.8808 42.6148C58.5966 42.4531 58.2911 42.3359 57.9714 42.2649C57.4013 42.137 56.8667 41.8813 56.4121 41.5154C56.0942 41.1851 55.929 40.7358 55.9574 40.2775C55.9166 39.7163 56.1421 39.1693 56.5666 38.7998C57.039 38.4571 57.6162 38.2866 58.1987 38.3185C58.7919 38.3292 59.3851 38.3914 59.9676 38.505L60.3761 38.5832L60.2447 39.75H60.163C59.2945 39.6541 58.6711 39.6044 58.3177 39.6044C57.3817 39.6044 57.3817 40.0591 57.3817 40.1958H57.3799C57.3799 40.3539 57.4616 40.4995 57.5948 40.583C57.966 40.773 58.3568 40.924 58.7582 41.0376C59.2483 41.1655 59.7048 41.4035 60.0902 41.7338C60.5123 42.0695 60.706 42.5064 60.6816 42.9469C60.7075 43.5347 60.5153 44.1066 60.1599 44.5062L59.8398 44.5062Z"
                      fill="#22263B"
                    />
                    <defs>
                      <clipPath
                        id="bgblur_0_13788_7517_clip_path"
                        transform="translate(128.469 128.469)"
                      >
                        <rect
                          x="0.5"
                          y="-0.5"
                          width="112"
                          height="73"
                          rx="36.5"
                          transform="matrix(-1 0 0 1 113 1)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="absolute top-64 right-32 z-10 transform hover:-translate-y-2 transition-transform duration-300">
                  <svg
                    width="121"
                    height="74"
                    viewBox="0 0 121 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <foreignObject
                      x="-128.469"
                      y="-128.469"
                      width="377.937"
                      height="330.937"
                    >
                      <div
                        style={{
                          backdropFilter: "blur(64.23px)",
                          clipPath: "url(#bgblur_0_13788_7523_clip_path)",
                          height: "100%",
                          width: "100%",
                        }}
                      ></div>
                    </foreignObject>
                    <rect
                      data-figma-bg-blur-radius="128.469"
                      x="0.5"
                      y="0.5"
                      width="120"
                      height="73"
                      rx="36.5"
                      stroke="#FF7C7C"
                    />
                    <path
                      d="M59.5499 23.97C59.5499 23.8083 59.4843 23.6528 59.3699 23.5383C59.2555 23.4239 59.1015 23.3599 58.9397 23.3599H49.787C49.4499 23.3599 49.1769 23.6329 49.1769 23.97V38.6203C49.1769 38.782 49.2409 38.9376 49.3554 39.052C49.4698 39.1664 49.6254 39.2305 49.7871 39.2305H67.2837C67.4454 39.2305 67.5995 39.1664 67.7139 39.052C67.8283 38.9376 67.8939 38.782 67.8939 38.6203V31.2952C67.8939 31.1335 67.8283 30.9779 67.7139 30.8635C67.5995 30.749 67.4454 30.685 67.2837 30.685H59.5497L59.5499 23.97ZM58.3296 38.0099H50.3976V35.5693H58.3296V38.0099ZM58.3296 34.3489H50.3976V31.9083H58.3296V34.3489ZM58.3296 30.6879H50.3976V28.2473H58.3296V30.6879ZM58.3296 27.0269H50.3976V24.5863H58.3296V30.6879ZM66.6736 38.0099H59.5499V35.5693H66.6736V38.0099ZM66.6736 31.9051V34.3458H59.5499V31.9051H66.6736Z"
                      fill="#22263B"
                    />
                    <path
                      d="M71.9575 44.1205V28.0762L62.8813 19H47.5508C46.2024 19 45.1102 20.0922 45.1102 21.4407V42.0294C44.7334 42.2444 44.5015 42.6456 44.5 43.0804V51.9492C44.5015 53.6332 45.8668 54.9985 47.5508 55H69.5168C71.2009 54.9985 72.5661 53.6332 72.5677 51.9492V45.1719C72.5661 44.7372 72.3343 44.3371 71.9575 44.1205ZM56.0932 51.5921C55.9711 51.769 55.8186 51.9231 55.6432 52.0467C55.2649 52.2999 54.8164 52.4265 54.3619 52.4082C54.0019 52.4189 53.6449 52.338 53.3246 52.1733C53.05 52.0253 52.8166 51.8087 52.6473 51.5479C52.4719 51.2748 52.3483 50.9712 52.2812 50.6539C52.1317 50.9675 52.1317 50.2582 52.2812 48.5718C52.3483 48.2514 52.4749 47.9478 52.6519 47.6748C52.8242 47.4124 53.0592 47.1973 53.3337 47.0478C53.6541 46.8831 54.011 46.8023 54.371 46.8145C54.7829 46.8053 55.1871 46.9121 55.5425 47.1195C55.724 47.2294 55.8751 47.3819 55.9864 47.5634C56.1298 47.8029 56.2396 48.0607 56.3129 48.3307L55.2435 48.587C55.1764 48.381 55.0651 48.1919 54.9201 48.0317C54.7661 47.8776 54.5525 47.7968 54.3344 47.812C54.2001 47.809 54.069 47.841 53.95 47.9036C53.8417 47.9646 53.7486 48.047 53.6754 48.1476C53.6007 48.2529 53.5396 48.3688 53.4969 48.4909C53.4496 48.619 53.4146 48.7517 53.3901 48.8859C53.3657 49.0186 53.3505 49.1529 53.3429 49.2886C53.3368 49.4213 53.3322 49.5418 53.3322 49.6501C53.3047 49.9078 53.3932 50.3639 53.5885 50.7788C53.7379 51.064 54.0415 51.2364 54.3634 51.2135C54.4869 51.2166 54.6105 51.1952 54.7264 51.1525C54.8241 51.1159 54.9125 51.0595 54.9873 51.0878C55.0635 51.013 55.1291 50.9276 55.1841 50.8361C55.2466 50.7308 55.303 50.624 55.3518 50.5127L56.4501 50.7979V50.7995C56.3601 51.0435 56.2396 51.277 56.0932 51.4921ZM60.1599 51.9826C59.748 52.2892 59.2401 52.4417 58.726 52.4097C58.3187 52.4082 57.9191 52.2999 57.5667 52.0955C57.3699 51.9902 57.1929 51.8499 57.0465 51.6821C56.8848 51.4869 56.7536 51.2687 56.6606 51.0338L57.6368 50.6066C57.6918 50.7272 57.7558 50.8431 57.826 50.9544C57.8916 51.0551 57.9694 51.1451 58.0609 51.2214C58.1524 51.2961 58.2562 51.3556 58.366 51.3938C58.4926 51.4365 58.6253 51.4578 58.758 51.4548C58.8587 51.4548 58.9594 51.4456 59.0585 51.4258C59.1501 51.4075 59.2385 51.3755 59.3179 51.3266C59.3941 51.2809 59.4551 51.2153 59.4979 51.136C59.5451 51.0414 59.568 50.9361 59.5634 50.8309C59.5573 50.6417 59.4521 50.4678 59.2858 50.3778C59.054 50.2268 58.8053 50.1048 58.546 50.0117C58.0914 49.8561 57.6643 49.6319 57.2799 49.3451C56.9825 49.0873 56.8192 48.706 56.8391 48.3124C56.8314 47.8929 57.0221 47.4948 57.3531 47.2355C57.7147 46.9441 58.1692 46.7931 58.6345 46.8083C59.0418 46.8022 59.4444 46.9121 59.7938 47.1241C59.9662 47.2278 60.1187 47.3621 60.2469 47.5192C60.3948 47.7068 60.5153 47.9143 60.6053 48.1339L59.5284 48.4634C59.4536 48.2727 59.3408 48.1004 59.1959 47.9554C59.0403 47.8182 58.8359 47.748 58.6284 47.7602C58.5491 47.7617 58.4682 47.7693 58.3904 47.7861C58.3142 47.8014 58.2394 47.8288 58.1708 47.867C58.0289 47.9448 57.942 48.0958 57.9481 48.259C57.9481 48.3353 57.9725 48.4085 58.0182 48.471C58.0808 48.5534 58.1616 48.622 58.2547 48.6693C58.5079 48.8081 58.7733 48.9271 59.0479 49.0202C59.449 49.1544 59.8258 49.3542 60.1614 49.6136C60.5123 49.879 60.706 50.3015 60.6816 50.7408C60.7075 51.2137 60.5153 51.6714 60.1599 51.9826ZM63.6302 52.3334H62.3855L60.9424 46.8847H62.1063L62.988 50.5548L63.9079 46.8847H65.0794L63.6302 52.3334ZM70.7371 43.9512H57.3653L55.9009 42.2763C55.6706 42.0109 55.335 41.8599 54.9826 41.8599H46.3305V21.4406C46.3305 20.7664 46.8766 20.2203 47.5509 20.2203H62.018V26.4989C62.018 27.1456 62.2758 27.7665 62.7334 28.2241C63.191 28.6818 63.8118 28.9395 64.4586 28.9395H70.7372L70.7371 43.9512Z"
                      fill="#22263B"
                    />
                    <defs>
                      <clipPath
                        id="bgblur_0_13788_7523_clip_path"
                        transform="translate(128.469 128.469)"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="120"
                          height="73"
                          rx="36.5"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center max-w-6xl mx-auto text-gray-700 text-center font-inter my-16">
          <h1 className="text-5xl ">
            Drive growth, improve customer service and save time through
            automated order processing
          </h1>
        </div>
      </section>

      {/* Feature 1 - IMPROVE CUSTOMER EXPERIENCE */}
      <div className=" py-16 min-h-[400px] flex items-center relative z-20">
        <div className="px-8 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#FFBDBD] text-[#22263B] text-xs font-semibold px-4 py-2 rounded-lg tracking-widest mb-4">
                IMPROVE CUSTOMER EXPERIENCE
              </div>
              <h3 className="text-3xl lg:text-4xl font-normal text-[#22263B]">
                Let customers order
                <br />
                <strong className="font-semibold">however they like</strong>
              </h3>
            </div>

            <div className="rounded-xl p-8">
              <div className="relative w-full h-96">
                <Image
                  src="/images/OrdersProcessing.gif"
                  alt="Customer communication channels"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        {/* Feature Sections */}
        <div className="space-y-0">
          {/* Feature 2 - DRIVE GROWTH */}
          <div className="bg-white py-16 min-h-[400px] flex items-center">
            <div className="px-8 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative w-full aspect-video h-96">
                    <Image
                      src="/images/processing.gif"
                      alt="PDF order processing automation"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-[#FFBDBD] text-[#22263B] text-xs font-semibold px-4 py-2 rounded-lg tracking-widest mb-32">
                    DRIVE GROWTH
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-normal text-[#22263B]">
                    Process <strong className="font-semibold">3x</strong> sales
                    <br />
                    orders with the same team
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - SAVE TIME */}
          <div className="bg-white py-16 min-h-[400px] flex items-center">
            <div className="px-8 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-block bg-[#FFBDBD] text-[#22263B] text-xs font-semibold px-4 py-2 rounded-lg tracking-widest mb-4">
                    SAVE TIME
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-normal text-[#22263B] mb-2">
                    <strong>Seamless integrate</strong> <br /> the latest AI
                    into your <br />
                    existing systems
                  </h3>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <div className="bg-white  px-4 py-2">
                      <Image
                        src="/images/logos.png"
                        alt=""
                        width={700}
                        height={700}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="mt-16 mb-24 bg-[#22263B] rounded-2xl p-12 mx-auto max-w-7xl text-white">
          <div className="text-center mb-8">
            <span className="text-[#FF7C7C] text-sm font-bold uppercase tracking-widest block">
              BUILT TO DELIVER REAL VALUE
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-20 mt-8">
            <div className="text-center">
              <span className="block text-xs uppercase tracking-wider mb-1">
                CUSTOMER ROI
              </span>
              <div className="flex items-center justify-center">
                <CountAnimation number={5} className="text-6xl font-normal" />
                <span className="text-4xl font-medium mx-1">x</span>
              </div>
            </div>

            <div className="text-center">
              <span className="block text-xs uppercase tracking-wider mb-1">
                REDUCED ERRORS
              </span>
              <div className="flex items-center justify-center">
                <CountAnimation number={50} className="text-6xl font-normal" />
                <span className="text-4xl font-medium">%</span>
              </div>
            </div>

            <div className="text-center">
              <span className="block text-xs uppercase tracking-wider mb-1">
                QUICKER PROCESSING
              </span>
              <div className="flex items-center justify-center">
                <CountAnimation number={90} className="text-6xl font-normal" />
                <span className="text-2xl font-medium">%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People First Industry Section */}
      <section className="py-48 w-full bg-[#F1F5F9] relative border-b border-t border-[#22263B] z-10">
        <div className="max-w-7xl  mx-auto px-4">
          <span className="text-[#FF7C7C] text-sm font-bold uppercase tracking-widest mb-12 block">
            THE FUTURE OF WHOLESALE IS HUMAN
          </span>
          <h2 className="text-3xl md:text-6xl font-semibold text-[#22263B] leading-tight mb-16">
            A people-first industry needs people-first software
          </h2>

          <div className="mt-8">
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="OpenInfo Logo"
                width={36}
                height={36}
                className="mr-2"
              />
              <Image
                src="/images/name-logo.svg"
                alt="OpenInfo Name"
                width={125}
                height={36}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto relative z-10 bg-white">
        <div className="bg-gradient-to-br from-[#22263B] to-[#FF7C7C] rounded-3xl p-12 text-center mx-auto">
          <h2 className="text-4xl font-semibold text-white mb-4">
            See it in action
          </h2>
          <p className="text-[#FF7C7C] uppercase text-sm font-bold tracking-widest mb-8">
            BOOK A DEMO TO SEE HOW AI CAN HELP YOU
          </p>
          <Link
            href="https://calendly.com/tom-morrison-openinfo/30min?month=2025-03"
            target="_blank"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#22263B] transition-colors"
          >
            Book a demo
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 sm:px-12 lg:px-24 bg-[#22263B] text-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="OpenInfo Logo"
                  width={36}
                  height={36}
                  className="mr-2 invert brightness-0"
                />
                <Image
                  src="/images/name-logo.svg"
                  alt="OpenInfo Name"
                  width={125}
                  height={36}
                  priority
                  className="invert brightness-0"
                />
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                href="#product"
                className="text-gray-300 hover:text-[#FF7C7C] transition-colors"
              >
                Product
              </Link>
              <Link
                href="#about"
                className="text-gray-300 hover:text-[#FF7C7C] transition-colors"
              >
                About us
              </Link>
              <Link
                href="https://calendly.com/tom-morrison-openinfo/30min?month=2025-03"
                target="_blank"
                className="py-2 px-5 rounded-full text-[#22263B] bg-white hover:bg-[#FF7C7C] hover:text-white transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
