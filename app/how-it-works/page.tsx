import { Inter } from "next/font/google"
import Header from "@/components/Header" // Use absolute imports if configured
import ResultDisplay from "@/components/ResultDisplay"
// import DoctorRecommendation from "@/components/DoctorRecommendation"
import Footer from "@/components/Footer"
import HowItWorks from "@/components/howitworks"

const inter = Inter({ subsets: ["latin"] })

export default function ResultsPage() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Header />
      <HowItWorks />
      
      <Footer />
    </main>
  )
}
