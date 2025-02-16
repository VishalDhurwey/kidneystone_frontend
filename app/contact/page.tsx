"use client";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function ContactUs() {
  return (
    <div className={`min-h-screen bg-white text-black ${inter.className}`}>
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 py-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-3 text-lg text-gray-600"
        >
          We would love to hear from you. Reach out with any questions or feedback!
        </motion.p>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto bg-gray-200 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold">Message</label>
              <textarea
                rows={5}
                placeholder="Enter your message"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <motion.button
            //   whileHover={{ scale: 1.05 }}
            //   whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
