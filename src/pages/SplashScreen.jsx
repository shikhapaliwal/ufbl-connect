import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SplashScreen() {
  const nav = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => nav("/home"), 2000);
    return () => clearTimeout(t);
  }, [nav]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-28 h-28 bg-white rounded-full card-shadow flex items-center justify-center animate-fadeIn">
          {logo ? (
            <img src={logo} alt="UFBL" className="w-20 h-20 object-contain" />
          ) : (
            <div
              className="text-2xl font-extrabold"
              style={{ color: "var(--accent)" }}
            >
              UFBL
            </div>
          )}
        </div>
        <div
          className="text-center text-slate-700 opacity-90 animate-fadeIn"
          style={{ animationDelay: "160ms" }}
        >
          <div className="text-sm">Experience · Order · Earn</div>
        </div>
      </div>
    </div>
  );
}
