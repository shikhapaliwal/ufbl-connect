export default function KPIWidget({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <p className="text-gray-500 text-sm">{label}</p>
      <h3 className="text-2xl font-semibold text-[#F16623] mt-1">{value}</h3>
    </div>
  );
}
