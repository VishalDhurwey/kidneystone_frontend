"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

// Function to get doctor recommendation based on the largest kidney stone size
const getDoctorRecommendation = (largestSize: number) => {
  if (largestSize < 2) {
    return {
      name: "Dr. Emily Carter",
      specialty: "Nephrologist",
      experience: "12 years",
      imageUrl: "/doctor1.jpg",
      recommendation:
        "Your kidney stone is very small (less than 2mm), and in most cases, such stones pass naturally without the need for medical intervention. Staying well-hydrated is the key to helping the stone pass smoothly. Aim to drink at least 2.5 to 3 liters of water daily. Hydration increases urine flow, which helps flush the stone out. You may also consume citrus drinks like lemon water, as citrate can prevent stone growth. ",
    };
  } else if (largestSize >= 2 && largestSize < 4) {
    return {
      name: "Dr. Daniel Lee",
      specialty: "Urologist",
      experience: "18 years",
      imageUrl: "/doctor2.jpg",
      recommendation:
        "Your kidney stone is small but may require medical assistance. Stay hydrated with at least 3 liters of water per day and reduce sodium intake. Follow a low-oxalate diet (e.g., avoid spinach, beets, nuts). If pain increases or you experience nausea, seek medical attention. Your doctor may prescribe medication to relax the ureter (e.g., tamsulosin) and facilitate stone passage. Schedule a check-up in 2 weeks to monitor progress.",
    };
  } else if (largestSize >= 4 && largestSize <= 10) {
    return {
      name: "Dr. Sarah Johnson",
      specialty: "Endourologist",
      experience: "20 years",
      imageUrl: "/doctor3.jpg",
      recommendation:
       "Your stone is moderately large and may not pass naturally. Pain management is crucial; take prescribed analgesics and drink plenty of water. A follow-up ultrasound or CT scan in 2-3 weeks is recommended to assess stone movement. Minimally invasive procedures such as Shock Wave Lithotripsy (ESWL) or Ureteroscopy (URS) may be required if the stone remains lodged or causes severe pain. Avoid high oxalate foods and increase dietary citrate (e.g., lemon water) to reduce stone growth.",
    };
  } else {
    return {
      name: "Dr. Michael Brown",
      specialty: "Surgical Urologist",
      experience: "25 years",
      imageUrl: "/doctor4.jpg",
      recommendation:
        "Your kidney stone is large and requires medical intervention. Surgical procedures such as Ureteroscopic Lithotripsy (URSL), Retrograde Intrarenal Surgery (RIRS), or Percutaneous Nephrolithotomy (PCNL) are often necessary. Pain management and hydration are critical until surgery. Discuss with your urologist the best surgical approach based on stone location and your overall health. Post-surgery, preventive strategies include dietary modifications, increasing fluid intake, and possibly medication to prevent future stone formation.",
    };
  }
};

export default function DoctorRecommendation() {
  const searchParams = useSearchParams();

  // Extract the largest stone size detected
  let largestSize = 0;
  let index = 1;

  while (searchParams.get(`stone_${index}_size`)) {
    const size = parseFloat(searchParams.get(`stone_${index}_size`) || "0");
    if (size > largestSize) {
      largestSize = size;
    }
    index++;
  }

  // Get doctor recommendation based on the largest stone size
  const doctor = getDoctorRecommendation(largestSize);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-8"
    >
      <Card className="mb-8 shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
            <AvatarFallback>
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{doctor.name}</CardTitle>
            <CardDescription>
              {doctor.specialty} • {doctor.experience} experience
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {/* <h3 className="text-xl font-semibold mb-2">Doctor's Recommendation</h3> */}
          <p>{doctor.recommendation}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
