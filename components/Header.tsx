"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LS</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">LegalStart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
              How It Works
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors">
              FAQ
            </a>
            <button className="text-gray-700 hover:text-primary-600 transition-colors">
              Sign In
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-primary-600 transition-colors">
              How It Works
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-primary-600 transition-colors">
              FAQ
            </a>
            <button className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors">
              Sign In
            </button>
            <button className="btn-primary w-full">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
