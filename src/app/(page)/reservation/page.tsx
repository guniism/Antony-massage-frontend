"use client";

import { useEffect, useState } from "react";
import DateReserve from "@/components/DateReserve";
import getShops from "@/libs/getShops";
import { MassageItem } from "../../../../interface";

export default function Reservation() {
  const [shops, setShops] = useState<MassageItem[]>([]);
  const [selectedShop, setSelectedShop] = useState("");

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await getShops();
        setShops(data.data);
      } catch (error) {
        console.error("Failed to fetch shops:", error);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="mb-2 w-full">
          <label className="block text-lg font-semibold mb-2 w-full">Date Reservation</label>
          <DateReserve />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Massage Shop</label>
          <select
            className="w-full border rounded-lg p-3 bg-gray-50"
            value={selectedShop}
            onChange={(e) => setSelectedShop(e.target.value)}
          >
            <option value="">Select Massage Shop</option>
            {shops.map((shop) => (
              <option key={shop._id} value={shop._id}>
                {shop.name}
              </option>
            ))}
          </select>
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition">
          Make a reservation
        </button>
      </div>
    </div>
  );
}
