"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProjectList = () => {
  const [value, setValue] = useState(0);

  const projectItems = {
    "Ambassador Mall": {
      title: "Ambassador Mall",
      imageUrl: "/assets/ambassador-mall.png",
      link: "https://ambassadormall.com",
      type: "Web Design",
      deliverables: "Modern website showcasing stores, events, and promotions.",
    },
    "Admass Travel": {
      title: "Admass Travel",
      deliverables: "Captivating travel website with booking functionalities.",
      imageUrl: "/assets/admass-travel.png",
      link: "https://admasstravel.com",
      type: "App Development",
    },
    "Marketing Campaign": {
      title: "Marketing Campaign",
      deliverables: "Strategic campaign for brand awareness.",
      imageUrl: "/assets/marketing-campaign.png",
      link: "https://example.com",
      type: "Digital Marketing",
    },
  };

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <div className="p-6">
      {/* Horizontal Tabs */}
      <div className="flex justify-center mb-8 space-x-4 border-b-2 border-gray-300">
        {Object.keys(projectItems).map((key, i) => (
          <button
            key={i}
            onClick={() => handleChange(i)}
            className={`pb-2 relative transition-colors duration-300 ${
              value === i
                ? "text-matisse font-bold"
                : "text-gray-500 hover:text-matisse"
            }`}
          >
            {key}
            {value === i && (
              <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-matisse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Object.keys(projectItems).map((key, i) => (
          <div
            key={i}
            className={`${value === i ? "block" : "hidden"} transition-opacity`}
          >
            <div className="relative bg-white border border-gray-200 shadow-md rounded-2xl p-4">
              {/* Image as Link */}
              <a
                href={projectItems[key].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={projectItems[key].imageUrl}
                  alt={projectItems[key].title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-2xl -mt-8 shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="pt-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {projectItems[key].title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {projectItems[key].deliverables}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
