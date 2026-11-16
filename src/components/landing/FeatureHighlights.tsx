import { Zap, Search, ShieldCheck, BarChart3, CloudUpload } from 'lucide-react';

const highlights = [
  {
    title: 'Lightning Fast',
    subtitle: 'Performance',
    icon: Zap,
  },
  {
    title: 'Advanced Search',
    subtitle: '& Filtering',
    icon: Search,
  },
  {
    title: 'Role-Based',
    subtitle: 'Access Control',
    icon: ShieldCheck,
  },
  {
    title: 'Powerful Analytics',
    subtitle: '& Insights',
    icon: BarChart3,
  },
  {
    title: 'Scalable Architecture',
    subtitle: 'for Big Data',
    icon: CloudUpload,
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group flex flex-col items-center justify-center text-center bg-[#F4F5FB] hover:bg-[#ECEEFE] border border-indigo-100/60 hover:border-indigo-200 rounded-2xl px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="mb-3.5 text-[#5B46F6] transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="text-[15px] font-bold text-[#1E293B] leading-snug">
                  {item.title}
                  <br />
                  {item.subtitle}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}