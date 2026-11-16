import Link from 'next/link';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

export default function Logo({ className = '', textClassName = 'text-slate-900' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
 
      <div className="flex items-end gap-[3px] h-6">
        <span className="w-[3.5px] h-3.5 rounded-full bg-indigo-500 transition-all duration-300 group-hover:h-4" />
        <span className="w-[3.5px] h-5 rounded-full bg-indigo-600 transition-all duration-300 group-hover:h-6" />
        <span className="w-[3.5px] h-6 rounded-full bg-[#4F46E5] transition-all duration-300 group-hover:h-5" />
        <span className="w-[3.5px] h-4 rounded-full bg-indigo-500 transition-all duration-300 group-hover:h-5" />
      </div>
      <span className={`text-xl font-bold tracking-tight ${textClassName}`}>
        DataScope
      </span>
    </Link>
  );
}