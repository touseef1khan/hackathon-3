import { ArrowRight, Grid, Heart, List, Share, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sh() {
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
                        <h2 className="text-4xl font-semibold">Shop</h2>
                        <p className="mt-2 text-xl">
                            <Link href={"/"}>Home &gt; </Link>
                            <span className="opacity-70">Shop</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative w-full bg-Creame">
      <div className="py-8 px-4 sm:px-8 w-full items-center">
        {/* Filter and sorting section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center   sm:space-y-0">
          {/* Filter */}
          <div className="flex items-center space-x-2 gap-4">
            <SlidersHorizontal size={24} className="" />
            <p className=" text-sm ">Filter</p>

            {/* View options */}
            <Grid size={24} className="cursor-pointer " />
            <List size={24} className="cursor-pointer " />

            {/* Show results */}
            <div className="flex items-start space-x-2">
              <p className="text-sm ">
                | Showing <span className="font-semibold">1-10</span> of{" "}
                <span className="font-semibold">100</span> results
              </p>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-2 gap-3">
            <p className="text-md ">Show</p>
            <select className=" p-2  text-sm bg-white">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <p className="text-md ">Sort By</p>
            <select className=" p-2 text-sm bg-white">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </section>


      <h2 className="flex justify-center mt-14 mb-8 text-zinc-800 text-4xl font-semibold">
        Our Products
      </h2>

      {/* Wrapper for horizontally scrollable products on mobile */}
      <div className="overflow-x-auto sm:overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 px-4 sm:px-16">
          {/* Product 1 */}
          <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src="/product1.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Add to Cart Button */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>

                {/* Hover Icons (Like and Share) */}
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Syltherine</h3>
              <p className="text-gray-600 mb-4">Stylish cafe chair</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 2.500.000</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            <div className="relative w-full h-64">
              <Image
                src="/product2.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Leviosa</h3>
              <p className="text-gray-600 mb-4">Stylish cafe chair</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 2.50.000</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            <div className="relative w-full h-64">
              <Image
                src="/product3.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Lolito</h3>
              <p className="text-gray-600 mb-4">Luxury big sofa</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 7.000.000</p>
            </div>
          </div>

           {/* Product 4 */}
           <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src="/product4.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Add to Cart Button */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>

                {/* Hover Icons (Like and Share) */}
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Respira</h3>
              <p className="text-gray-600 mb-4">Outdoor bar table and stool</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 500.000</p>
            </div>
          </div>

           {/* Product 5 */}
           <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src="/product1.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Add to Cart Button */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>

                {/* Hover Icons (Like and Share) */}
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Syltherine</h3>
              <p className="text-gray-600 mb-4">Stylish cafe chair</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 2.500.000</p>
            </div>
          </div>

          {/* Product 6 */}
          <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            <div className="relative w-full h-64">
              <Image
                src="/product2.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Leviosa</h3>
              <p className="text-gray-600 mb-4">Stylish cafe chair</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 2.500.000</p>
            </div>
          </div>

          {/* Product 7 */}
          <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            <div className="relative w-full h-64">
              <Image
                src="/product3.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Lolito</h3>
              <p className="text-gray-600 mb-4">Luxury</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 7.000.000</p>
            </div>
          </div>

          {/* Product 8 */}
          <div className="relative group w-full max-w-sm mx-auto overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out">
            <div className="relative w-full h-64">
              <Image
                src="/product4.png"
                alt="Nordic Table"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-Gold px-8 py-4 font-semibold mb-4">
                  Add to cart
                </button>
                <div className="absolute inset-0 flex justify-center items-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                  <button className="text-white hover:text-Gold">
                    <Heart />
                  </button>
                  <button className="text-white hover:text-Gold">
                    <Share />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 text-start">
              <h3 className="text-xl font-medium mb-2 text-zinc-800">Respira</h3>
              <p className="text-gray-600 mb-4">Outdoor bar table stool</p>
              <p className="mb-4 text-zinc-800 text-lg">Rp 500.000</p>
            </div>
          </div>
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
        </>
    )
}