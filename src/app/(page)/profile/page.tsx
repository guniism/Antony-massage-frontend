"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "../../../../interface";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error loading user from localStorage", error);
    }
  }, [router]);

  if (!user) return <div className="text-center pt-20">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-15">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/image/antony.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">{user.name}</h1>
        <div className="space-y-4 text-gray-700">
          <div>
            <p className="font-semibold pb-2">Email</p>
            <p className="bg-gray-100 rounded-lg p-2">{user.email}</p>
          </div>
          <div>
            <p className="font-semibold pb-2">Username</p>
            <p className="bg-gray-100 rounded-lg p-2">
              {user.username ? user.username : "Antony"}
            </p>
          </div>
          <div>
            <p className="font-semibold pb-2">Telephone</p>
            <p className="bg-gray-100 rounded-lg p-2">{user.tel}</p>
          </div>
          <div>
            <p className="font-semibold pb-2">Role</p>
            <p className="bg-gray-100 rounded-lg p-2">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
