"use client";
import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-16 px-6 pb-10 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:gap-20 lg:pb-20">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10 text-center sm:justify-between lg:items-start lg:gap-14 lg:text-left">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 md:-mb-4 lg:text-6xl xl:text-7xl">
          Your NextJS
          <span className="via-magenta-500 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Boilerplate
          </span>{" "}
          to safe{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Time
          </span>
        </h1>

        <a
          href="#payment"
          className="btn btn-wide flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black"
        >
          <img src="./logo2.jpg" className="w-5" alt="applogo" />
          <span className="ml-2">Get Started</span>
        </a>

        <div>
          <p className="text-lg leading-relaxed opacity-80"></p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          {" "}
          <img src="/favicon.ico" alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
