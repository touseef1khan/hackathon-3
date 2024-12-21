import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { BadgeCheck, Headset, Package, Trophy } from "lucide-react";

export default function Contact() {
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
                        <h2 className="text-4xl font-semibold">Contact</h2>
                        <p className="mt-2 text-xl">
                            <Link href={"/"}>Home &gt; </Link>
                            <span className="opacity-70">Contact</span>
                        </p>
                    </div>
                </div>
            </section>



            <div className="container mx-auto px-4 py-7">
                <div className="text-center my-16">
                    <h1 className="text-4xl font-semibold">Get In Touch With Us</h1>
                    <p className="text-gray-600 mt-4">
                        We&apos;d love to hear from you! Whether you have a question,
                        <br />
                        feedback, or just want to say hello, feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="space-y-8 ml-16">
                        <div className="flex items-center gap-4">
                            <MapPin size={24} className="text-gray-700" />
                            <div>
                                <h3 className="font-bold text-lg">Address</h3>
                                <p className="text-gray-600">
                                    236 5th SE Avenue, New York NY10000, United States
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone size={24} className="text-gray-700" />
                            <div>
                                <h3 className="font-bold text-lg">Phone</h3>
                                <p className="text-gray-600">
                                    +1 Mobile: +(84) 546-6789
                                    <br /> Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Clock size={24} className="text-gray-700" />
                            <div>
                                <h3 className="font-bold text-lg">Working Hours</h3>
                                <p className="text-gray-600">
                                    Monday-Friday: 9:00 - 22:00
                                    <br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Form) */}
                    <div>
                        <form className="space-y-6 gap-8">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Subject"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-8 py-3 text-white bg-Gold rounded-sm"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <section className="w-full py-10 bg-gray-100">
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
    )
}