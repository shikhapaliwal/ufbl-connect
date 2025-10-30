import React from "react";

export default function KPIWidget({ label, value, note }) {
  return (
    <div className="min-w-[120px] bg-white rounded-xl p-3 card-shadow flex flex-col gap-1">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-lg font-bold text-[#3A3A3A]">{value}</div>
      {note && <div className="text-xs text-slate-400">{note}</div>}
    </div>
  );
}
