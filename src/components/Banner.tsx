import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full md:p-10 py-10 px-5 bg-gray-100">
      <h1 className="text-xl font-semibold text-gray-600">Welcome to</h1>
      <h2 className="text-5xl font-bold mt-2">
        <span className="text-red-600">Antony</span> Massage
      </h2>
      <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-3 md:w-3/4 md:max-w-4xl w-full max-w-xs">
        <Link href="/reservation" className="col-span-2 row-span-2">
          <button className="bg-red-600 text-white w-full h-full text-xl rounded-lg font-medium shadow-md hover:bg-red-500 transition hover:cursor-pointer">
            Make Reservation
          </button>
        </Link>
        <Link href="/myreservation" className="col-start-3 row-start-1">
          <button className="border-2 border-red-600 text-red-600 w-full h-20 text-lg rounded-lg font-medium hover:bg-red-600 hover:text-white transition hover:cursor-pointer">
            <div className="hidden lg:block">My Reservations</div>
            <div className="lg:hidden block">My Reserves</div>
          </button>
        </Link>

        <Link href="/profile" className="col-start-4 row-start-1">
          <button className="border-2 border-red-600 text-red-600 w-full h-20 text-lg rounded-lg font-medium hover:bg-red-600 hover:text-white transition hover:cursor-pointer">
            Profile
          </button>
        </Link>
        <Link href="/massageshop" className="col-span-2 col-start-3 row-start-2">
          <button className="bg-black text-white w-full h-20 text-xl rounded-lg font-medium shadow-md hover:bg-gray-800 transition hover:cursor-pointer">
            Massage Shops
          </button>
        </Link>
      </div>

    </div>
  );
}