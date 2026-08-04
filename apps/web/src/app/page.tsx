import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-900 dark:text-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SportsHub Live
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#live" className="hover:text-blue-600 transition-colors">Live Scores</Link>
            <Link href="#matches" className="hover:text-blue-600 transition-colors">Matches</Link>
            <Link href="#news" className="hover:text-blue-600 transition-colors">News</Link>
            <Link href="#videos" className="hover:text-blue-600 transition-colors">Videos</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-blue-600 transition-colors">Login</Link>
            <Link href="/signup" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Sign Up</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 space-y-16">
        
        {/* Live Score Ticker */}
        <section className="w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-lg p-2 flex items-center shadow-sm">
          <span className="text-xs font-bold uppercase text-red-600 px-3 border-r border-zinc-300 dark:border-zinc-600">Live</span>
          <div className="animate-marquee whitespace-nowrap pl-4 text-sm font-medium">
            IND 150/2 (20.0) vs AUS 149/8 (20.0) • Local Club XI 120/5 vs Metro CC 118/10 • ...
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-12 md:p-24 shadow-2xl flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            The Ultimate Sports <br className="hidden md:block"/> Ecosystem
          </h1>
          <p className="relative z-10 text-lg md:text-xl text-blue-100 max-w-2xl mb-10">
            From international spectacles to your local club tournaments, follow live scores, manage careers, and stay updated with the fastest enterprise sports platform.
          </p>
          <div className="relative z-10 flex gap-4">
            <Link href="/matches" className="bg-white text-indigo-900 font-bold px-8 py-3 rounded-full hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Explore Matches</Link>
            <Link href="/signup" className="bg-transparent border border-white/30 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-all">Get Started</Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Live Matches */}
          <div className="lg:col-span-2 space-y-8">
            <section id="live" className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Featured Live Matches
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">T20 World Cup</span>
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>IND</span>
                      <span>150/2 <span className="text-sm font-normal text-zinc-500">(20.0)</span></span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg text-zinc-500">
                      <span>AUS</span>
                      <span>149/8 <span className="text-sm font-normal">(20.0)</span></span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700 text-sm font-medium text-blue-600">
                    India won by 8 wickets
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">Local Club Trophy</span>
                    <span className="text-xs font-medium text-red-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Metro CC</span>
                      <span>85/4 <span className="text-sm font-normal text-zinc-500">(12.4)</span></span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Village XI</span>
                      <span>Yet to bat</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700 text-sm font-medium text-zinc-500">
                    Metro CC chose to bat
                  </div>
                </div>
              </div>
            </section>

            {/* Videos & Highlights */}
            <section id="videos" className="space-y-4">
              <h2 className="text-2xl font-bold">Videos & Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="group relative rounded-xl overflow-hidden cursor-pointer aspect-video bg-zinc-200 dark:bg-zinc-800">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-medium line-clamp-2">Match Highlights: Thrilling final over finish in District Finals</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Player Rankings */}
            <section className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700">
              <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                Top Players
                <Link href="/rankings" className="text-sm text-blue-600 hover:underline">View All</Link>
              </h3>
              <div className="space-y-4">
                {[1,2,3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 text-center font-bold text-zinc-400">{i}</span>
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                    <div>
                      <p className="font-medium text-sm">Player Name</p>
                      <p className="text-xs text-zinc-500">850 pts • Batsman</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Recent News */}
            <section className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700">
              <h3 className="text-lg font-bold mb-4">Latest News</h3>
              <div className="space-y-4">
                {[1,2,3].map((i) => (
                  <Link href={`/news/${i}`} key={i} className="block group">
                    <p className="font-medium text-sm group-hover:text-blue-600 transition-colors line-clamp-2">Local League announces expansion to 16 teams for the upcoming summer season.</p>
                    <p className="text-xs text-zinc-500 mt-1">2 hours ago</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-12 py-12">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>© 2026 SportsHub Live. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
