import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-primary text-primary-foreground py-6", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-bold mb-2">KidneyScan AI</h3>
            <p className="text-sm text-primary-foreground/80">
              Advanced AI-powered kidney stone detection and analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-primary-foreground/80">Email: </span>
                <a href="mailto:info@kidneyscanai.com" className="text-primary-foreground hover:underline">
                  info@kidneyscanai.com
                </a>
              </p>
              <p>
                <span className="text-primary-foreground/80">Phone: </span>
                <a href="tel:+11234567890" className="text-primary-foreground hover:underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-4 border-t border-primary-foreground/20 text-center">
          <p className="text-xs text-primary-foreground/70">
            &copy; {new Date().getFullYear()} KidneyScan AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
