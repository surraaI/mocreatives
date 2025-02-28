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
    // Add more blog posts as needed
  ];

  useEffect(() => {
    const fullTitle = "Welcome to Our Blog!";
    let i = 0;
    const typingInterval = setInterval(() => {
      setTitle((prev) => prev + fullTitle[i]);
      i++;
      if (i === fullTitle.length) clearInterval(typingInterval);
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Big Title with Typewriting Effect */}
      <motion.h1
        className="text-4xl font-semibold text-center mb-10 text-blue-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>

      {/* Blog Cards Section */}
      <div className="flex flex-wrap justify-start gap-6">
        {blogContent.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:scale-105 flex items-center w-full max-w-[100%]"
          >
            {/* Image */}
            <div className="w-[40%]">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-l-2xl shadow-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-[60%] pl-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <Link
                href={item.slug}
                className="mt-4 text-blue-600 hover:underline"
              >
                Read Me
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
