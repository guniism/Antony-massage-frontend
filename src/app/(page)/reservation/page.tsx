import DateReserve from "@/components/DateReserve";

export default function Reservation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <div className="mb-2 w-full">
          <label className="block text-lg font-semibold mb-2 w-full">Date Reservation</label>
          <DateReserve />
        </div>
        
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Massage Shop</label>
          <select className="w-full border rounded-lg p-3 bg-gray-50">
            <option value="">Select Massage Shop</option>
            <option value="shop1">Relax Spa</option>
            <option value="shop2">Zen Therapy</option>
            <option value="shop3">Healing Hands</option>
            <option value="shop4">Serenity Massage</option>
          </select>
        </div>

        {/* Reservation Button */}
        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition">
          Make a reservation
        </button>

      </div>
    </div>
  );
}
