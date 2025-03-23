"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, Map, Calendar, User, LogOut, Plus } from "lucide-react";
import useUserLogOut from "@/libs/userLogOut";

export default function SideMenu({ setLogin }: { setLogin: (login:Boolean) => void }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = useUserLogOut();

  const handleLogout = () => {
    logout(() => setIsLoggedIn(false)); // update local state after logout
    setLogin(false);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <div className="fixed w-64 h-screen bg-white border-r shadow-md pt-20 flex flex-col">
      <div className="px-4 py-2">
        <Link href="/reservation">
          <button className="w-full p-3 text-white bg-red-600 border rounded-lg hover:bg-red-700 flex items-center justify-center gap-2">
            <Plus size={18} />
            <span>Make Reservation</span>
          </button>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
        >
          <Home size={20} />
          Home
        </Link>
        <Link
          href="/massageshop"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
        >
          <Map size={20} />
          Massage shops
        </Link>
        <Link
          href="/myreservation"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
        >
          <Calendar size={20} />
          My reservations
        </Link>
        <Link
          href="/profile"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
        >
          <User size={20} />
          Profile
        </Link>
      </nav>

      {isLoggedIn && (
        <div className="px-4 py-2 pb-4">
          <button
            onClick={handleLogout}
            className="px-16 w-full flex items-center justify-between p-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
          >
            <span>Logout</span>
            <LogOut size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
