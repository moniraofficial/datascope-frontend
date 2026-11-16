export default function TrustedOrganizations() {
  return (
    <section className="w-full bg-white py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#F2F3FB] border border-indigo-100/60 px-6 sm:px-12 py-9 sm:py-11">
          <p className="text-center text-sm sm:text-[15px] font-bold text-[#1E293B] tracking-tight mb-8">
            Trusted by Leading Organizations
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center text-[#687096]">
            {/* Google */}
            <div className="opacity-85 hover:opacity-100 transition-opacity select-none">
              <span className="text-2xl font-semibold tracking-tight font-sans">Google</span>
            </div>

            {/* Microsoft */}
            <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity select-none">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="9" height="9" />
                <rect x="13" y="2" width="9" height="9" />
                <rect x="2" y="13" width="9" height="9" />
                <rect x="13" y="13" width="9" height="9" />
              </svg>
              <span className="text-[19px] font-semibold tracking-tight">Microsoft</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity select-none">
              <svg
                className="w-7 h-5 stroke-current fill-none"
                strokeWidth="2.4"
                viewBox="0 0 36 22"
                aria-hidden="true"
              >
                <path d="M9.5 17.5C5.5 17.5 3 14.8 3 11.2C3 7.4 6 4.5 9.8 4.5C13.2 4.5 15.5 7 18 11C20.5 7 22.8 4.5 26.2 4.5C30 4.5 33 7.4 33 11.2C33 14.8 30.5 17.5 26.5 17.5C23.4 17.5 21.2 15.6 18 11C14.8 15.6 12.6 17.5 9.5 17.5Z" />
              </svg>
              <span className="text-[20px] font-semibold tracking-tight">Meta</span>
            </div>

            {/* Amazon */}
            <div className="flex flex-col items-center opacity-85 hover:opacity-100 transition-opacity select-none">
              <span className="text-[21px] font-bold tracking-tight leading-none">amazon</span>
              <svg
                className="w-14 h-2.5 stroke-current fill-none -mt-0.5"
                strokeWidth="2"
                strokeLinecap="round"
                viewBox="0 0 64 12"
                aria-hidden="true"
              >
                <path d="M6 3 C20 11, 42 11, 56 3" />
                <path d="M51 2 L57 3 L54 8" />
              </svg>
            </div>

            {/* Adobe */}
            <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity select-none">
              <svg className="w-6 h-5 fill-current" viewBox="0 0 28 24" aria-hidden="true">
                <polygon points="0,0 10.5,0 0,24" />
                <polygon points="17.5,0 28,0 28,24" />
                <polygon points="14,9 20.5,24 16,24 14,19 9.5,19" />
              </svg>
              <span className="text-[20px] font-bold tracking-tight">Adobe</span>
            </div>

            {/* Spotify */}
            <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity select-none">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.58 14.42a.62.62 0 0 1-.86.2c-2.35-1.44-5.31-1.76-8.8-.96a.62.62 0 1 1-.28-1.22c3.82-.87 7.1-.5 9.74 1.12.3.18.39.57.2.86zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.16a.78.78 0 1 1-.45-1.49c3.63-1.1 8.15-.57 11.23 1.32.37.22.49.7.26 1.07zm.11-2.83C14.69 8.95 9.37 8.77 6.3 9.7a.94.94 0 1 1-.54-1.8c3.53-1.07 9.4-.86 13.11 1.34a.94.94 0 0 1-.96 1.63z" />
              </svg>
              <span className="text-[19px] font-bold tracking-tight">Spotify</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}