'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // State untuk toggle menu dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">CompanyLogo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex-1 flex justify-center space-x-6 hidden md:flex">
          <Link
            href="#home"
            className="text-gray-600 hover:text-blue-600 font-semibold transition"
          >
            Home
          </Link>
          <Link
            href="#product"
            className="text-gray-600 hover:text-blue-600 font-semibold transition"
          >
            Product
          </Link>
          <Link
            href="#about"
            className="text-gray-600 hover:text-blue-600 font-semibold transition"
          >
            About Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start px-4 py-2 space-y-2">
            <li>
              <Link
                href="#home"
                className="text-gray-600 hover:text-blue-600 font-semibold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#product"
                className="text-gray-600 hover:text-blue-600 font-semibold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-600 hover:text-blue-600 font-semibold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
