export default function AdminDashboard() {
  const cards = [
    { title: "Authentication", count: "1,245 Users", color: "bg-blue-500", desc: "Manage Roles, Sessions & OTP" },
    { title: "Players", count: "4,500 Profiles", color: "bg-indigo-500", desc: "Stats, Medical, Transfer History" },
    { title: "Tournaments", count: "32 Active", color: "bg-purple-500", desc: "Fixtures, Points Table, Knockouts" },
    { title: "Matches", count: "12 Live", color: "bg-pink-500", desc: "Scorecards, Commentary, Graphs" },
    { title: "Local Cricket", count: "15 Leagues", color: "bg-rose-500", desc: "Village, Club & Corporate" },
    { title: "News & CMS", count: "124 Articles", color: "bg-orange-500", desc: "SEO, Pages, Sponsors" },
    { title: "Advertisement", count: "$12.4k Rev", color: "bg-green-500", desc: "Campaigns, Banners, Analytics" },
    { title: "Notifications", count: "89k Sent", color: "bg-teal-500", desc: "Push, SMS, Email, WhatsApp" },
    { title: "Reports & Analytics", count: "15k Visitors", color: "bg-cyan-500", desc: "Revenue, Devices, Geography" },
    { title: "Settings", count: "System", color: "bg-slate-500", desc: "API Keys, SMTP, Firebase" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-zinc-500">Welcome back to the SportsHub Enterprise Management portal.</p>
        </div>
        <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg font-medium shadow-sm hover:opacity-90 transition-opacity">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform`}>
                <span className="text-white font-bold text-xl">{card.title.charAt(0)}</span>
              </div>
              <span className="text-sm font-semibold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full">{card.count}</span>
            </div>
            <h3 className="font-bold text-lg mb-1">{card.title}</h3>
            <p className="text-sm text-zinc-500 line-clamp-2">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
