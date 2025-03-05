"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const fullTitle = "Welcome to MoCreatives Blog!";
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  const blogContent = [
    {
      title: "How to Improve Your Web Design Skills",
      description:
        "Learn the fundamentals of good web design and how you can improve your skills in the field.",
      image: "/assets/blogpic1.jpg",
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
      title: "Getting Started with JavaScript",
      description:
        "A beginner's guide to JavaScript, including key concepts and best practices.",
      image: "/assets/blog-image3.jpg",
      slug: "/blog/getting-started-with-javascript",
    },
    {
      title: "The Benefits of Learning Python",
      description:
        "Discover the benefits of learning Python and how it can help you in your career.",
      image: "/assets/blog-image4.jpg",
      slug: "/blog/benefits-of-learning-python",
    },
  ];

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullTitle.length) {
        setTitle(fullTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const totalPosts = blogContent.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogContent.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-black min-h-[50vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-44 font-bold text-center text-cultural-red">
            {title.split(" ").map((word, idx) => (
              <span key={idx}>
                {word === "MoCreatives" ? (
                  <span className="text-creative-yellow">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-center text-red-800 font-sans text-sm sm:text-base md:text-lg mt-2 pt-12">
              A guide for beginners to understand the best programming languages
              to start with.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-8 px-4 pt-[100px] bg-black">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 gap-8 px-4 sm:px-32 md:px-40 lg:px-48">
              {currentPosts.map((item, index) => (
                <div
                  key={index}
                  className="bg-red-800 rounded-2xl shadow-sm shadow-yellow-300 hover:shadow-xl transition hover:scale-105 w-full max-w-full sm:max-w-6xl mx-auto h-56 sm:h-48"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start h-full">
                    {/* Image and Title Container */}
                    <div className="flex items-center space-x-4 p-1 sm:w-1/3 sm:block">
                      <div className="p-2 w-48 h-36 sm:w-64 sm:h-44">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={192} // Matches w-48 (192px) for mobile
                          height={144} // Matches h-36 (144px) for mobile
                          className="rounded-lg shadow-lg object-cover w-full h-full block"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-white sm:hidden truncate">
                        {item.title}
                      </h3>
                    </div>

                    {/* Text Content */}
                    <div className="w-full sm:w-2/3 p-1 flex flex-col h-full overflow-hidden">
                      <h3 className="hidden sm:block text-lg font-semibold text-white mb-1 truncate">
                        {item.title}
                      </h3>
                      <p className="text-white mb-1 line-clamp-2">
                        {item.description}
                      </p>
                      <Link
                        href={item.slug}
                        className="text-creative-yellow text-lg font-medium flex items-center space-x-1 mt-auto"
                      >
                        <span className="underline">Read More</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-cultural-red text-white rounded-lg text-lg ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-800"
              }`}
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-4 py-2 rounded-lg text-lg ${
                    currentPage === pageNumber
                      ? "bg-cultural-red text-black"
                      : "bg-cultural-red text-white hover:bg-red-800"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-cultural-red text-white rounded-lg text-lg ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-creative-yellow"
              }`}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
