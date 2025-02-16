"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white text-black">
      

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center ">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          How KidneyScan AI Works
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="mt-3 text-lg text-gray-600"
        >
          A step-by-step guide on how our AI-powered detection system operates.
        </motion.p>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10">Step-by-Step Process</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            { title: "1. Upload Ultrasound Image", text: "Users upload their kidney ultrasound images through our secure platform." },
            { title: "2. AI-Powered Analysis", text: "Our deep learning model processes the image to detect kidney stones with high accuracy." },
            { title: "3. Get Instant Results", text: "The system provides a detailed report with insights and severity analysis." },
            { title: "4. Expert Consultation", text: "Users can consult a specialist based on the AI’s findings for further advice." }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-200 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white text-center py-12 mt-17">
        <h2 className="text-3xl font-bold">Try KidneyScan AI Today</h2>
        <p className="mt-3 text-lg text-gray-300">Get accurate kidney stone detection in seconds.</p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/upload">
            <span className="mt-5 inline-block bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-all">
              Upload Your Scan
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
