import DateReserve from "@/components/DateReserve";

export default function EditReservation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-gray-200 shadow-lg rounded-lg p-8 w-full max-w-md">
        
        <div className="mb-2">
          <label className="block text-lg font-semibold mb-2">Date Reservation</label>
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

        <div className="flex gap-4">
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Cancle
          </button>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 transition">
            Update
          </button>
        </div>

      </div>
    </div>
  );
}
