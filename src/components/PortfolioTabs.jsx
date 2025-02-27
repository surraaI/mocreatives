// components/PortfolioTabs.js

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PortfolioTabs = () => {
  // Data for each tab
  const tabContent = {
    Marketing: [
      {
        title: "Oromia Insurance Company (OIC)",
        deliverables: "Rebranding TV Commercial (TVC)",
        image: "/assets/mall.jpg",
      },
      {
        title: "Cooperative Bank of Oromia",
        deliverables: "New Year TVC Campaign",
        image: "/images/website-design-2.png",
      },
      {
        title: "DIGAF Microfinance Institution (MFI)",
        deliverables: "Marketing & Branding Support",
        image: "/images/website-design-2.png",
      },
      {
        title: "HealthCare Plus",
        deliverables: "Custom booking system with UI/UX design.",
        image: "/images/website-design-2.png",
      },
    ],
    "Training & Consulting": [
      {
        title: "UrbanStyle",
        deliverables: "Logo design and brand guidelines.",
        image: "/images/brand-identity-1.png",
      },
      {
        title: "FreshBites",
        deliverables: "Packaging design and social media assets.",
        image: "/images/brand-identity-2.png",
      },
    ],
    "Digital Solutions": [
      {
        title: "Ease Engineering",
        deliverables: "Brand & Digital Solutions.",
        image: "/images/digital-marketing-1.png",
      },
      {
        title: "BookNest",
        deliverables: "Email marketing and SEO strategy.",
        image: "/images/digital-marketing-2.png",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Marketing");
  const tabs = Object.keys(tabContent); // Get keys of tabContent
  const activeIndex = tabs.indexOf(activeTab); // Track active tab index

  return (
    <section className="text-tech-grey py-16 px-4">
      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-24 text-xl font-bold mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "text-black" : "text-tech-grey"
            } hover:text-black transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Line with Triangle */}
      <div className="relative w-7/12 mx-auto mb-8 border-t-2 border-tech-grey">
        <div
          className="absolute transform -translate-x-1/2 -top-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-tech-grey transition-all duration-300"
          style={{ left: `${(100 / tabs.length) * (activeIndex + 0.5)}%` }} // Dynamic position
        ></div>
      </div>

      {/* Description and Contact Button */}
      <div className="flex justify-between items-end mb-4 px-40">
        {/* Description */}
        <div className="w-3/4">
          <p className="text-xl text-tech-grey font-sans">
            We deliver innovative and impactful results tailored to each
            client's needs. Explore our work and get in touch to take your brand
            to the next level.
          </p>
        </div>
        {/* Contact Button */}
        <div className="w-1/4 text-right">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Cards for Active Tab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-visible px-28">
        {tabContent[activeTab].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative bg-tech-grey rounded-2xl p-6 shadow-lg hover:shadow-black transition hover:scale-105 flex items-center overflow-visible w-[95%] mx-auto min-h-[280px]">
              {/* Image */}
              <div className="w-[60%] relative -left-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-l-2xl shadow-lg object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="w-1/2 pl-6">
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
        ))}
      </div>
    </section>
  );
};

export default PortfolioTabs;
