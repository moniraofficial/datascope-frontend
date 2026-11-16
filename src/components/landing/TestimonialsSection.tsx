import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      '“DataScope has completely changed the way we work with large datasets. The performance is outstanding!”',
    name: 'Sarah Ahmed',
    role: 'Data Analyst, Google',
    initials: 'SA',
    avatarBg: 'from-indigo-500 to-purple-500',
  },
  {
    quote:
      '“Powerful features, beautiful UI, and excellent support. Highly recommended!”',
    name: 'Daniel Kim',
    role: 'Senior Analyst, Microsoft',
    initials: 'DK',
    avatarBg: 'from-slate-700 to-indigo-600',
  },
  {
    quote:
      '“Finally, a data platform that can handle millions of records without any lag.”',
    name: 'Ayesha Rahman',
    role: 'Data Engineer, Amazon',
    initials: 'AR',
    avatarBg: 'from-violet-600 to-indigo-500',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="about" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-[2px] bg-[#5B46F6] rounded-full" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#5B46F6]">
              WHAT OUR USERS SAY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Trusted by Data Professionals
          </h2>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_40px_rgba(79,70,229,0.08)] hover:border-indigo-100 transition-all duration-300"
            >
              <div>
                {/* Top Row: Soft Lavender Quote Badge + 5 Purple Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#A5B4FC]">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                  </div>

                  {/* 5 Purple Stars */}
                  <div className="flex items-center gap-1 text-[#5B46F6]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-[15px] font-medium text-slate-700 leading-relaxed mb-7">
                  {item.quote}
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-2">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-tr ${item.avatarBg} text-white text-sm font-bold flex items-center justify-center shrink-0 ring-2 ring-indigo-50`}
                >
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827] leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium text-[#6366F1] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}