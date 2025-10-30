import { useState } from "react";
import KPIWidget from "../components/KPIWidget";

export default function ProfileDashboard() {
  const [mode, setMode] = useState("Customer");

  const managerKPIs = [
    { label: "Experience Index (EXI)", value: "8.7" },
    { label: "Capital Elasticity", value: "1.4x" },
    { label: "Digital Funnel Health", value: "92%" },
    { label: "Sustainability ROI", value: "27%" },
  ];

  return (
    <div className="p-5 pb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Profile Dashboard</h2>
        <button
          className="bg-[#F16623] text-white px-3 py-1 rounded-full text-sm"
          onClick={() => setMode(mode === "Customer" ? "Manager" : "Customer")}
        >
          Switch to {mode === "Customer" ? "Manager" : "Customer"}
        </button>
      </div>

      {mode === "Customer" ? (
        <p className="text-gray-600">
          Welcome back! Track your dining and delivery experiences here.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {managerKPIs.map((kpi) => (
            <KPIWidget key={kpi.label} {...kpi} />
          ))}
        </div>
      )}
    </div>
  );
}
