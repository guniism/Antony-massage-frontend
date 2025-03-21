import Link from "next/link";

export default function SideMenu() {
  return (
    <div className="fixed w-64 h-screen bg-white border-r shadow-md pt-20">
      <div className="px-4 py-2">
        <Link href="/reservation">
          <button className="w-full p-3 text-white bg-red-600 border rounded hover:bg-red-700">
            Make Reservation
          </button>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-2 space-y-2">
        <Link href="/" className="block p-3 border rounded hover:bg-gray-100">
          Home
        </Link>
        <Link href="/massageshop" className="block p-3 border rounded hover:bg-gray-100">
          Massage Shops
        </Link>
        <Link href="/myreservation" className="block p-3 border rounded hover:bg-gray-100">
          My Reservations
        </Link>
        <Link href="/profile" className="block p-3 border rounded hover:bg-gray-100">
          Profile
        </Link>
      </nav>

      <div className="px-4 py-2">
        <button className="w-full p-3 border border-red-600 text-red-600 rounded hover:bg-red-100">
          Logout
        </button>
      </div>
    </div>
  );
}
