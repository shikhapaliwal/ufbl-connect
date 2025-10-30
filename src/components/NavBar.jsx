import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Map, Wallet, User } from "lucide-react";

export default function NavBar() {
  const loc = useLocation();
  const items = [
    { to: "/home", icon: <Home size={18} />, label: "Home" },
    { to: "/map", icon: <Map size={18} />, label: "Map" },
    { to: "/wallet", icon: <Wallet size={18} />, label: "Wallet" },
    { to: "/profile", icon: <User size={18} />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-lg p-2 flex justify-between items-center z-40">
      {items.map((it) => {
        const active = loc.pathname === it.to;
        return (
          <Link key={it.to} to={it.to} className="flex-1">
            <div
              className={`flex flex-col items-center text-[11px] ${
                active ? "text-[#F16623]" : "text-slate-500"
              }`}
            >
              <div className="p-2 rounded-md">{it.icon}</div>
              <div className="mt-0.5">{it.label}</div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
