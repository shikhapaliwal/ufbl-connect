import LineChart from "../components/LineChart";

export default function WalletScreen() {
  return (
    <div className="p-5 pb-20">
      <h2 className="text-lg font-semibold mb-4">UFBL Wallet</h2>

      <div className="bg-white rounded-2xl shadow-md p-5 text-center">
        <p className="text-gray-500">Coins Balance</p>
        <h1 className="text-3xl font-bold text-[#F16623]">240 Coins</h1>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold mb-2">ESG Badges</h3>
        <div className="flex space-x-3">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
            Zero Waste
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
            Local Sourcing
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Earnings Overview</h3>
        <LineChart />
      </div>
    </div>
  );
}
