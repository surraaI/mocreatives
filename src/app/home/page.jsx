"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/movid.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content Over Video */}
      <div className="relative flex flex-col items-center justify-center text-center text-white h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl  font-sans pt-10">
            Welcome to Our World
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-lg md:text-2xl font-sans mt-4 max-w-2xl">
            Experience innovation like never before. Explore our unique
            solutions tailored for you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex gap-4 mt-6"
        >
          <a
            href="/services"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold text-lg rounded-2xl hover:bg-gray-300 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
