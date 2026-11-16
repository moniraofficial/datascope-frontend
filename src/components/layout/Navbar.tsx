'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Logo />
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side: Login & Get Started Buttons */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-3.5">
            <Link
              href="/login"
              className="px-5 py-2.5 text-[15px] font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-2xs"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#5B46F6] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] rounded-lg shadow-sm shadow-indigo-500/20 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-2.5 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-2.5 text-[15px] font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-2.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#5B46F6] to-[#4F46E5] rounded-lg shadow-sm transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}