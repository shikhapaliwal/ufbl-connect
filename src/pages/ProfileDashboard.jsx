import React, { useState } from "react";
import KPIWidget from "../components/KPIWidget";
import profile from "../data/profile.json";

export default function ProfileDashboard() {
  const [mode, setMode] = useState(
    profile.role === "manager" ? "Manager" : "Customer"
  );
  const KPIS = profile.KPIs;

  return (
    <div className="min-h-screen pb-28 bottom-spacer">
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500">Profile</div>
            <div className="text-lg font-semibold">{profile.name}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-slate-500">Mode</div>
            <div className="bg-white p-1 rounded-full shadow">
              <button
                onClick={() =>
                  setMode(mode === "Customer" ? "Manager" : "Customer")
                }
                className="px-3 py-1 text-xs"
              >
                {mode}
              </button>
            </div>
          </div>
        </div>

        {mode === "Customer" ? (
          <div className="mt-6 space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="text-sm font-semibold">Loyalty Tier</div>
              <div className="text-xs text-slate-500 mt-2">
                Gold • 12 months
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="text-sm font-semibold">Recent Activity</div>
              <div className="text-xs text-slate-500 mt-2">
                Booked: Chef Table • Earned 60 coins
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <KPIWidget
                label="EXI"
                value={`${KPIS.EXI}`}
                note="Experience Index"
              />
              <KPIWidget
                label="CapElastic"
                value={`${KPIS.CapitalElasticity}`}
                note="Capital Elasticity"
              />
            </div>
            <div className="mt-2 bg-white rounded-2xl p-4 shadow">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">
                  Digital Funnel Health
                </div>
                <div className="text-xs text-slate-500">
                  {KPIS.FunnelHealth}%
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Quick view of conversion & engagement — static demo
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Sustainability ROI</div>
                <div className="text-xs text-slate-500">
                  {KPIS.SustainabilityROI}%
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Shows impact of green initiatives on margins
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
