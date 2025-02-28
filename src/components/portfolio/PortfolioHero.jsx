import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PortfolioHero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center relative overflow-visible my-20">
      <div className="md:w-1/2 mb-8 md:mb-0 mt-10 md:mt-0">
        <h1 className="text-5xl font-bold text-white mb-4">
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
            className="mt-0 md:mt-6 px-10 py-2 bg-white text-blue-500 font-semibold text-lg border rounded-3xl shadow-md shadow-white hover:shadow-white transition"
          >
            View our works
          </Link>
        </motion.div>
      </div>

      <div className="md:w-1/2 w-full mx-auto justify-start flex md:justify-center items-center relative">
        <motion.div
          className="relative w-[80%] md:w-[700px] lg:w-[850px] h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/Macbook.png"
            alt="MacBook Mockup"
            width={850}
            height={700}
            objectFit="contain"
            className="self-start"
          />
        </motion.div>

        <motion.div
          className="absolute right-0 sm:right-[-30px] md:right-[-50px] lg:right-[-80px] bottom-[-10px] w-[100px] md:w-[140px] lg:w-[180px] h-auto z-20"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/iphone1.png"
            alt="iPhone Mockup"
            width={180}
            height={300}
            objectFit="contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHero;
