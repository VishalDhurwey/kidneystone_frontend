import { Inter } from "next/font/google"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ImageUpload from "../components/ImageUpload"
// import ResultDisplay from "../components/ResultDisplay"
// import DoctorRecommendation from "../components/DoctorRecommendation"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Header />
      <Hero />
      {/* <div className="container mx-auto px-4 py-8">
        <ImageUpload />
        <ResultDisplay />
        <DoctorRecommendation />
      </div> */}
      <Footer />
    </main>
  )
}

