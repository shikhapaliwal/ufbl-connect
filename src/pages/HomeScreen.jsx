import React from "react";
import Card from "../components/Card";
import KPIWidget from "../components/KPIWidget";
import { Coffee, Truck, Leaf } from "lucide-react";

export default function HomeScreen() {
  const name = "Shikha"; // read from profile.json optionally
  const kpis = [
    { label: "EXI", value: "78.4", note: "Experience Index" },
    { label: "Funnel", value: "63%", note: "Digital Funnel" },
    { label: "SROI", value: "12.6%", note: "Sustainability ROI" },
  ];

  return (
    <div className="min-h-screen pb-28 bottom-spacer">
      <div className="max-w-md mx-auto px-4 pt-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-slate-600">Good Evening,</div>
            <div className="text-xl font-semibold">
              {`Good Evening, ${name} `} <span>👋</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-white rounded-xl card-shadow flex items-center justify-center">
            <div className="text-slate-600">{`${name[0]}`}</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <Card
            title="Dine-In Experiences"
            subtitle="Curated in-restaurant journeys"
            to="/experiences"
            icon={<Coffee size={18} />}
          />
          <Card
            title="Delivery Brands"
            subtitle="Cloud kitchens & delivery"
            to="/map"
            icon={<Truck size={18} />}
          />
          <Card
            title="Sustainability Hub"
            subtitle="ESG initiatives & rewards"
            to="/wallet"
            icon={<Leaf size={18} />}
          />
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-slate-700">
            Today’s highlights
          </h3>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {kpis.map((k) => (
              <KPIWidget key={k.label} {...k} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
