import { useState } from "react";

const NAV_LINKS = [
  { label: "Job Bootcamp", hasDropdown: true },
  { label: "IT Certifications", hasDropdown: true },
];

const STATS = [
  { value: "1200+", label: "Hiring Partners" },
  { value: "10L+", label: "Students Enrolled" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "95%", label: "Placement Rate" },
];

const COURSES = [
  {
    tag: "Bestseller",
    title: "Full Stack Web Development",
    rating: 4.8,
    reviews: "12k",
    price: "₹4,999",
    original: "₹9,999",
    icon: "💻",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    tag: "Trending",
    title: "Data Structures & Algorithms",
    rating: 4.9,
    reviews: "18k",
    price: "₹3,999",
    original: "₹7,999",
    icon: "🧠",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    tag: "New",
    title: "Machine Learning & AI",
    rating: 4.7,
    reviews: "8k",
    price: "₹5,999",
    original: "₹11,999",
    icon: "🤖",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    tag: "Popular",
    title: "System Design Masterclass",
    rating: 4.8,
    reviews: "6k",
    price: "₹4,499",
    original: "₹8,999",
    icon: "⚙️",
    color: "from-green-500/20 to-green-600/5",
  },
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "SDE at Google",
    text: "Coding Ninjas completely transformed my career. The structured curriculum and mentor support helped me crack Google in 6 months.",
    avatar: "RS",
    color: "bg-orange-500",
  },
  {
    name: "Priya Patel",
    role: "Backend Dev at Amazon",
    text: "The job bootcamp is incredible. From zero to Amazon in under a year. The placement team was with me every step of the way.",
    avatar: "PP",
    color: "bg-blue-500",
  },
  {
    name: "Arjun Mehta",
    role: "ML Engineer at Microsoft",
    text: "Best platform for serious learners. The DSA course alone got me multiple top-tier offers. Highly recommended!",
    avatar: "AM",
    color: "bg-purple-500",
  },
];

const COMPANIES = ["Google", "Amazon", "Microsoft", "Flipkart", "Uber", "Adobe", "Walmart", "Zomato"];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CodingNinjasClone() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-[#0d0d0d] text-white font-sans min-h-screen" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-orange-500 text-white text-center text-xs sm:text-sm py-2 px-4 font-medium">
        🚀 Limited Seats Left! Job Bootcamp 2025 — <span className="underline cursor-pointer font-bold">Apply Now</span>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">CN</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                coding<span className="text-orange-500">ninjas</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button key={link.label} className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Login</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors">
                Sign Up Free
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/5 px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <button key={link.label} className="block text-gray-300 text-sm font-medium w-full text-left py-2">
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button className="text-gray-300 text-sm font-medium text-left py-2">Login</button>
              <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md w-full">Sign Up Free</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 px-4">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-orange-400 font-semibold text-sm sm:text-base tracking-wider uppercase mb-4">
            Restricted by opportunities?
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Get the tech career<br />
            <span className="text-white">you deserve.</span>{" "}
            <span className="text-orange-500">Faster.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Structured coding courses that get you there faster with confidence.
            Learn from industry experts and land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-base transition-all hover:scale-105 flex items-center justify-center gap-2">
              Explore offerings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all hover:bg-white/5">
              Watch Demo
            </button>
          </div>

          {/* Trusted by */}
          <p className="text-gray-500 text-sm mt-10 mb-4">Trusted by students placed at</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {COMPANIES.map((c) => (
              <span key={c} className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wide bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#161616] border-y border-white/5 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Courses built for <span className="text-orange-500">careers</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Industry-aligned curriculum designed with top engineers from FAANG companies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COURSES.map((course) => (
              <div key={course.title} className={`bg-gradient-to-br ${course.color} border border-white/10 rounded-2xl p-5 hover:border-orange-500/50 transition-all hover:-translate-y-1 cursor-pointer group`}>
                <div className="text-3xl mb-3">{course.icon}</div>
                <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">
                  {course.tag}
                </span>
                <h3 className="text-white font-bold text-base mt-3 mb-2 leading-snug group-hover:text-orange-400 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={course.rating} />
                  <span className="text-yellow-400 text-xs font-semibold">{course.rating}</span>
                  <span className="text-gray-500 text-xs">({course.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">{course.price}</span>
                  <span className="text-gray-500 text-sm line-through">{course.original}</span>
                </div>
                <button className="mt-4 w-full bg-white/10 hover:bg-orange-500 text-white text-sm font-semibold py-2 rounded-lg transition-all">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-lg text-sm transition-all">
              View All Courses →
            </button>
          </div>
        </div>
      </section>

      {/* JOB BOOTCAMP SECTION */}
      <section className="bg-[#161616] py-16 sm:py-20 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Job Bootcamp</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              From learning to <span className="text-orange-500">landing</span><br />your dream job
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Our Job Bootcamp is a comprehensive program designed to take you from a beginner to job-ready in months.
              Get personalized mentorship, mock interviews, and dedicated placement support.
            </p>
            <ul className="space-y-3 mb-8">
              {["Live classes with industry mentors", "1:1 mock interview sessions", "Resume & LinkedIn profile review", "Dedicated placement team support"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-5 h-5 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-lg transition-all hover:scale-105">
              Apply for Bootcamp →
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-md">
            {[
              { icon: "🎯", title: "Goal Setting", desc: "Define your target companies" },
              { icon: "📚", title: "Structured Learning", desc: "Follow curated curriculum" },
              { icon: "🧑‍💻", title: "Mock Interviews", desc: "Practice with experts" },
              { icon: "🚀", title: "Get Placed", desc: "Land your dream offer" },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-all">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">Success Stories</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Students who <span className="text-orange-500">made it</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#161616] border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-orange-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed italic">"{t.text}"</p>
                <StarRating rating={5} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
          </div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Start your journey today
            </h2>
            <p className="text-orange-100 text-base mb-8 max-w-xl mx-auto">
              Join 10L+ students who have transformed their careers with Coding Ninjas. First lesson is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-orange-500 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-all">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
                Talk to Counselor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">CN</span>
                </div>
                <span className="text-white font-bold text-lg">coding<span className="text-orange-500">ninjas</span></span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                India's premier coding education platform. Empowering developers to build successful tech careers.
              </p>
            </div>
            {[
              { title: "Courses", links: ["Web Development", "DSA", "Machine Learning", "System Design"] },
              { title: "Company", links: ["About Us", "Blog", "Careers", "Press"] },
              { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-bold text-sm mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">© 2025 Coding Ninjas. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-gray-600 hover:text-orange-400 text-xs transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
