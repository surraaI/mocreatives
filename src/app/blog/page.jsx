"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const blogContent = [
    {
      title: "How to Improve Your Web Design Skills",
      description:
        "Learn the fundamentals of good web design and how you can improve your skills in the field.",
      image: "/assets/blog-image1.jpg",
      slug: "/blog/how-to-improve-web-design-skills",
    },
    {
      title: "The Future of Web Development",
      description:
        "Explore what the future holds for web development, including new trends and technologies.",
      image: "/assets/blog-image2.jpg",
      slug: "/blog/future-of-web-development",
    },
    {
      title: "Top 5 Programming Languages for Beginners",
      description:
        "A guide for beginners to understand the best programming languages to start with.",
      image: "/assets/blog-image3.jpg",
      slug: "/blog/top-5-programming-languages",
    },
  ];

  useEffect(() => {
    const fullTitle =
      "Welcome to Our Blog vwertyuiosdfghjsdfghjxcvbnnm,fghjkwertyuiosdfghjksdfghjkwertyuidfghjkl!";
    let i = 0;
    const typingInterval = setInterval(() => {
      setTitle((prev) => prev + fullTitle[i]);
      i++;
      if (i === fullTitle.length) clearInterval(typingInterval);
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-yellow-300 min-h-screen flex items-center justify-center px-4">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-indigo-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
      </section>

      {/* Blog Cards Section */}
      <section className="py-8 px-4 pt-[100px]">
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-4 px-4 sm:px-6 md:px-8 lg:px-12">
            {blogContent.map((item, index) => (
              <div
                key={index}
                className="bg-yellow-300 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105 w-full max-w-6xl mx-auto"
              >
                <div className="flex flex-col sm:flex-row sm:items-start">
                  {/* Image and Title Container */}
                  <div className="flex items-center space-x-4 p-2 sm:w-1/3 sm:block">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-lg shadow-lg object-cover w-full block sm:hidden"
                    />
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={150}
                      className="rounded-lg shadow-lg object-cover w-full hidden sm:block"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 sm:hidden">
                      {item.title}
                    </h3>
                  </div>

                  {/* Text Content */}
                  <div className="w-full sm:w-2/3 p-2 flex flex-col">
                    {/* Title for Larger Screens */}
                    <h3 className="hidden sm:block text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-2 sm:mb-2">
                      {item.description}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={item.slug}
                      className="text-blue-600 text-lg font-medium flex items-center space-x-1 mt-auto"
                    >
                      <span className="underline">Read More</span>
                      <span>→</span> {/* Right arrow without underline */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
