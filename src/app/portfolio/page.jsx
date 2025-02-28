"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PortfolioTabs from "../../components/PortfolioTabs";

export default function Portfolio() {
  return (
    <>
      <section className="min-h-screen bg-neuro-blue flex flex-col md:flex-row items-center justify-between px-8 md:px-28 py-8 pt-24 md:pt-8">
        <div className="md:w-1/2 mb-8 md:mb-0 ml-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Portfolio & Case Studies
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-white contrast-100 font-sans text-lg leading-relaxed">
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
              className="mt-6 px-10 py-2 bg-creative-yellow text-white font-semibold text-lg border border-creative-yellow rounded-3xl shadow-sm shadow-creative-yellow hover:shadow-creative-yellow transition"
            >
              View our works
            </Link>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center relative gap-6">
          {/* Macbook Image */}
          <motion.div
            className="w-[80%] md:w-[1000px] lg:w-[1200px] h-auto md:h-[700px] lg:h-[800px] relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/Macbook.png"
              alt="Desktop Mockup"
              layout="fill" // Ensures the image takes up its container
              objectFit="contain" // Ensures the image scales without distortion
            />
          </motion.div>

          {/* iPhone Image */}
          <motion.div
            className="absolute bottom-0 w-[100px] md:w-[150px] lg:w-[180px] h-auto md:h-[250px] lg:h-[300px] relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="/assets/iphone1.png"
              alt="Phone Mockup"
              layout="fill" // Ensures the image takes up its container
              objectFit="contain" // Ensures the image scales without distortion
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-light-gray py-12">
        <div className="container mx-auto">
          <PortfolioTabs />
        </div>
      </section>
    </>
  );
}
