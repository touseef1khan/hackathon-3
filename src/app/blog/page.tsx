import React from "react";
import Image from "next/image";
import { BadgeCheck, Calendar, Headset, Package, Tag, Trophy, User } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function BlogSection() {
  // Example data for blogs
  const blogs = [
    {
      id: 1,
      image: "/blog1.png",
      title: "How to Style Your Outfits",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero soluta et minus aspernatur commodi eos, fugiat incidunt!",
      date: "Dec 8, 2024",
      category: "Fashion",
      admin: "Admin",
    },
    {
      id: 2,
      image: "/blog2.png",
      title: "Top Fashion Trends of 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero soluta et minus aspernatur commodi eos, fugiat incidunt!",
      date: "Nov 20, 2024",
      category: "Trends",
      admin: "Admin",
    },
    {
      id: 3,
      image: "/blog3.png",
      title: "10 Tips for a Better Lifestyle",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero soluta et minus aspernatur commodi eos, fugiat incidunt!",
      date: "Oct 15, 2024",
      category: "Lifestyle",
      admin: "Admin",
    },
  ];

  const recentPosts = blogs.slice(0, 2); // Example recent posts

  return (
    <>
     <section className="relative w-full bg-Creame">
      {/* Image container */}
      <div className="relative w-full h-64 ">
        <Image
          src={"/blg.png"}
          alt={"main image"}
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        {/* Text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
          <h2 className="text-4xl font-semibold">Blog</h2>
          <p className="mt-2 text-xl">
            <Link href={"/"}>Home &gt; </Link>
            <span className="opacity-70">Blog</span>
          </p>
        </div>
      </div>
    </section>
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <section className="lg:col-span-2">
          <h1 className="text-4xl font-semibold mb-8">Our Blog</h1>
          <div className="grid gap-8">
            {/* Blog Post */}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden"
              >
                <Image
                  src={blog.image}
                  width={800}
                  height={400}
                  alt={blog.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{blog.admin}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>{blog.category}</span>
                    </div>
                  </div>
                  <button className=" py-2 text-black underline hover:text-gray-900">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <aside className="space-y-8 ">
          {/* Search Bar */}
          <div className="mt-20">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Fashion", "Lifestyle", "Tips", "Sales"].map((category) => (
                <li
                  key={category}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-6">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex gap-4">
                  <Image
                    src={post.image}
                    width={100}
                    height={100}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{post.title}</h4>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>

    <div>
      {/* Page selections */}
      <div className="flex justify-center space-x-2 my-8">
        <button className="w-14 h-14 mx-1 rounded-lg bg-[#B88E2F] text-white hover:bg-gray-300">
          1
        </button>
        <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">
          2
        </button>
        <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">
          3
        </button>
        <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 flex justify-center items-center">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>

    <section className="w-full py-16 bg-[#FAF3EA]">
      <div className="container mx-auto px-6 lg:px-12 ">
        {/* Icons Container */}
        <div className="flex  flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
          {/* Icon 1 */}
          <div className="flex items-center space-x-4">``
            <Trophy strokeWidth={1} className="text-4xl h-14 w-14 text-Gold" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">High Quality</h3>
              <p className="text-gray-600">Crafted from top material</p>
            </div>
          </div>

          {/* Icon 2 */}
          <div className="flex items-center space-x-4">
            <BadgeCheck strokeWidth={1} className="text-4xl h-14 w-14 text-Gold" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Warranty Protection</h3>
              <p className="text-gray-600">Over 2 years.</p>
            </div>
          </div>

          {/* Icon 3 */}
          <div className="flex items-center space-x-4">
            <Package strokeWidth={1} className="text-4xl h-14 w-14 text-Gold" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-gray-600">Order over $150</p>
            </div>
          </div>

          {/* Icon 4 */}
          <div className="flex items-center space-x-4">
            <Headset strokeWidth={1} className="text-4xl h-14 w-14 text-Gold" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default BlogSection;