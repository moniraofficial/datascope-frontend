import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="w-full bg-white pt-6 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6355F8] via-[#4F46E5] to-[#5B3B9C] px-6 sm:px-12 lg:px-16 py-10 sm:py-12 shadow-[0_20px_45px_rgba(79,70,229,0.22)]">
          {/* Subtle Decorative Background Circles matching mockup */}
          <div
            className="pointer-events-none absolute -left-12 -top-16 h-64 w-64 rounded-full bg-white/[0.06]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.05]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            {/* Left Side: White Outlined 4-Bar Chart Icon + Text */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
              {/* Custom 4-Bar Outline SVG matching mockup */}
              <div className="shrink-0 text-white/95" aria-hidden="true">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="7"
                    y="29"
                    width="5.5"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                  <rect
                    x="16.5"
                    y="20"
                    width="5.5"
                    height="21"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                  <rect
                    x="26"
                    y="11"
                    width="5.5"
                    height="30"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                  <rect
                    x="35.5"
                    y="24"
                    width="5.5"
                    height="17"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-snug">
                  Ready to unlock the power of your data?
                </h2>
                <p className="text-sm sm:text-[15px] text-indigo-100/90 mt-1.5 font-normal">
                  Join thousands of teams using DataScope for smarter decisions.
                </p>
              </div>
            </div>

            {/* Right Side: White Pill CTA Button */}
            <div className="shrink-0">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1E293B] hover:text-[#4F46E5] hover:bg-indigo-50 text-[15px] font-semibold shadow-md transition-all group"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 text-[#4F46E5] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}