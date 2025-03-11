"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import { motion } from "framer-motion";

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    // 🧹 Clear previous result
    localStorage.removeItem("predictedImageBase64");
    const url = new URL(window.location.href);
    url.search = ""; // Clear query params
    window.history.replaceState({}, document.title, url.toString());

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Only image files are allowed.");
        return;
      }

      // Validate file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB.");
        return;
      }

      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("https://kidneystone-backend.onrender.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === "success") {
        const { predicted_image, detections, surgerySuggestion } = response.data;

        // ✅ Store the Base64 image in `localStorage` (prevents URL truncation)
        localStorage.setItem("predictedImageBase64", predicted_image);
        // console.log(localStorage.getItem("predictedImageBase64"));

        // ✅ Construct URL with only small-sized parameters
        const searchParams = new URLSearchParams({
          surgerySuggestion,
        });

        detections.forEach((stone: any, index: number) => {
          searchParams.append(`stone_${index + 1}_size`, stone.size_mm.toString());
          searchParams.append(`stone_${index + 1}_location`, stone.location);
          searchParams.append(`stone_${index + 1}_severity`, stone.severity);
        });

        // ✅ Redirect without long Base64 string in URL
        router.push(`/results?${searchParams.toString()}`);
      } else {
        setError(response.data.error || "An unknown error occurred.");
      }
    } catch (error) {
      setError("Error uploading image. Please try again.");
      console.error("Upload error:", error);
    }

    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Ultrasound Image</h2>
      {error && <Alert variant="destructive">{error}</Alert>}

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image Preview with Animation */}
        {preview ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img src={preview} alt="Preview" className="w-64 h-64 object-cover rounded-lg shadow-md border border-gray-300" />
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="w-64 h-64 flex items-center justify-center bg-gray-100 border border-dashed border-gray-400 rounded-lg text-gray-500"
          >
            Upload image to preview
          </motion.div>
        )}

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full md:w-1/2">
          <Input type="file" accept="image/*" onChange={handleFileChange} />
          <motion.div 
            whileTap={{ scale: 0.95 }} 
            whileHover={{ scale: 1.05 }}
          >
            <Button type="submit" disabled={!selectedFile || loading} className="w-full">
              {loading ? "Processing..." : "Analyze Image"}
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}
