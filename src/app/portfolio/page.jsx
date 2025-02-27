"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PortfolioTabs from "../../components/PortfolioTabs";

export default function Portfolio() {
  return (
    <>
      <section className="min-h-screen  bg-light-gray flex flex-col md:flex-row items-center justify-between px-6 py-12 ">
        <div className=" md:w-1/2 mb-8 md:mb-0 ml-10">
          <h1 className="text-4xl font-bold text-cultural-red mb-4">
            Portfolio & Case Studies
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-tech-grey font-sans text-lg leading-relaxed">
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
              className="mt-6 px-10 py-2 bg-black text-white font-semibold text-lg border border-gray-600 rounded-3xl hover:bg-cultural-red transition"
            >
              View our works
            </Link>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center relative gap-6">
          <motion.div
            className="w-[380px] md:w-[500px] h-[260px] md:h-[320px] relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/assets/desktop1.png"
              alt="Desktop Mockup"
              fill
              className="object-cover"
            />
            <motion.div className="absolute inset-0 flex justify-center items-center p-4">
              <Image
                src="/assets/project-image.jpg"
                alt="Project on Desktop"
                className="w-[85%] h-[85%] object-contain"
                width={400}
                height={200}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-[180px] md:w-[200px] h-[360px] md:h-[420px] relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="/assets/mobile1.png"
              alt="Phone Mockup"
              fill
              className="object-cover"
            />
            <motion.div className="absolute inset-0 flex justify-center items-center p-4">
              <Image
                src="/assets/project-image.jpg"
                alt="Project on Phone"
                className="w-[70%] h-[70%] object-contain"
                width={200}
                height={900}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-12">
        <div className="container mx-auto">
          <PortfolioTabs />
        </div>
      </section>
    </>
  );
}
