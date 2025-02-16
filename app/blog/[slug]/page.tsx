'use client';

import { Inter } from 'next/font/google';
import { notFound, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '@/app/data/blogPosts';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic'; // THIS IS THE KEY

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className={`min-h-screen flex flex-col ${inter.className}`}>
      <Header />

      <article className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-end mb-8">
                <Button
                  className="text-black"
                  variant="outline"
                  onClick={() => router.push('/blog')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </div>

              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  {post.category}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
  <div className="prose prose-lg dark:prose-invert max-w-none">
    <p className="text-xl text-muted-foreground mb-8">
      {post.excerpt}
    </p>

    {post.content.split('\n\n').map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;

      return (
        <div key={index} className="mb-6">
          {trimmed.startsWith('•') ? (
            <ul className="list-disc pl-6">
              {trimmed.split('\n').map((item, i) => (
                <li key={i}>{item.replace('•', '').trim()}</li>
              ))}
            </ul>
          ) : (
            // Split single lines within a paragraph by \n and join with <br />
            <p>
              {trimmed.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line.trim()}
                  {i !== arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
        </div>
      );
    })}
  </div>
</div>

          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
