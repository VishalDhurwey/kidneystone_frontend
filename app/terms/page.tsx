"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const termsSections = [
  {
    title: "1. Introduction",
    content: `
      Our aim is to keep this Agreement as readable as possible, but in some cases for legal reasons, some language is required to be formal.
      This Terms of Service document was generated specifically for KidneyScan AI, outlining our policies and user responsibilities.
    `,
  },
  {
    title: "2. Your Acceptance of this Agreement",
    content: `
      By using KidneyScan AI, you accept and agree to abide by these Terms of Service and our Privacy Policy.
      If you do not agree, you must not use this service.
      \n\nBY ACCESSING AND USING THIS WEBSITE, YOU:
      - Agree to be bound by these Terms of Service.
      - Confirm that you are of legal age to form a binding contract.
      - Acknowledge that accessing KidneyScan AI from a restricted jurisdiction is at your own risk.
    `,
  },
  {
    title: "3. Prohibited Uses",
    content: `
      You agree not to use KidneyScan AI:
      - For any unlawful purposes, including violating health privacy regulations.
      - To harm or exploit others, including minors.
      - To transmit spam, phishing attempts, or malware.
      - To impersonate KidneyScan AI staff or manipulate platform data.
      - To interfere with the service operation via hacking or unauthorized access.
    `,
  },
  {
    title: "4. Security & Responsibilities",
    content: `
      You are responsible for securing your account, device, and internet connection.
      We take necessary security measures, but we cannot guarantee absolute protection.
    `,
  },
  {
    title: "5. Medical Disclaimer",
    content: `
      KidneyScan AI provides AI-assisted analysis of kidney scans but does not replace professional medical advice.
      Always consult a qualified healthcare provider for diagnosis and treatment decisions.
    `,
  },
  {
    title: "6. Data Privacy & Compliance",
    content: `
      We are committed to protecting your personal data. By using KidneyScan AI, you agree to our data collection and usage policies outlined in our Privacy Policy.
      \n\nWe comply with:
      - HIPAA (Health Insurance Portability and Accountability Act)
      - GDPR (General Data Protection Regulation) for EU users
      - Other applicable data protection laws
    `,
  },
  {
    title: "7. Account Termination & Suspension",
    content: `
      We reserve the right to suspend or terminate your account if you violate these Terms of Service.
      Reasons for termination may include, but are not limited to:
      - Breach of these Terms
      - Unauthorized use of KidneyScan AI
      - Attempting to manipulate or reverse-engineer the platform
      - Harassment of other users or staff
    `,
  },
  {
    title: "8. Intellectual Property Rights",
    content: `
      KidneyScan AI and its associated content, including logos, algorithms, and user interface designs, are the intellectual property of KidneyScan AI.
      \n\nUsers may not:
      - Copy, distribute, or reproduce any content without permission
      - Modify or create derivative works from KidneyScan AI’s platform
    `,
  },
  {
    title: "9. Limitation of Liability",
    content: `
      KidneyScan AI is provided on an "as is" basis without warranties of any kind.
      We are not responsible for:
      - Any inaccuracies in AI-generated results
      - Technical issues or service interruptions
      - Any direct or indirect damages resulting from the use of this platform
    `,
  },
  {
    title: "10. Governing Law & Dispute Resolution",
    content: `
      These Terms of Service shall be governed by and interpreted in accordance with the laws of [Your Country/State].
      Any disputes shall be resolved through arbitration or courts in [Your Jurisdiction].
    `,
  },
  {
    title: "11. Changes to Terms",
    content: `
      KidneyScan AI reserves the right to update these Terms of Service at any time.
      Continued use of the platform after updates signifies your acceptance of the new terms.
    `,
  },
];

export default function TermsPage() {
  const [openSections, setOpenSections] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections(openSections === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>

    {/* Importing the Header */}
      <Header />

      <div className="container mx-auto px-6 py-16 max-w-4xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">Terms of Service</h1>
        <p className="text-gray-600 text-center mb-10">Last Updated: 06/20/2024</p>

        <div className="space-y-4">
          {termsSections.map((section, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center text-left py-4 text-lg font-semibold text-primary"
              >
                {section.title}
                {openSections === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSections === index && (
                <p className="text-gray-700 px-4 pb-4 whitespace-pre-line">{section.content}</p>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-10">
          For inquiries, contact{" "}
          <a href="mailto:support@kidneyscanai.com" className="text-blue-600 hover:underline">
            support@kidneyscanai.com
          </a>
        </p>
      </div>

    {/* Importing the Footer */}
      <Footer />

    </div>
  );
}
