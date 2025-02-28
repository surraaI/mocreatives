import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioData";

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("Marketing");
  const tabs = Object.keys(portfolioData);

  return (
    <section className="text-tech-grey py-16 px-4">
      <motion.div
        className="flex justify-center gap-4 text-xl font-bold mb-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative flex justify-center items-center min-w-[120px] px-6 py-2 transition-all duration-300 ${
              activeTab === tab
                ? "text-neuro-blue"
                : "text-gray-500 hover:text-neuro-blue"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 mx-5 md:text-2xl text-sm">
              {tab}
            </span>
            {activeTab === tab && (
              <motion.span
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 
      border-l-8 border-r-8 border-b-8 border-transparent
      border-b-neuro-blue"
                layoutId="tab-highlight"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
      <hr className="border-t-4 border-t-neuro-blue mb-14 -mt-2 md:w-1/2 mx-auto" />

      <div className="flex flex-col sm:flex-row items-center justify-center mx-auto px-4 text-center">
        <p>
          We deliver{" "}
          <span className="font-semibold text-neuro-blue">innovative</span>
          <span>and</span>
          <span className="font-semibold text-neuro-blue">impactful</span>{" "}
          results tailored to your needs. Explore our work and level up your
          brand.
        </p>
        <div className="mt-6 sm:mt-0 ml-6">
          <motion.button
            className="relative px-6 py-2 bg-blue-600 text-white font-semibold rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-blue-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 overflow-visible px-4 sm:px-16 mt-10">
        {portfolioData[activeTab].map((item, index) => {
          const isLeftCard = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                className={`relative bg-neuro-blue rounded-2xl p-6 shadow-lg hover:shadow-black transition hover:scale-105 w-full mx-auto min-h-[280px] 
            flex flex-col sm:flex-row sm:items-center 
            ${!isLeftCard ? "sm:flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-full sm:w-[60%] relative 
              -top-10 sm:top-0 
              ${isLeftCard ? "sm:-left-10" : "sm:-right-10"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className={`shadow-lg object-cover w-full
                rounded-t-2xl sm:rounded-t-none 
                ${
                  isLeftCard
                    ? "sm:rounded-l-2xl sm:rounded-r-md"
                    : "sm:rounded-r-2xl sm:rounded-l-md"
                }`}
                  />
                </div>
                <div
                  className={`w-full sm:w-1/2 
              ${isLeftCard ? "sm:pl-6" : "sm:pr-6"} mt-4 sm:mt-0`}
                >
                  <h3 className="text-md text-white">
                    <span className="font-bold text-white">Client:</span>{" "}
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-white">
                    <span className="font-bold text-white">Deliverables:</span>{" "}
                    {item.deliverables}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioTabs;
