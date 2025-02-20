"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-100">
      {/* Left Side - Title and Description */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-tangaroa-blue mb-4">
          Portfolio & Case Studies
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Mo Creatives has worked with major financial institutions, tech
            companies, and emerging brands to deliver strategic marketing
            campaigns and digital solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex gap-4 mt-6"
        >
          <Link
            href="/works"
            className="mt-6 px-10 py-2 bg-red-900 text-black font-semibold text-lg border border-gray-600 rounded-3xl hover:bg-cultural-red transition"
          >
            View our works
          </Link>
        </motion.div>
      </div>

      {/* Right Side - Desktop and Phone Mockups */}
      <div className="md:w-1/2 flex justify-center items-center relative">
        {/* Desktop Screen Animation */}
        <motion.div
          className="w-80 md:w-96 h-48 md:h-56 bg-black rounded-lg shadow-lg relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/assets/desktop-project.png"
            alt="Desktop Project"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>

        {/* Phone Screen Animation */}
        <motion.div
          className="w-28 md:w-32 h-56 md:h-64 bg-black rounded-3xl shadow-lg relative overflow-hidden -ml-10 md:-ml-16 -mt-20 md:-mt-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/assets/phone-project.png"
            alt="Phone Project"
            fill
            className="object-cover rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
