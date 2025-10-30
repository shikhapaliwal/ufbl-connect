import { useState } from "react";
import Modal from "../components/Modal";

export default function ExperienceBooking() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    { id: 1, title: "Corporate Lunch", discount: "Save 20% Today" },
    { id: 2, title: "Chef’s Table", discount: "Save 15% Today" },
    { id: 3, title: "Grill Workshop", discount: "Save 10% Today" },
  ];

  return (
    <div className="p-5 pb-20">
      <h2 className="text-lg font-semibold mb-4 text-[#3A3A3A]">
        Experience Booking
      </h2>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center hover:scale-[1.02] transition-transform duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#3A3A3A]">
                {exp.title}
              </h3>
              <p className="text-sm text-[#F16623] mt-1">{exp.discount}</p>
            </div>
            <button
              onClick={() => setSelectedExperience(exp)}
              className="bg-[#F16623] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#e2571b] transition-colors"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <Modal
          title={selectedExperience.title}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
}
