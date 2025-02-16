"use client";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export default function AboutUs() {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          About KidneyScan AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-3 text-lg text-gray-600"
        >
          Revolutionizing Kidney Stone Detection with AI-powered Ultrasound Analysis.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Empowering early detection and precision care for kidney stone patients using cutting-edge AI technology.
        </p>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "AI-powered Analysis", description: "Accurate detection of kidney stones through ultrasound imaging." },
          { title: "Real-time Segmentation", description: "Precise outlines of detected stones for better diagnostics." },
          { title: "User-friendly Platform", description: "Seamless experience for both patients and healthcare professionals." },
        ].map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
            <p className="text-gray-700">{tech.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Trust Us Section */}
      <section className="bg-gray-100 container mx-auto px-6 py-12 text-center rounded-lg">
        <h2 className="text-3xl font-semibold mb-8">Why Trust Us?</h2>
        <div className="space-y-6">
          {[
            "Research-based development.",
            "Collaborations with healthcare professionals.",
            "High accuracy achieved in internal testing.",
          ].map((point, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-lg text-gray-700"
            >
              {`✔ ${point}`}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Amishi Pathekar", role: "Frontend Developer" },
            { name: "Vishal Dhurwey", role: "Frontend Developer" },
            { name: "Nikhil Mehra", role: "Backend Developer" },
            { name: "Sanath L", role: "Backend Developer" },
            { name: "Dr. John Doe", role: "Medical Consultant" },
            { name: "Emily Johnson", role: "Research Lead" },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white text-center py-12">
        <h2 className="text-3xl font-bold">Ready to Learn More?</h2>
        <p className="mt-3 text-lg text-gray-300">Get accurate kidney stone detection in seconds.</p>
      </section>

      <Footer />
    </div>
  );
}
