import React, { useState } from "react";
import Modal from "../components/Modal";
import experiences from "../data/experiences.json";

export default function ExperienceBooking() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen pb-28 bottom-spacer">
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Book an Experience</div>
          <div className="text-xs text-slate-500">Limited offers</div>
        </div>

        <div className="mt-4 space-y-3">
          {experiences.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-2xl p-4 shadow flex justify-between items-center"
            >
              <div>
                <div className="text-sm font-semibold">{e.title}</div>
                <div className="text-xs text-slate-500">
                  {e.price} •{" "}
                  <span className="text-amber-600 font-medium">{e.tag}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => setSelected(e)}
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
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        <div className="text-sm text-slate-600 mb-4">
          You're booking <span className="font-medium">{selected?.title}</span>.
          Confirm to proceed and redeem the discount.
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
