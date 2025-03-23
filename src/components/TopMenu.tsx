"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TopMenu({isLogin}: {isLogin: Boolean}) {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  
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
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white border">
      <div className="text-2xl font-bold">
        <span className="text-red-600">Antony</span> Massage
      </div>

      <div className="text-gray-700">
        {isLogin ? (
          `Hello, ${userName}`
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="text-red-600 hover:underline font-medium"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
