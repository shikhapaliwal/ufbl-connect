import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#FFF9F3]">
      <img src={logo} alt="UFBL Logo" className="w-28 animate-fadeIn" />
      <p className="text-[#3A3A3A] mt-4 text-lg font-medium opacity-80 animate-fadeIn delay-500">
        Experience · Order · Earn
      </p>
    </div>
  );
}
