import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFF] via-white to-[#F2F3FC] border-b border-slate-100">
      {/* Subtle diagonal soft lavender shape on the right matching mockup */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[52%] bg-gradient-to-bl from-[#E9ECFF]/80 via-[#F1F3FF]/60 to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#111827] leading-[1.14]">
              Explore. Analyze.
              <br />
              Unlock{' '}
              <span className="bg-gradient-to-r from-[#5B46F6] to-[#4F46E5] bg-clip-text text-transparent">
                Insights.
              </span>
            </h1>

            <p className="text-lg sm:text-[19px] text-slate-600 max-w-lg leading-relaxed font-normal">
              Enterprise Data Discovery &amp; Intelligence Platform for smarter decisions.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="px-7 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#5B46F6] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] rounded-lg shadow-md shadow-indigo-500/25 transition-all"
              >
                Get Started Free
              </Link>
              <Link
                href="#features"
                className="px-7 py-3.5 text-[15px] font-semibold text-[#4F46E5] bg-white border border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50/40 rounded-lg shadow-2xs transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Isometric Illustration Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <svg
                viewBox="0 0 560 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-sm"
                role="img"
                aria-label="Isometric Enterprise Database and Analytics Illustration"
              >
                <defs>
                  {/* Cylinder & Glass Gradients */}
                  <linearGradient id="dbBody" x1="210" y1="150" x2="350" y2="310" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#4338CA" />
                  </linearGradient>
                  <linearGradient id="dbTop" x1="220" y1="130" x2="340" y2="185" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C7D2FE" />
                    <stop offset="100%" stopColor="#818CF8" />
                  </linearGradient>
                  <linearGradient id="platformGrad" x1="150" y1="240" x2="410" y2="380" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E0E7FF" />
                  </linearGradient>
                  <linearGradient id="cardGlass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#EEF2FF" stopOpacity="0.88" />
                  </linearGradient>
                  <linearGradient id="lensGrad" x1="370" y1="310" x2="430" y2="370" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.55" />
                  </linearGradient>
                </defs>

                {/* Isometric Base Platform */}
                <g>
                  <polygon
                    points="280,220 435,305 280,390 125,305"
                    fill="url(#platformGrad)"
                    stroke="#C7D2FE"
                    strokeWidth="2"
                  />
                  <polygon
                    points="125,305 280,390 280,404 125,319"
                    fill="#C7D2FE"
                  />
                  <polygon
                    points="435,305 280,390 280,404 435,319"
                    fill="#A5B4FC"
                  />
                  {/* Inner Glow Ring */}
                  <ellipse cx="280" cy="305" rx="95" ry="52" fill="#EEF2FF" stroke="#A5B4FC" strokeWidth="1.5" />
                </g>

                {/* Back Left Floating Analytics Card */}
                <g transform="translate(150, 75)">
                  <rect x="0" y="0" width="115" height="78" rx="10" fill="url(#cardGlass)" stroke="#C7D2FE" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="4" fill="#818CF8" />
                  <rect x="26" y="13" width="45" height="6" rx="3" fill="#CBD5E1" />
                  <path d="M16 55 L38 40 L60 47 L85 28 L100 34" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="85" cy="28" r="3.5" fill="#4F46E5" />
                </g>

                {/* Top Right Floating Bar Chart Card */}
                <g transform="translate(355, 52)">
                  <rect x="0" y="0" width="145" height="98" rx="12" fill="url(#cardGlass)" stroke="#C7D2FE" strokeWidth="1.5" />
                  <rect x="16" y="16" width="52" height="7" rx="3.5" fill="#A5B4FC" />
                  {/* Bars */}
                  <rect x="20" y="56" width="10" height="26" rx="3" fill="#A5B4FC" />
                  <rect x="36" y="44" width="10" height="38" rx="3" fill="#818CF8" />
                  <rect x="52" y="34" width="10" height="48" rx="3" fill="#4F46E5" />
                  <rect x="68" y="48" width="10" height="34" rx="3" fill="#6366F1" />
                  <rect x="84" y="38" width="10" height="44" rx="3" fill="#818CF8" />
                  {/* Side mini lines */}
                  <rect x="104" y="42" width="24" height="5" rx="2.5" fill="#CBD5E1" />
                  <rect x="104" y="54" width="18" height="5" rx="2.5" fill="#CBD5E1" />
                  <rect x="104" y="66" width="22" height="5" rx="2.5" fill="#CBD5E1" />
                </g>

                {/* Front Left Floating Chart Card */}
                <g transform="translate(72, 175)">
                  <rect x="0" y="0" width="138" height="94" rx="12" fill="url(#cardGlass)" stroke="#C7D2FE" strokeWidth="1.5" />
                  <rect x="16" y="15" width="46" height="6" rx="3" fill="#94A3B8" />
                  <rect x="18" y="54" width="9" height="24" rx="2.5" fill="#93C5FD" />
                  <rect x="33" y="42" width="9" height="36" rx="2.5" fill="#6366F1" />
                  <rect x="48" y="32" width="9" height="46" rx="2.5" fill="#4F46E5" />
                  <rect x="63" y="48" width="9" height="30" rx="2.5" fill="#818CF8" />
                  <rect x="78" y="38" width="9" height="40" rx="2.5" fill="#6366F1" />
                  <circle cx="110" cy="54" r="14" stroke="#6366F1" strokeWidth="5" strokeDasharray="55 35" />
                </g>

                {/* Right Middle Floating Card */}
                <g transform="translate(375, 175)">
                  <rect x="0" y="0" width="128" height="86" rx="12" fill="url(#cardGlass)" stroke="#C7D2FE" strokeWidth="1.5" />
                  <rect x="16" y="14" width="40" height="6" rx="3" fill="#A5B4FC" />
                  <rect x="18" y="48" width="8" height="22" rx="2" fill="#818CF8" />
                  <rect x="31" y="36" width="8" height="34" rx="2" fill="#4F46E5" />
                  <rect x="44" y="44" width="8" height="26" rx="2" fill="#6366F1" />
                  <rect x="57" y="30" width="8" height="40" rx="2" fill="#818CF8" />
                  <rect x="76" y="38" width="34" height="5" rx="2.5" fill="#CBD5E1" />
                  <rect x="76" y="50" width="26" height="5" rx="2.5" fill="#CBD5E1" />
                </g>

                {/* Central 3D Layered Database Cylinder */}
                <g>
                  {/* Shadow under cylinder */}
                  <ellipse cx="280" cy="306" rx="74" ry="34" fill="#4338CA" fillOpacity="0.18" />

                  {/* Bottom Tier */}
                  <path
                    d="M214 252 V288 C214 304 243.5 317 280 317 C316.5 317 346 304 346 288 V252 Z"
                    fill="url(#dbBody)"
                  />
                  <ellipse cx="280" cy="252" rx="66" ry="28" fill="#818CF8" stroke="#C7D2FE" strokeWidth="1.5" />

                  {/* Middle Tier */}
                  <path
                    d="M214 206 V242 C214 258 243.5 271 280 271 C316.5 271 346 258 346 242 V206 Z"
                    fill="url(#dbBody)"
                  />
                  <ellipse cx="280" cy="206" rx="66" ry="28" fill="#818CF8" stroke="#C7D2FE" strokeWidth="1.5" />

                  {/* Top Tier */}
                  <path
                    d="M214 160 V196 C214 212 243.5 225 280 225 C316.5 225 346 212 346 196 V160 Z"
                    fill="url(#dbBody)"
                  />
                  <ellipse cx="280" cy="160" rx="66" ry="28" fill="url(#dbTop)" stroke="#E0E7FF" strokeWidth="2" />

                  {/* Subtle Data Status Dots on Cylinder */}
                  <circle cx="242" cy="192" r="3" fill="#E0E7FF" />
                  <circle cx="252" cy="196" r="3" fill="#C7D2FE" />
                  <circle cx="242" cy="238" r="3" fill="#E0E7FF" />
                  <circle cx="252" cy="242" r="3" fill="#C7D2FE" />
                  <circle cx="242" cy="284" r="3" fill="#E0E7FF" />
                  <circle cx="252" cy="288" r="3" fill="#C7D2FE" />
                </g>

                {/* Bottom Left Mini Data Card */}
                <g transform="translate(155, 315)">
                  <rect x="0" y="0" width="90" height="52" rx="8" fill="url(#cardGlass)" stroke="#C7D2FE" strokeWidth="1.5" />
                  <circle cx="24" cy="26" r="11" stroke="#4F46E5" strokeWidth="4" strokeDasharray="45 25" />
                  <rect x="44" y="19" width="32" height="5" rx="2.5" fill="#94A3B8" />
                  <rect x="44" y="29" width="22" height="5" rx="2.5" fill="#CBD5E1" />
                </g>

                {/* Bottom Right Magnifying Glass (Search Symbol) */}
                <g>
                  {/* Handle */}
                  <line
                    x1="428"
                    y1="364"
                    x2="472"
                    y2="396"
                    stroke="#4338CA"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <line
                    x1="428"
                    y1="364"
                    x2="472"
                    y2="396"
                    stroke="#6366F1"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  {/* Lens Rim */}
                  <circle
                    cx="402"
                    cy="344"
                    r="34"
                    fill="url(#lensGrad)"
                    stroke="#4F46E5"
                    strokeWidth="6"
                  />
                  {/* Lens Reflection */}
                  <path
                    d="M385 332 A22 22 0 0 1 408 322"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </g>

                {/* Floating Isometric Data Cubes */}
                <g fill="#818CF8" opacity="0.85">
                  <polygon points="105,135 117,128 129,135 117,142" fill="#C7D2FE" />
                  <polygon points="105,135 117,142 117,155 105,148" fill="#818CF8" />
                  <polygon points="129,135 117,142 117,155 129,148" fill="#6366F1" />

                  <polygon points="485,295 495,289 505,295 495,301" fill="#C7D2FE" />
                  <polygon points="485,295 495,301 495,312 485,306" fill="#818CF8" />
                  <polygon points="505,295 495,301 495,312 505,306" fill="#6366F1" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}