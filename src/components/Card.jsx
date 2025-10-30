import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  title,
  subtitle,
  to = "/home",
  icon = null,
  accent = "#F16623",
}) {
  return (
    <Link to={to} className="block">
      <div className="bg-white rounded-2xl p-4 card-shadow hover:scale-[1.01] transition-transform duration-200">
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-lg"
            style={{ border: `1px solid ${accent}` }}
          >
            {icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#3A3A3A]">{title}</div>
            {subtitle && (
              <div className="text-xs text-slate-500">{subtitle}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
