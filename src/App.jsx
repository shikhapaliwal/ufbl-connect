import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import SmartKitchenMap from "./pages/SmartKitchenMap";
import ExperienceBooking from "./pages/ExperienceBooking";
import WalletScreen from "./pages/WalletScreen";
import ProfileDashboard from "./pages/ProfileDashboard";
import NavBar from "./components/NavBar";

function AppLayout() {
  const loc = useLocation();
  // Show bottom nav on all pages except /splash
  const showNav = loc.pathname !== "/splash" && loc.pathname !== "/";
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/map" element={<SmartKitchenMap />} />
        <Route path="/experiences" element={<ExperienceBooking />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>

      {showNav && <NavBar />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/ufbl-connect">
      <AppLayout />
    </BrowserRouter>
  );
}
