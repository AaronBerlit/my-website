"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Terminal, LayoutDashboard, BrainCircuit, FileText, Mail } from "lucide-react";

const navItems = [
  { name: "Projects", path: "/projects", icon: LayoutDashboard },
  { name: "Lab Notes", path: "/lab", icon: Terminal },
  { name: "About", path: "/about", icon: FileText },
  { name: "Contact", path: "/contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-neutral-800 bg-neutral-950 flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="p-6 pb-2 border-b border-neutral-800 mb-4 h-24 flex items-center">
        <Link href="/" className="flex items-center gap-3 group px-1 w-full">
          <div className="p-2 bg-neutral-900 border border-neutral-700 rounded-lg group-hover:border-primary/50 transition-colors flex-shrink-0">
            <BrainCircuit className="w-6 h-6 text-primary" />
          </div>
          <div className="min-w-0">
            <h1 className="font-bold text-lg text-neutral-100 tracking-tight truncate">Aaron Berlit</h1>
            <p className="text-[10px] text-neutral-500 font-mono tracking-widest truncate mt-0.5 uppercase">Digital_Lab.exe</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 font-mono text-sm overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== "/");
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 relative group",
                isActive ? "text-primary bg-primary/10" : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-r-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-neutral-500 group-hover:text-neutral-300")} />
              <span className="tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-neutral-800 mt-auto bg-neutral-950/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono bg-neutral-900/50 px-3 py-2 rounded-md border border-neutral-800">
          <span className="w-2 h-2 rounded-full bg-primary/80 shadow-[0_0_8px_rgba(13,240,211,0.6)] animate-pulse" />
          SYSTEM_ONLINE
        </div>
      </div>
    </aside>
  );
}
