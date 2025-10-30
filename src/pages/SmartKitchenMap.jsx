import mapImg from "../assets/map-placeholder.png";

export default function SmartKitchenMap() {
  return (
    <div className="p-4 pt-6 pb-20 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Smart Kitchen Map</h2>
      <div className="w-full relative rounded-2xl overflow-hidden shadow-md">
        <img src={mapImg} alt="India Map" className="w-full h-auto" />
        {/* Mock color pins */}
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <p className="text-sm mt-3 text-gray-600">
        🟢 Dine-In · 🟡 Hybrid · 🔵 Cloud Kitchen
      </p>
    </div>
  );
}
