"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutDashboard, GraduationCap, LucideTvMinimalPlay } from "lucide-react"; // ✅ Import icon từ Lucide

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Classes", href: "/classes", icon: GraduationCap },
    { name: "Live", href: "/live", icon: LucideTvMinimalPlay }, // ✅ Thêm mục Live
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-4 sticky top-0 overflow-y-auto">
      <nav className="space-y-4">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 p-2 rounded transition-colors ${
                isActive ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5" /> {/* ✅ Hiển thị icon */}
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
