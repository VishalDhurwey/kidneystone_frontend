'use client';

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/app/data/blogPosts";

const inter = Inter({ subsets: ["latin"] });

export default function BlogPage() {
  return (
    <main className={`min-h-screen flex flex-col ${inter.className}`}>
      <Header />

      <div className="flex-1 bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold mb-4">KidneyScan AI Blog</h1>
              <p className="text-xl opacity-90">
                Stay informed about kidney health, technology, and breakthrough research
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
