export default function LineChart() {
  return (
    <svg viewBox="0 0 100 40" className="w-full h-24 text-[#F16623]">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        points="0,30 20,20 40,25 60,10 80,15 100,5"
      />
    </svg>
  );
}
