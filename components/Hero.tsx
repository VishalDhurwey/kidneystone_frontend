"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const blogPosts = [
    { 
      title: "How AI is Revolutionizing Kidney Stone Diagnosis", 
      image: "/images/AI revolution kidney.jpg", 
      slug: "ai-revolution-kidney-stones",
      content: "AI is transforming kidney stone detection by leveraging deep learning models..."
    },
    { 
      title: "Understanding Kidney Stones: Causes & Prevention", 
      image: "/images/prevention.jpg", 
      slug: "kidney-stone-causes-prevention",
      content: "Kidney stones are caused by various factors including diet and dehydration..."
    },
    // { 
    //   title: "When Should You See a Doctor for Kidney Stones?", 
    //   image: "/images/doctor.jpg", 
    //   slug: "when-to-see-doctor-kidney-stones",
    //   content: "If you experience severe pain, nausea, or blood in urine, seek medical help immediately."
    // },
    // { 
    //   title: "From Ultrasound to AI: A Deep Dive into Kidney Stone Detection", 
    //   image: "/images/ultrasound-ai.jpg", 
    //   slug: "ultrasound-ai-kidney-stones",
    //   content: "How AI enhances ultrasound image interpretation for accurate kidney stone detection..."
    // },
    // { 
    //   title: "Do You Need Surgery? How AI Can Predict Kidney Stone Severity", 
    //   image: "/images/surgery-ai.jpg", 
    //   slug: "ai-kidney-stone-severity",
    //   content: "AI-based severity assessment helps determine if surgery is necessary..."
    // },
    // { 
    //   title: "KidneyScan AI: How Our Technology Works", 
    //   image: "/images/kidneyscan-tech.jpg", 
    //   slug: "kidneyscan-ai-technology",
    //   content: "A behind-the-scenes look at how KidneyScan AI detects kidney stones..."
    // },
    // { 
    //   title: "AI vs. Human Radiologists: Who Detects Kidney Stones Better?", 
    //   image: "/images/ai-vs-radiologist.jpg", 
    //   slug: "ai-vs-human-kidney-stones",
    //   content: "Comparing AI performance with radiologists in kidney stone detection..."
    // },
    // { 
    //   title: "Early Detection of Kidney Stones: How AI Can Prevent Painful Surgeries", 
    //   image: "/images/early-detection.jpg", 
    //   slug: "early-detection-ai-kidney-stones",
    //   content: "The importance of early detection and how AI plays a crucial role..."
    // },
    // { 
    //   title: "AI in Healthcare: The Future of Kidney Disease Detection Beyond Stones", 
    //   image: "/images/ai-healthcare.jpg", 
    //   slug: "ai-future-kidney-detection",
    //   content: "Exploring AI’s potential in detecting kidney diseases beyond stones..."
    // }
  ];
  

  const testimonials = [
    { quote: "AI-powered diagnosis has improved early detection rates significantly.", author: "Dr. Jane Smith" },
    { quote: "With AI, we can analyze ultrasound scans faster and more accurately.", author: "Dr. John Doe" }
  ];

  const [currentPost, setCurrentPost] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto change blog posts every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      nextPost();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPost]);

  const nextPost = () => setCurrentPost((prev) => (prev + 1) % blogPosts.length);
  const prevPost = () => setCurrentPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="bg-secondary text-secondary-foreground py-20 relative"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">AI-Powered Kidney Stone Detection</h1>
          <p className="text-xl mb-8">Explore AI-driven insights for kidney stone diagnosis.</p>
          <Link href="/upload" className="hover:text-secondary">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-lg">Get Started</Button>
          </Link> 
        </div>
      </motion.section>

      {/* AI Benefits Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-center mb-10"
    >
      Why AI for Kidney Stone Detection?
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {[
        { title: "High Accuracy", text: "AI-driven models analyze ultrasound scans with precision, reducing misdiagnosis." },
        { title: "Fast Diagnosis", text: "AI enables real-time detection, helping doctors make quicker decisions." },
        { title: "Early Detection", text: "Detects kidney stones at an early stage, preventing severe complications." }
      ].map((benefit, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="p-6 bg-gray-100 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Blog Slider */}
      <section className="py-16 px-6 bg-gray-50 relative">
  <h2 className="text-3xl font-bold text-center mb-8">Latest Insights</h2>

  {/* Wrapper to ensure arrows are inside the relative parent */}
  <div className="relative w-full max-w-3xl mx-auto overflow-visible">
    {/* Blog Content */}
    <motion.div
      key={currentPost}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 p-6 bg-white rounded-lg shadow-lg"
      style={{ minHeight: "280px" }} // Prevent flickering
    >
      <Image
        src={blogPosts[currentPost].image}
        alt={blogPosts[currentPost].title}
        width={250}
        height={250}
        className="rounded-lg shadow-lg md:w-1/2"
      />
      <div className="md:w-1/2">
        <h3 className="text-xl font-semibold">{blogPosts[currentPost].title}</h3>
        <p className="mt-3 text-gray-700">{blogPosts[currentPost].content}</p>
        <Link href={`/blog/${blogPosts[currentPost].slug}`} className="text-black-800 mt-3 inline-block font-medium">
          Read More →
        </Link>
      </div>
    </motion.div>

    {/* Navigation Buttons (Absolute Position, Bigger Size) */}
    <button
      onClick={prevPost}
      className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 bg-white-500 text-black p-4 rounded-full hover:bg-gray-100 transition z-20 shadow-lg"
    >
      ←
    </button>

    <button
      onClick={nextPost}
      className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 bg-white-500 text-black p-4 rounded-full hover:bg-gray-100 transition z-20 shadow-lg"
    >
      →
    </button>
  </div>
</section>



      {/* AI & Technology Highlights */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold">How AI Helps in Detection</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">Our cutting-edge AI model leverages deep learning to analyze ultrasound images with remarkable precision. By identifying kidney stones with high accuracy, it assists doctors in making faster and more reliable diagnoses.</p>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6">What Experts Say</h2>
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative flex justify-center items-center h-10"> {/* Fixed height ensures arrows are centered */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="italic text-lg">“{testimonials[currentTestimonial].quote}”</p>
            <span className="block mt-2 font-semibold">— {testimonials[currentTestimonial].author}</span>
          </motion.div>
        </div>

        {/* Navigation Buttons (Fixed Center Positioning) */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition"
        >
          →
        </button>
      </div>
    </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-black text-white text-center mt-5">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="mt-4 ">Get the latest AI and kidney health insights directly to your inbox.</p>
        <input type="email" placeholder="Enter your email" className="mt-4 px-4 py-2 rounded-md text-black" />
        <button className="ml-2 px-6 py-2 bg-gray-700 text-white rounded-md">Subscribe</button>
      </section>
    </div>
  );
}
