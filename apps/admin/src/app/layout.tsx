import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SportsHub Admin",
  description: "Enterprise Sports Management Admin Dashboard",
};

import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/context/ProtectedRoute";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex min-h-screen`}>
        <AuthProvider>
          <ProtectedRoute>
          {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col shadow-sm hidden md:flex">
          <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SportsHub Admin
            </span>
          </div>
          <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
            <Link href="/" className="px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 font-medium">Dashboard</Link>
            
            <div className="mt-4 mb-2 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Management</div>
            <Link href="/players" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">Players</Link>
            <Link href="/tournaments" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">Tournaments</Link>
            <Link href="/matches" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">Matches</Link>
            <Link href="/local-cricket" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">Local Cricket</Link>
            
            <div className="mt-4 mb-2 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Content</div>
            <Link href="/news" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">News & Articles</Link>
            <Link href="/cms" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">CMS Pages</Link>

            <div className="mt-4 mb-2 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Monetization</div>
            <Link href="/advertisement" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">Advertisements</Link>
            
            <div className="mt-4 mb-2 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Settings</div>
            <Link href="/auth" className="px-4 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">Authentication</Link>
          </nav>
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">A</div>
              <div>
                <p className="text-sm font-bold">Admin User</p>
                <p className="text-xs text-zinc-500">Super Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold">Overview</span>
            </div>
            <div className="flex items-center gap-4">
               <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">🔔</button>
            </div>
          </header>
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">
            {children}
          </main>
        </div>
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
