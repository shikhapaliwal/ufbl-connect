import React from "react";

/* Very simple SVG line chart (static mock) */
export default function LineChart({ width = "100%", height = 60 }) {
  return (
    <svg viewBox="0 0 100 40" className="w-full h-24">
      <polyline
        fill="none"
        stroke="#F16623"
        strokeWidth="3"
        strokeLinecap="round"
        points="0,30 15,22 30,25 45,12 60,18 75,8 90,14 100,6"
      />
    </svg>
  );
}
