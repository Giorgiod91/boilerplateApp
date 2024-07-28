"use client";
import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-16 px-6 pb-10 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:gap-20 lg:pb-20">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10 text-center sm:justify-between lg:items-start lg:gap-14 lg:text-left">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:-mb-4 lg:text-6xl xl:text-7xl">
          Your NextJS{" "}
          <span className="via-magenta-500 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Boilerplate
          </span>{" "}
          to save{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Time
          </span>
        </h1>

        <a
          href="#payment"
          className="mt-4 inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 text-white transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 hover:text-black"
        >
          <img src="./logo2.jpg" className="w-5" alt="applogo" />
          <span className="ml-2">Get Started</span>
        </a>

        <p className="text-lg leading-relaxed text-gray-700 opacity-80">
          A NextJS boilerplate with TypeScript, TailwindCSS, Jest, tRPC, and
          Prisma. A full-stack starter kit focusing on developer experience and
          scalability.
        </p>
      </div>
      <div className="relative mx-auto w-full max-w-3xl">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="transition-transform duration-300"
        >
          <img src="/favicon.ico" alt="icon" className="mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
