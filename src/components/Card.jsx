export default function Card({ title, color }) {
  return (
    <div
      className={`w-full rounded-2xl shadow-md p-6 text-center font-semibold ${color} hover:scale-105 transition-transform duration-300`}
    >
      {title}
    </div>
  );
}
