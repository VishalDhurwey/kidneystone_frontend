'use client';

import { Inter } from "next/font/google"
import Header from "@/components/Header"
import ImageUpload from "@/components/ImageUpload"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function UploadPage() {
  return (
    <main className={`min-h-screen flex flex-col ${inter.className}`}>
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-8 flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          <ImageUpload />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
