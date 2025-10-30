import { X } from "lucide-react";

export default function Modal({ title, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white w-11/12 max-w-sm rounded-2xl p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-[#F16623]"
        >
          <X size={20} />
        </button>

        <h3 className="text-lg font-semibold text-[#3A3A3A] mb-2">
          Confirm Booking
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          You’re about to book <span className="font-medium">{title}</span>.
          Proceed to confirm your slot and enjoy your exclusive discount.
        </p>

        <button
          onClick={() => {
            alert(`Booking confirmed for ${title}! 🎉`);
            onClose();
          }}
          className="bg-[#F16623] w-full text-white py-2 rounded-full font-medium hover:bg-[#e2571b] transition-colors"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
