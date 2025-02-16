"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ResultDisplay from "@/components/ResultDisplay";
import DoctorRecommendation from "@/components/DoctorRecommendation";
import { ChatBot } from "@/components/ChatBot";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function ResultsPage() {
  // Fix hydration mismatch by ensuring client-side rendering
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className={`min-h-screen flex flex-col ${inter.className}`}>
      <Header className="print:hidden" />
      <div className="flex-1 container mx-auto max-w-7xl px-4 py-8">
        <div className="space-y-8">
          {/* Scan Results */}
          <div className="rounded-lg border p-6">
            {isClient ? <ResultDisplay /> : <LoadingPlaceholder />}
          </div>

          {/* Doctor Recommendation and Chatbot */}
          <div className="space-y-8 print:hidden">
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Doctor's Recommendation</h2>
                <div className="h-[500px] rounded-lg border p-4">
                  {isClient ? <DoctorRecommendation /> : <LoadingPlaceholder />}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">AI Health Assistant</h2>
                <div className="h-[500px]">
                  {isClient ? <ChatBot /> : <LoadingPlaceholder />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="print:hidden" />

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-content, .print-content * {
            visibility: visible;
          }
          .print-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}

// Placeholder to prevent hydration mismatch
function LoadingPlaceholder() {
  return <div className="text-gray-500 text-center">Loading...</div>;
}
