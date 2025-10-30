import React from "react";
import LineChart from "../components/LineChart";
import wallet from "../data/wallet.json";

export default function WalletScreen() {
  return (
    <div className="min-h-screen pb-28 bottom-spacer">
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500">UFBL Coins</div>
            <div className="text-2xl font-bold">
              {wallet.coins}{" "}
              <span className="text-sm text-slate-500">Coins</span>
            </div>
          </div>
          <div className="p-3 bg-white rounded-xl shadow">
            <svg width="20" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16v10H4z" stroke="#3A3A3A" strokeWidth="1.2" />
            </svg>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl p-3 shadow">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">ESG Badges</div>
            <div className="text-xs text-slate-400">
              Earn more by supporting local
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            {wallet.badges.map((b) => (
              <div
                key={b}
                className="px-3 py-2 bg-amber-50 rounded-lg text-xs font-medium"
              >
                {b}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-3 shadow">
          <div className="text-sm font-semibold">Redeem</div>
          <div className="mt-2 grid gap-2">
            {wallet.redemptions.map((r) => (
              <div
                key={r}
                className="flex items-center justify-between p-3 rounded-lg border"
              >
                <div className="text-xs">{r}</div>
                <button className="text-xs px-3 py-1 rounded-full bg-white shadow">
                  Redeem
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm font-semibold mb-2">Activity</div>
          <div className="bg-white rounded-2xl p-3 shadow text-xs">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
