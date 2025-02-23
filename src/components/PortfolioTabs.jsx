// components/PortfolioTabs.js

import { useState } from "react";
import Image from "next/image";

const PortfolioTabs = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("Website Design");

  // Data for each tab
  const tabContent = {
    "Website Design": [
      {
        title: "Client: TechNova",
        deliverables: "Responsive website with SEO optimization.",
        image: "/assets/mall.jpg",
      },
      {
        title: "Client: HealthCare Plus",
        deliverables: "Custom booking system with UI/UX design.",
        image: "/images/website-design-2.png",
      },
      {
        title: "Client: HealthCare Plus",
        deliverables: "Custom booking system with UI/UX design.",
        image: "/images/website-design-2.png",
      },
      {
        title: "Client: HealthCare Plus",
        deliverables: "Custom booking system with UI/UX design.",
        image: "/images/website-design-2.png",
      },
    ],
    "Brand Identity": [
      {
        title: "Client: UrbanStyle",
        deliverables: "Logo design and brand guidelines.",
        image: "/images/brand-identity-1.png",
      },
      {
        title: "Client: FreshBites",
        deliverables: "Packaging design and social media assets.",
        image: "/images/brand-identity-2.png",
      },
      {
        title: "Client: FreshBites",
        deliverables: "Packaging design and social media assets.",
        image: "/images/brand-identity-2.png",
      },
    ],
    "Digital Marketing": [
      {
        title: "Client: FitLife Gym",
        deliverables: "Social media marketing and ad campaigns.",
        image: "/images/digital-marketing-1.png",
      },
      {
        title: "Client: BookNest",
        deliverables: "Email marketing and SEO strategy.",
        image: "/images/digital-marketing-2.png",
      },
    ],
    "ERP Solutions": [
      {
        title: "Client: UF Cables Manufacturing",
        deliverables:
          "ERP system for inventory, HR, sales, and customer relationship.",
        image: "/assets/mall.jpg",
      },
      {
        title: "Client: 2Jar Market",
        deliverables: "Affiliate program system and e-commerce integration.",
        image: "/images/ecommerce-2.png",
      },
    ],
  };

  return (
    <section className=" text-white py-16 px-4">
      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-8 text-xl font-bold mb-4">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "text-custom-orange" : "text-white"
            } hover:text-[#F5A623] transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Yellow Line */}
      <div className="border-t-4 border-custom-orange w-11/12 mx-auto mb-8"></div>

      {/* Cards for Active Tab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tabContent[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-neuro-blue rounded-2xl p-4 shadow-lg transition hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p>
                <span className="font-bold">Deliverables:</span>{" "}
                {item.deliverables}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioTabs;
