import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import experiencesList from "../data/experiences.json";

export default function ExperienceBooking() {
  const location = useLocation();
  const prefillKitchen = location.state?.prefill || null;
  const kitchenImages = location.state?.kitchenImages || null;

  const [selected, setSelected] = useState(null);
  const [prefillInfo, setPrefillInfo] = useState(prefillKitchen);

  useEffect(() => {
    if (prefillKitchen) setPrefillInfo(prefillKitchen);
  }, [prefillKitchen]);

  return (
    <div className="min-h-screen pb-28 bottom-spacer">
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Book an Experience</div>
          <div className="text-xs text-slate-500">Limited offers</div>
        </div>

        {/* If navigated from map show kitchen summary */}
        {prefillInfo && (
          <div className="mt-4 bg-white rounded-2xl p-4 soft">
            <div className="flex items-center gap-3">
              {prefillInfo.image ? (
                <img
                  src={kitchenImages[prefillInfo.image]}
                  alt={prefillInfo.name}
                  className="w-14 h-14 rounded-cover"
                />
              ) : (
                <div className="w-14 h-14 bg-slate-100 rounded-cover" />
              )}
              <div>
                <div className="text-sm font-semibold">{prefillInfo.name}</div>
                <div className="text-xs text-slate-500">
                  {prefillInfo.address}
                </div>
                <div className="text-xs mt-1">⭐ {prefillInfo.rating}</div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 space-y-3">
          {experiencesList.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl p-4 card-shadow flex justify-between items-center"
            >
              <div>
                <div className="text-sm font-semibold">{exp.title}</div>
                <div className="text-xs text-slate-500">
                  {exp.price} •{" "}
                  <span className="text-amber-600 font-medium">{exp.tag}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => setSelected(exp)}
                  className="px-3 py-2 rounded-full bg-[linear-gradient(90deg,#F16623,#ff8a4d)] text-white text-sm shadow"
                >
                  Book Now
                </button>
                <div className="text-xs text-slate-500">Seats limited</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        <div className="text-sm text-slate-600 mb-4">
          {prefillInfo ? (
            <>
              You're booking{" "}
              <span className="font-medium">{selected?.title}</span> at{" "}
              <span className="font-medium">{prefillInfo.name}</span>. Confirm
              to proceed and redeem the discount.
            </>
          ) : (
            <>
              You're booking{" "}
              <span className="font-medium">{selected?.title}</span>. Confirm to
              proceed and redeem the discount.
            </>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setSelected(null)}
            className="flex-1 px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert(`Mock booking confirmed for ${selected?.title} ✅`);
              setSelected(null);
            }}
            className="flex-1 px-4 py-2 rounded-lg bg-[linear-gradient(90deg,#F16623,#ff8a4d)] text-white"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
}
