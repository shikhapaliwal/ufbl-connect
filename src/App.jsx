import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import SmartKitchenMap from "./pages/SmartKitchenMap";
import ExperienceBooking from "./pages/ExperienceBooking";
import WalletScreen from "./pages/WalletScreen";
import ProfileDashboard from "./pages/ProfileDashboard";
import NavBar from "./components/NavBar";
import "./App.css";

function Layout() {
  const location = useLocation();
  const showNav = location.pathname !== "/";
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F3]">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/map" element={<SmartKitchenMap />} />
        <Route path="/booking" element={<ExperienceBooking />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/profile" element={<ProfileDashboard />} />
      </Routes>
      {showNav && <NavBar />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
