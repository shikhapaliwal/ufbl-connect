import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import mapData from "../data/mapData.json";
import TransitionWrapper from "../components/TransitionWrapper";

// Custom colored marker icons
const iconColors = {
  dinein: "#16a34a", // green
  hybrid: "#eab308", // yellow
  cloud: "#3b82f6", // blue
};

// Create dynamic circle markers
const createIcon = (color) =>
  L.divIcon({
    html: `<span style="display:inline-block;width:14px;height:14px;background:${color};border-radius:50%;border:2px solid white;box-shadow:0 0 2px rgba(0,0,0,0.4);"></span>`,
    className: "",
    iconSize: [16, 16],
  });

export default function SmartKitchenMap() {
  const [filter, setFilter] = useState("all");
  const filteredPins = mapData.filter((m) =>
    filter === "all" ? true : m.type === filter
  );

  const defaultCenter = [20.5937, 78.9629]; // India center

  return (
    <div className="min-h-screen pb-28 bottom-spacer">
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Smart Kitchen Map</div>
          <div className="text-sm text-slate-500">Real map • India</div>
        </div>

        {/* Filter buttons */}
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {["all", "dinein", "hybrid", "cloud"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-xs px-3 py-2 rounded-full transition-all ${
                filter === t
                  ? "bg-white shadow text-[#F16623]"
                  : "bg-white/60 text-slate-600"
              }`}
            >
              {t === "all"
                ? "All"
                : t === "dinein"
                ? "🟢 Dine-In"
                : t === "hybrid"
                ? "🟡 Hybrid"
                : "🔵 Cloud"}
            </button>
          ))}
        </div>

        <TransitionWrapper className="mt-4">
          <div className="bg-white rounded-2xl shadow p-3 h-[360px] overflow-hidden">
            <MapContainer
              center={defaultCenter}
              zoom={5}
              style={{ height: "100%", width: "100%", borderRadius: "12px" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {filteredPins.map((p) => (
                <Marker
                  key={p.id}
                  position={[p.lat, p.lng]}
                  icon={createIcon(iconColors[p.type] || "#F16623")}
                >
                  <Popup>
                    <div className="text-xs">
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-slate-500">
                        {p.type.toUpperCase()}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </TransitionWrapper>

        <div className="mt-3 text-xs text-slate-500">
          Legend: 🟢 Dine-In • 🟡 Hybrid • 🔵 Cloud Kitchen
        </div>
      </div>
    </div>
  );
}
