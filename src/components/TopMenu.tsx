"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
export default function TopMenu({isLogin}: {isLogin: Boolean}) {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const getPageTitle = () => {
    const titles: { [key: string]: string } = {
      "/": "Home",
      "/massageshop": "Massage Shops",
      "/reservation": "Make Reservation",
      "/myreservation": "My Reservations",
      "/profile": "Profile",
    };

    return titles[pathname] || "";
  };

  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        setUserName(user.name);
      }
    } catch (err) {
      console.error("Failed to parse user data", err);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex items-center py-4 bg-white border-b border-gray-200 h-[80px]">
      <Link href="/" className="text-4xl font-bold w-72 text-center flex-shrink-0">
        <span className="text-red-600">Antony</span> Massage
      </Link>

      <div className="w-full px-6 flex justify-between items-center">
      <h1 className="text-lg text-red-600 font-semibold">{getPageTitle()}</h1>
        <div className="text-gray-700 text-lg">
          {isLogin ? (
            `Hello, ${userName}`
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg hover:cursor-pointer font-semibold"
            >
              Login
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
}
