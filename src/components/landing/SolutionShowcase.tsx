import Link from 'next/link';
import {
  Check,
  ArrowRight,
  LayoutDashboard,
  Database,
  Table2,
  Search,
  Bookmark,
  BarChart2,
  Users,
  Settings,
  Bell,
  FileSpreadsheet,
  ChevronDown,
  PanelLeft,
} from 'lucide-react';

const featurePoints = [
  'Explore millions of records with ease',
  'Apply multiple filters and custom queries',
  'Save your favorite views',
  'Get actionable insights with beautiful charts',
];

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Dataset Library', icon: Database, active: false },
  { name: 'Data Explorer', icon: Table2, active: false },
  { name: 'Advanced Search', icon: Search, active: false },
  { name: 'Saved Views', icon: Bookmark, active: false },
  { name: 'Analytics', icon: BarChart2, active: false },
  { name: 'User Management', icon: Users, active: false },
  { name: 'Settings', icon: Settings, active: false },
];

export default function SolutionShowcase() {
  return (
    <section id="solutions" className="w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Content & Checklist */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-[2px] bg-[#5B46F6] rounded-full" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#5B46F6]">
                POWERFUL FEATURES
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              A Complete Data
              <br />
              Discovery Solution
            </h2>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed">
              From advanced search to in-depth analytics, DataScope provides everything you need to
              explore and manage your data efficiently.
            </p>

            {/* Checklist */}
            <ul className="space-y-3.5 pt-1">
              {featurePoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#5B46F6] text-white flex items-center justify-center shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-[15px] font-medium text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-3">
              <Link
                href="/explorer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#5B46F6] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] rounded-lg shadow-md shadow-indigo-500/25 transition-all group"
              >
                Explore All Features
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Fidelity Dashboard Preview Mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden flex min-h-[430px]">
              {/* Dark Navy Sidebar */}
              <aside className="hidden sm:flex flex-col justify-between w-48 bg-[#15182B] text-slate-300 p-3.5 select-none">
                <div>
                  {/* Mini Logo */}
                  <div className="flex items-center gap-2 px-2 py-2.5 mb-4">
                    <div className="flex items-end gap-[2px] h-4">
                      <span className="w-[2.5px] h-2.5 rounded-full bg-indigo-400" />
                      <span className="w-[2.5px] h-3.5 rounded-full bg-indigo-500" />
                      <span className="w-[2.5px] h-4 rounded-full bg-[#6366F1]" />
                      <span className="w-[2.5px] h-3 rounded-full bg-indigo-400" />
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">DataScope</span>
                  </div>

                  {/* Menu List */}
                  <nav className="space-y-1">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.name}
                          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium ${
                            item.active
                              ? 'bg-gradient-to-r from-[#5B46F6] to-[#4F46E5] text-white shadow-sm'
                              : 'text-slate-400'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </div>
                      );
                    })}
                  </nav>
                </div>

                {/* User Profile Footer in Sidebar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between px-1.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      MA
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-semibold text-white truncate">Monira Akter</p>
                      <p className="text-[9px] text-slate-400 truncate">Data Analyst</p>
                    </div>
                  </div>
                  <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
                </div>
              </aside>

              {/* Main Dashboard Content Preview */}
              <div className="flex-1 bg-[#F8F9FC] flex flex-col">
                {/* Top Preview Header */}
                <div className="h-12 bg-white border-b border-slate-100 px-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 flex-1">
                    <PanelLeft className="w-3.5 h-3.5 text-slate-400" />
                    <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-md px-2.5 py-1 w-full max-w-[210px]">
                      <Search className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] text-slate-400 truncate">
                        Search datasets, records...
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <Bell className="w-3.5 h-3.5 text-slate-500" />
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold flex items-center justify-center">
                      MA
                    </div>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-4 sm:p-5 space-y-4 flex-1">
                  {/* Welcome Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Dashboard</h3>
                      <p className="text-[10px] text-slate-500">
                        Welcome back, Monira! Here&apos;s your data overview.
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1 bg-white border border-slate-200 rounded-md px-2.5 py-1 text-[10px] font-medium text-slate-600 shadow-2xs">
                      <span>Last 30 Days</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>

                  {/* 3 Stat Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Stat 1 */}
                    <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-medium text-slate-500 leading-tight">
                          Total Datasets
                        </p>
                        <p className="text-lg font-extrabold text-slate-900 mt-1">24</p>
                        <p className="text-[9px] font-semibold text-emerald-600 mt-0.5">↑ +12%</p>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#5B46F6] flex items-center justify-center">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-medium text-slate-500 leading-tight">
                          Total Records
                        </p>
                        <p className="text-lg font-extrabold text-[#5B46F6] mt-1">1.2M</p>
                        <p className="text-[9px] font-semibold text-emerald-600 mt-0.5">↑ +18%</p>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                        <FileSpreadsheet className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-medium text-slate-500 leading-tight">
                          Active Users
                        </p>
                        <p className="text-lg font-extrabold text-slate-900 mt-1">842</p>
                        <p className="text-[9px] font-semibold text-emerald-600 mt-0.5">↑ +8%</p>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Data Growth Chart + Recent Activity */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    {/* Data Growth Overview Chart */}
                    <div className="sm:col-span-7 bg-white rounded-xl p-3.5 border border-slate-100 shadow-2xs">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-bold text-slate-800">Data Growth Overview</p>
                        <div className="flex items-center gap-2.5 text-[9px] text-slate-500">
                          <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5B46F6]" />
                            Records
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            Queries
                          </span>
                        </div>
                      </div>

                      {/* Mini SVG Line Chart */}
                      <svg viewBox="0 0 240 105" className="w-full h-28 overflow-visible">
                        <defs>
                          <linearGradient id="areaPurple" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#5B46F6" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#5B46F6" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* Grid lines */}
                        <line x1="25" y1="15" x2="232" y2="15" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="25" y1="42" x2="232" y2="42" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="25" y1="68" x2="232" y2="68" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="25" y1="90" x2="232" y2="90" stroke="#E2E8F0" strokeWidth="1" />

                        {/* Y-axis labels */}
                        <text x="0" y="18" fontSize="7" fill="#94A3B8">750K</text>
                        <text x="0" y="45" fontSize="7" fill="#94A3B8">500K</text>
                        <text x="0" y="71" fontSize="7" fill="#94A3B8">250K</text>
                        <text x="14" y="92" fontSize="7" fill="#94A3B8">0</text>

                        {/* Area & Primary Purple Line */}
                        <path
                          d="M32 76 L64 56 L96 63 L128 45 L160 32 L192 38 L226 18 L226 90 L32 90 Z"
                          fill="url(#areaPurple)"
                        />
                        <path
                          d="M32 76 L64 56 L96 63 L128 45 L160 32 L192 38 L226 18"
                          fill="none"
                          stroke="#5B46F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* Secondary Light Blue Line */}
                        <path
                          d="M32 82 L64 70 L96 74 L128 62 L160 56 L192 58 L226 42"
                          fill="none"
                          stroke="#60A5FA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Dots */}
                        {[
                          [32, 76],
                          [64, 56],
                          [96, 63],
                          [128, 45],
                          [160, 32],
                          [192, 38],
                          [226, 18],
                        ].map(([cx, cy], idx) => (
                          <circle key={idx} cx={cx} cy={cy} r="2.5" fill="#5B46F6" />
                        ))}

                        {/* X-axis days */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                          <text
                            key={day}
                            x={26 + idx * 32}
                            y="102"
                            fontSize="7"
                            fill="#94A3B8"
                          >
                            {day}
                          </text>
                        ))}
                      </svg>
                    </div>

                    {/* Recent Activity */}
                    <div className="sm:col-span-5 bg-white rounded-xl p-3.5 border border-slate-100 shadow-2xs flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-bold text-slate-800">Recent Activity</p>
                        <span className="text-[9px] font-semibold text-[#5B46F6]">View all →</span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-start gap-2">
                          <span className="w-6 h-6 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                            <FileSpreadsheet className="w-3 h-3" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold text-slate-800 truncate">
                              New dataset added
                            </p>
                            <p className="text-[9px] text-slate-500 truncate">Sales_2024 • 2h ago</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Bookmark className="w-3 h-3" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold text-slate-800 truncate">
                              Saved view created
                            </p>
                            <p className="text-[9px] text-slate-500 truncate">
                              Query Dashboard • 3h ago
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Users className="w-3 h-3" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold text-slate-800 truncate">
                              User joined
                            </p>
                            <p className="text-[9px] text-slate-500 truncate">
                              Ahmed Rahman • 5h ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}