import { Home, Map, Wallet, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const links = [
    { path: "/home", icon: <Home size={22} />, label: "Home" },
    { path: "/map", icon: <Map size={22} />, label: "Map" },
    { path: "/wallet", icon: <Wallet size={22} />, label: "Wallet" },
    { path: "/profile", icon: <User size={22} />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t shadow-md flex justify-around py-3">
      {links.map((link) => (
        <Link key={link.path} to={link.path}>
          <div
            className={`flex flex-col items-center text-xs ${
              location.pathname === link.path
                ? "text-[#F16623]"
                : "text-gray-400"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};
export default NavBar;
