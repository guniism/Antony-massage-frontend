import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-10 bg-gray-100">
      <h1 className="text-lg font-medium text-gray-700">Welcome to</h1>
      <h2 className="text-5xl font-bold mt-2">
        <span className="text-red-600">Antony</span> Massage
      </h2>
      <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-4 w-3/4 max-w-4xl">
        <Link href="/reservation" className="col-span-2 row-span-2">
          <button className="bg-red-600 text-white w-full h-full text-xl rounded-lg font-medium shadow-md hover:bg-red-700 transition">
            Make Reservation
          </button>
        </Link>
        <Link href="/myreservation" className="col-start-3 row-start-1">
          <button className="border-2 border-red-600 text-red-600 w-full h-16 text-lg rounded-lg font-medium hover:bg-red-600 hover:text-white transition">
            My Reservations
          </button>
        </Link>

        <Link href="/profile" className="col-start-4 row-start-1">
          <button className="border-2 border-red-600 text-red-600 w-full h-16 text-lg rounded-lg font-medium hover:bg-red-600 hover:text-white transition">
            Profile
          </button>
        </Link>
        <Link href="/massageshop" className="col-span-2 col-start-3 row-start-2">
          <button className="bg-black text-white w-full h-20 text-xl rounded-lg font-medium shadow-md hover:bg-gray-800 transition">
            Massage Shops
          </button>
        </Link>
      </div>
    </div>
  );
}