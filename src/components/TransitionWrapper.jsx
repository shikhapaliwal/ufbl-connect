import React from "react";

/* Lightweight wrapper to apply unified animations */
export default function TransitionWrapper({ children, className = "" }) {
  return <div className={`animate-fadeIn ${className}`}>{children}</div>;
}
