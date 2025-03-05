"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const blogContent = [
  {
    title: "How to Improve Your Web Design Skills",
    description:
      "Learn the fundamentals of good web design and how you can improve your skills in the field.",
    image: "/assets/blogpic1.jpg",
    slug: "how-to-improve-web-design-skills",
    date: "October 15, 2024",
    content: `
      Placeholder content for "How to Improve Your Web Design Skills". 
      This is where the full blog post would go.
    `,
  },
  {
    title: "The Future of Web Development",
    description:
      "Explore what the future holds for web development, including new trends and technologies.",
    image: "/assets/blog-image2.jpg",
    slug: "future-of-web-development",
    date: "October 16, 2024",
    content: `
      Placeholder content for "The Future of Web Development". 
      This is where the full blog post would go.
    `,
  },
  {
    title: "Getting Started with JavaScript",
    description:
      "A beginner's guide to JavaScript, including key concepts and best practices.",
    image: "/assets/blog-image3.jpg",
    slug: "getting-started-with-javascript",
    date: "October 17, 2024",
    content: `
      Placeholder content for "Getting Started with JavaScript". 
      This is where the full blog post would go.
    `,
  },
  {
    title: "The Benefits of Learning Python",
    description:
      "Discover the benefits of learning Python and how it can help you in your career.",
    image: "/assets/blog-image4.jpg",
    slug: "benefits-of-learning-python",
    date: "October 18, 2024",
    content: `
      Placeholder content for "The Benefits of Learning Python". 
      This is where the full blog post would go.
    `,
  },
  {
    title: "Why the Mercato’s Marketing Tactics Won’t Cut It",
    description:
      "A deep dive into why traditional marketing tactics are outdated in Ethiopia’s booming digital landscape.",
    image: "/assets/mercato-blog-image.jpg",
    slug: "why-mercatos-marketing-tactics-wont-cut-it",
    date: "October 20, 2024",
    content: `
      Let’s face it: if your business is still relying on flyers pinned to coffee shop bulletin boards or shouting promotions and loud music through a big “Montarbo” in Mercato, it’s time for an upgrade. Ethiopia’s digital landscape is booming—42.5 million internet users as of 2024 (up from 17 million in 2020!)—and your customers are scrolling, swiping, and Googling their way to products like yours. But how do you stand out in a sea of Instagram ads and TikTok dances? Let’s break it down.

      ### Step 1: Understand the Ethiopian Digital Jungle
      Fact: 60.4% of Ethiopians use mobile phones. Translation: If your website looks like a 2005 Myspace page on smartphones, you’re losing customers faster than a gosip breaks during “የሰፈር “ buna time.

      **What to do:**
      - **Mobile-First Design:** Optimize your site for mobile. No one wants to pinch-zoom their way through your product page. Tools like Google’s Mobile-Friendly Test can help.
      - **Speed Matters:** Slow websites are the digital equivalent of waiting in line at the bank. Ethiopia’s median mobile internet speed hit 27.19 Mbps in 2024 (+42.4% from 2023!). Use Google PageSpeed Insights to trim loading times.

      ### Step 2: Local SEO—Because Google Doesn’t Speak Amharic Fluently (Yet)
      Most users aren’t Googling “best café near me”—they’re searching for “ካፌ እና ሬስቶራንት አዲስ አበባ” (coffee shops in Addis Ababa). Local SEO is your golden ticket to showing up in these hyper-specific searches.

      **Action Plan:**
      - **Claim Your Google My Business (GMB) Profile:** If your business isn’t on Google Maps, you might as well be invisible. Fill it with photos, hours, and that glowing review from Auntie Tigist. Over 800 government services are now online—why not your SME?
      - **Use Local Keywords:** Sprinkle terms like “Addis Ababa web design” or “Ethiopian spices online” in your content. Tools like Google Keyword Planner can help.
      - **Get Listed in Local Directories:** Think Ethiopian Yellow Pages or regional business listings. Bonus: It’s free real estate for backlinks.

      ### Step 3: Social Media—Where Everyone’s a Critic (But Also a Customer)
      Ethiopians love social media. Facebook? 7.05 million users. TikTok? Flooded with eskista challenges. Ignore these platforms, and you’re missing out on a digital party where you can meet your future customers.

      **Pro Tips:**
      - **Post Like a Pro:** Mix promotional posts with relatable content. Example: A bakery could post tips on what to mix with their bread for better taste.
      - **Collaborate with Micro-Influencers:** Instagram users in Ethiopia grew by 64.7% in 2024. Partner with that Addis-based food blogger who reviews kitfo spots—they’ll bring authenticity (and hungry followers).
      - **Jump on Trends:** Remember the “ኮንታ ትገባላችሁ” craze? Ethiopian brands that hopped on it saw engagement spike. Moral: Don’t be the “ሶፍት” seller at a party—join the fun.

      ### Step 4: Beyond Basics—Email, Blogs, SMS and Giveaways
      - **Email and SMS Marketing:** Think of it as sending a love letter to your customers. Keep it personal: “Hey, Selam! We miss you. Here’s 20% off that gabi you left in your cart.” Tools like Mailchimp work wonders.
      - **Content Marketing:** Write blogs that solve problems. Example: “5 Ways to Fix Your Sattelite Receiver During ክረምት Rains” (spoiler: prayer won’t help). Use Amharic phrases to connect deeper.
      - **Influencer Giveaways:** Partner with influencers for contests. “Tag 3 friends who need doro for their new year ድግስ, and win a year’s supply!” Instant engagement + new followers.

      ### Step 5: Don’t Forget the Government’s Cheat Code
      Ethiopia’s Digital Ethiopia 2025 strategy is pushing for a tech-savvy economy. Thanks to this plan, internet users exploded from 17 million to 42.5 million in four years. Tap into initiatives like the 5 Million Ethiopian Coders program or e-commerce grants.

      ### Conclusion: Your Turn to Shine
      Building a digital strategy isn’t rocket science—it’s about meeting Ethiopians where they already are: online, scrolling, and ready to buy. Optimize for mobile, dominate local SEO, and post that TikTok dance (yes, even if you have two left feet).

      **Need Help?**
      - **Free Tools:** Google Analytics for tracking, Canva for designing ads.
      - **Credible Guides:** Check out Ethiopia’s Digital Transformation Strategy 8 or global tips from HubSpot Blog (non-competitor, promise!).
    `,
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const [email, setEmail] = useState("");

  const post = blogContent.find((item) => item.slug === slug);

  if (!post) {
    return <div className="text-white text-center py-20">Post not found</div>;
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="text-white bg-black min-h-screen overflow-x-hidden box-border">
      {/* Hero Section (Title and Date) */}
      <section className="bg-gradient-to-br from-black via-cultural-red to-red-800 min-h-[40vh] flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-light-gray mt-32 mb-10">
            {post.title}
          </h1>
          <p className="text-gray-400 text-lg">{post.date}</p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 px-4 sm:px-16 md:px-20 lg:px-24">
        {/* Wide Rectangular Image with Increased Height */}
        <div className="flex justify-center mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={1000}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full max-w-4xl h-[400px]"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-4xl mx-auto text-white leading-relaxed">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-12 px-4 sm:px-16 md:px-20 lg:px-24 pt-40 pb-20 bg-black">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 max-w-4xl mx-auto">
          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="bg-gradient-to-br from-black via-cultural-red to-red-800 text-white px-6 py-3 rounded-3xl text-lg font-medium hover:bg-red-800 transition"
          >
            Contact Us
          </Link>

          {/* Other Articles Button */}
          <Link
            href="/blog"
            className="bg-gradient-to-br from-black via-cultural-red to-red-800 text-white px-6 py-3 rounded-3xl text-lg font-medium hover:bg-red-800 transition"
          >
            Other Articles
          </Link>

          {/* Subscribe Section */}
          <form
            onSubmit={handleSubscribe}
            className="flex items-center space-x-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-gray-500 text-white px-4 py-3 rounded-3xl text-lg focus:outline-none focus:ring-2 focus:ring-creative-yellow"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-black via-creative-yellow to-red-800 text-black p-3 rounded-full text-2xl font-medium hover:bg-yellow-500 transition flex items-center justify-center w-12 h-12"
            >
              <span>→</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
