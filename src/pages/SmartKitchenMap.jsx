import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import mapData from "../data/mapData.json";
import Modal from "../components/Modal";
import TransitionWrapper from "../components/TransitionWrapper";
const kitchenImages = import.meta.glob("/src/assets/kitchens/*.jpg", {
  eager: true,
  import: "default",
});

const iconColors = { dinein: "#16a34a", hybrid: "#eab308", cloud: "#3b82f6" };
const createIcon = (color) =>
  L.divIcon({
    html: `<span style="display:inline-block;width:14px;height:14px;background:${color};border-radius:50%;border:2px solid white;box-shadow:0 0 3px rgba(0,0,0,0.25);"></span>`,
    className: "",
    iconSize: [16, 16],
  });

export default function SmartKitchenMap() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const filtered = mapData.filter((m) =>
    filter === "all" ? true : m.type === filter
  );
  const defaultCenter = [20.5937, 78.9629];

  console.log(Object.keys(kitchenImages));

  return (
    <div className="min-h-screen pb-28 bottom-spacer">
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Smart Kitchen Map</div>
          <div className="text-sm text-slate-500">Interactive • India</div>
        </div>

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
          <div className="bg-white rounded-2xl soft p-3 h-[360px] overflow-hidden">
            <MapContainer
              center={defaultCenter}
              zoom={5}
              style={{ height: "100%", width: "100%", borderRadius: 12 }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {filtered.map((p) => (
                <Marker
                  key={p.id}
                  position={[p.lat, p.lng]}
                  icon={createIcon(iconColors[p.type] || "#F16623")}
                  eventHandlers={{ click: () => setSelected(p) }}
                />
              ))}
            </MapContainer>
          </div>
        </TransitionWrapper>

        <div className="mt-3 text-xs text-slate-500">
          Legend: 🟢 Dine-In • 🟡 Hybrid • 🔵 Cloud Kitchen
        </div>
      </div>

      {/* detail modal */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            {selected.image && (
              <img
                src={kitchenImages[selected.image]}
                alt={selected.name}
                className="w-full h-40 rounded-cover"
              />
            )}
            <div className="mt-3">
              <h3 className="text-lg font-semibold">{selected.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{selected.address}</p>
              <div className="mt-2 text-sm">
                <span className="font-medium">Type:</span> {selected.type}
              </div>
              <div className="text-sm">
                ⭐ <span className="font-medium">{selected.rating}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelected(null)}
                  className="px-3 py-2 rounded-lg border text-sm"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    navigate("/experiences", { state: { prefill: selected } });
                  }}
                  className="px-3 py-2 rounded-lg bg-[linear-gradient(90deg,#F16623,#ff8a4d)] text-white text-sm"
                >
                  Book Experience
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
