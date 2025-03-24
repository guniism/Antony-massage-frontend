"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Map, Calendar, User, LogOut, Plus } from "lucide-react";
import useUserLogOut from "@/libs/userLogOut";

export default function SideMenu({ setLogin }: { setLogin: (login: boolean) => void }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = useUserLogOut();
  const pathname = usePathname();
  

  const handleLogout = () => {
    logout(() => setIsLoggedIn(false));
    setLogin(false);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <div className="fixed w-70 h-screen bg-white border-gray-200 border-r pt-22 flex flex-col">
      <div className="px-4 py-2">
        <Link href="/reservation" >
          <button className="hover:cursor-pointer w-full p-3 text-white bg-red-600 border rounded-lg hover:bg-red-500 flex items-center gap-2 transition">
            <Plus size={20} />
            <span>Make Reservation</span>
          </button>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-2">
        <NavItem href="/" pathname={pathname} icon={Home} label="Home" />
        <NavItem href="/massageshop" pathname={pathname} icon={Map} label="Massage shops" />
        <NavItem href="/myreservation" pathname={pathname} icon={Calendar} label="My reservations" />
        <NavItem href="/profile" pathname={pathname} icon={User} label="Profile" />
      </nav>

      {isLoggedIn && (
        <div className="px-4 py-2 pb-4">
          <button
            onClick={handleLogout}
            className="px-16 w-full flex items-center justify-between p-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-100 hover:cursor-pointer transition-colors"
          >
            <span>Logout</span>
            <LogOut size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

type NavItemProps = {
  href: string;
  pathname: string;
  icon: React.ElementType;
  label: string;
};

function NavItem({ href, pathname, icon: Icon, label }: NavItemProps) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? "bg-gray-100 text-red-600" : "text-gray-700 hover:text-gray-950 hover:bg-gray-100"}`}
    >
      <Icon size={20} />
      {label}
    </Link>
  );
}