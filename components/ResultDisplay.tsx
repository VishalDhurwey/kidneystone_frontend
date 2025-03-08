'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";

// Function to determine severity based on stone size
const getSeverity = (size: number) => {
  if (size < 2) return "Mild";
  if (size >= 2 && size < 4) return "Moderate";
  if (size >= 4 && size <= 10) return "Serious";
  return "Critical";
};

// Function to determine surgery recommendation
const getSurgeryRecommendation = (largestSize: number) => {
  if (largestSize < 2) return "Home remedies";
  if (largestSize >= 2 && largestSize < 4) return "Home remedies, medication";
  if (largestSize >= 4 && largestSize <= 10) return "Home remedies, medication, medical procedures (ESWL or Ureteroscopy)";
  return "Surgery (URSL, RIRS, PCNL)";
};

export default function ResultDisplay() {
  const searchParams = useSearchParams();
  const [image, setImage] = useState<string | null>(null);

  // Fetch image from localStorage
  useEffect(() => {
    const storedImage = localStorage.getItem("predictedImageBase64");
    if (storedImage) {
      setImage(storedImage);
    } else {
      console.error("No predicted image found in localStorage");
    }
  }, []);

  const imageUrl = image ? `data:image/jpeg;base64,${image}` : "/placeholder.svg";
  


  // Extract detected stones
  const stones = [];
  let index = 1;
  let largestSize = 0;

  while (searchParams.get(`stone_${index}_size`)) {
    const size = parseFloat(searchParams.get(`stone_${index}_size`) || "0");
    const location = searchParams.get(`stone_${index}_location`) || "Unknown";
    const severity = getSeverity(size);

    stones.push({ size, location, severity });

    if (size > largestSize) {
      largestSize = size;
    }

    index++;
  }

  // Determine the final surgery recommendation
  const surgerySuggestion = getSurgeryRecommendation(largestSize);

  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Print-only header */}
      <div className="hidden print:block print:mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Kidney Stone Analysis Report</h1>
          <p className="text-gray-600 mt-2">Report Generated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="print-content">
        <h2 className="text-2xl font-bold mb-4 text-center screen-only">Analysis Result</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start print:gap-8">
          {/* Image Section */}
          <div className="relative">
            <Image 
              src={imageUrl} 
              alt="Analyzed Ultrasound" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-md print:shadow-none" 
            />
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <Table className="border border-gray-300 dark:border-gray-700 rounded-lg print:border-black">
              <TableHeader>
                <TableRow className="bg-gray-200 dark:bg-gray-800 print:bg-gray-100">
                  <TableHead className="print:text-black">Stone #</TableHead>
                  <TableHead className="print:text-black">Size (mm)</TableHead>
                  <TableHead className="print:text-black">Location</TableHead>
                  <TableHead className="print:text-black">Severity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stones.length > 0 ? (
                  stones.map((stone, idx) => (
                    <TableRow key={idx} className="even:bg-gray-100 dark:even:bg-gray-800 print:even:bg-gray-50">
                      <TableCell className="print:text-black">{idx + 1}</TableCell>
                      <TableCell className="print:text-black">{stone.size} mm</TableCell>
                      <TableCell className="print:text-black">{stone.location}</TableCell>
                      <TableCell className="print:text-black">{stone.severity}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-500 print:text-black">
                      No stones detected.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 print:text-black">Medical Recommendation</h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md print:bg-transparent print:border print:border-gray-300">
                <p className="print:text-black">{surgerySuggestion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Non-fixed position */}
        <div className="mt-8 flex items-center justify-between print:hidden">
          <motion.button
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: -5 }}
            onClick={() => window.history.back()}
          >
            Back to Scan Upload
          </motion.button>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.print()}
            >
              Print Report
            </motion.button>

            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Kidney Stone Analysis Results',
                    text: 'Check out my kidney stone analysis results',
                    url: window.location.href
                  });
                }
              }}
            >
              Share Results
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
