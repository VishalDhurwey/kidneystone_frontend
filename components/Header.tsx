import Link from "next/link"
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn("bg-primary text-primary-foreground", className)}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/kidney-icon.png" 
            alt="Kidney Icon"
            width={32} 
            height={32} 
            priority 
          />
          <span className="text-2xl font-bold">KidneyScan AI</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/upload" className="hover:text-secondary transition-colors">
              Scan
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className="hover:text-secondary transition-colors">
              How it works!
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-secondary transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="hover:text-secondary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
