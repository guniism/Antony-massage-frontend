"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "../../../../interface";
import EditProfile from "@/components/EditProfile";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [editPopup, setEditPopup] = useState(false);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-15">
      <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
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
          <div className="pt-4">
          <button
              onClick={() => setEditPopup(true)}
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>
      {editPopup && user && (
      <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
        <EditProfile
          user={user}
          onClose={() => setEditPopup(false)}
          onUpdate={(updatedUser) => {
            const newUser = { ...user, ...updatedUser };
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
          }}
        />
      </div>
    )}
    </div>
  );
}
