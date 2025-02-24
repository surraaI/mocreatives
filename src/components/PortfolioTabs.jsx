// components/PortfolioTabs.js

import { useState } from "react";
import Image from "next/image";

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("Marketing");

  // Data for each tab
  const tabContent = {
    Marketing: [
      {
        title: "Client: Oromia Insurance Company (OIC)",
        deliverables: " Rebranding TV Commercial (TVC)",
        image: "/assets/mall.jpg",
      },
      {
        title: "Client: Cooperative Bank of Oromia",
        deliverables: "New Year TVC Campaign",
        image: "/images/website-design-2.png",
      },
      {
        title: "Client: DIGAF Microfinance Institution (MFI) ",
        deliverables: "Marketing & Branding Support",
        image: "/images/website-design-2.png",
      },
      {
        title: "Client: HealthCare Plus",
        deliverables: "Custom booking system with UI/UX design.",
        image: "/images/website-design-2.png",
      },
    ],
    "Training & Consulting": [
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
    "Digital Solutions": [
      {
        title: "Client: Ease Engineering",
        deliverables: "Brand & Digital Solutions.",
        image: "/images/digital-marketing-1.png",
      },
      {
        title: "Client: BookNest",
        deliverables: "Email marketing and SEO strategy.",
        image: "/images/digital-marketing-2.png",
      },
    ],
  };

  return (
    <section className=" text-white py-16 px-4">
      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-24 text-xl font-bold mb-4">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "text-cultural-red" : "text-white"
            } hover:text-cultural-red transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Yellow Line */}
      <div className="border-t-4 border-cultural-red w-7/12  mx-auto mb-8"></div>

      {/* Cards for Active Tab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-visible">
        {tabContent[activeTab].map((item, index) => (
          <div
            key={index}
            className="relative bg-cultural-red rounded-2xl p-6 shadow-lg hover:shadow-neuro-blue transition hover:scale-105 flex items-center overflow-visible w-[95%]  mx-auto min-h-[280px]"
          >
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
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2">
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
