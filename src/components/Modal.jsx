import React from "react";
import { X } from "lucide-react";

export default function Modal({
  open = true,
  title = "",
  children,
  onClose = () => {},
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl p-4 animate-slideUp">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-slate-400 hover:text-[#F16623]"
        >
          <X size={18} />
        </button>
        {title && (
          <div className="text-lg font-semibold text-[#3A3A3A] mb-2">
            {title}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
