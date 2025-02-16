"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

const privacySections = [
  {
    title: "1. About this Policy",
    content: `
      This Privacy Policy explains how KidneyScan AI collects, uses, and protects your personal data.
      By using our services, you agree to the data practices described in this Policy.
    `,
  },
  {
    title: "2. Your Personal Data Rights and Controls",
    content: `
      You have the right to:
      - Access and request a copy of your personal data.
      - Correct any inaccurate or incomplete data.
      - Request data deletion where applicable.
      - Restrict or object to data processing.
      - Withdraw consent for data usage.
    `,
  },
  {
    title: "3. Personal Data We Collect About You",
    content: `
      We collect the following types of data:
      - Account information (name, email, etc.).
      - Health-related images and scan data uploaded by users.
      - Device and usage data, including cookies and analytics.
    `,
  },
  {
    title: "4. Our Purpose for Using Your Personal Data",
    content: `
      We use your data to:
      - Provide AI-assisted kidney scan analysis.
      - Improve the accuracy and performance of our AI models.
      - Ensure compliance with medical regulations.
      - Enhance user experience and security.
    `,
  },
  {
    title: "5. Disclosing Your Personal Data",
    content: `
      We do not sell your personal data.
      However, we may share it with:
      - Healthcare professionals (with your consent).
      - Regulatory bodies to comply with laws.
      - Third-party service providers for infrastructure and security.
    `,
  },
  {
    title: "6. Data Retention",
    content: `
      We retain personal data only as long as necessary for:
      - Providing services.
      - Complying with legal obligations.
      - Research and AI model improvements (anonymized data).
    `,
  },
  {
    title: "7. Transfer to Other Countries",
    content: `
      Your data may be transferred to and stored in different countries.
      We ensure that all transfers comply with data protection laws such as GDPR and HIPAA.
    `,
  },
  {
    title: "8. Keeping Your Personal Data Safe",
    content: `
      We use encryption, secure servers, and other safeguards to protect your data.
      Users are responsible for securing their account credentials.
    `,
  },
  {
    title: "9. Children",
    content: `
      KidneyScan AI is not intended for users under 13.
      If we discover a child has provided personal data, we will delete it immediately.
    `,
  },
  {
    title: "10. Privacy Request Metrics",
    content: `
      We may publish transparency reports on data access and removal requests.
      This ensures accountability in handling privacy-related matters.
    `,
  },
  {
    title: "11. Changes to this Policy",
    content: `
      We may update this Privacy Policy periodically.
      Significant changes will be communicated via email or website notifications.
    `,
  },
  {
    title: "12. How to Contact Us",
    content: `
      For privacy concerns, contact us at:
      Email: privacy@kidneyscanai.com
      Address: [Your Company Address]
    `,
  },
];

export default function PrivacyPage() {
  const [openSections, setOpenSections] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections(openSections === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
    {/* Importing the Header */}
      <Header />
      <div className="container mx-auto px-6 py-16 max-w-4xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">Privacy Policy</h1>
        <p className="text-gray-600 text-center mb-10">Effective as of 31 December 2024</p>

        <div className="space-y-4">
          {privacySections.map((section, index) => (
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
          For privacy inquiries, contact{" "}
          <a href="mailto:privacy@kidneyscanai.com" className="text-blue-600 hover:underline">
            privacy@kidneyscanai.com
          </a>
        </p>
      </div>

    {/* Importing the Footer */}
      <Footer />

    </div>
  );
}
