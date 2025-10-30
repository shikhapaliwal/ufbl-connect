import Card from "../components/Card";

export default function HomeScreen() {
  const cards = [
    { title: "Dine-In Experiences", color: "bg-orange-100" },
    { title: "Delivery Brands", color: "bg-yellow-100" },
    { title: "Sustainability Hub", color: "bg-green-100" },
  ];

  return (
    <div className="flex flex-col items-center pt-10 pb-20 px-4 space-y-5">
      <h2 className="text-xl font-semibold text-[#3A3A3A]">
        Good Evening, Ayush 👋
      </h2>

      {cards.map((card) => (
        <Card key={card.title} title={card.title} color={card.color} />
      ))}
    </div>
  );
}
