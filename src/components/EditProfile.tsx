"use client";

import { useState } from "react";
import { User } from "../../interface";

export default function EditProfile({
  user,
  onClose,
  onUpdate,
}: {
  user: User;
  onClose: () => void;
  onUpdate: (updatedUser: { name: string; tel: string; password?: string }) => void;
}) {
  const [name, setName] = useState(user.name || "");
  const [tel, setTel] = useState(user.tel || "");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!name || !tel) {
      alert("Please fill in name and telephone.");
      return;
    }

    const updatedData: { name: string; tel: string; password?: string } = {
      name,
      tel,
    };

    if (password.trim() !== "") {
      updatedData.password = password;
    }

    onUpdate(updatedData);
    onClose();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Edit Profile</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Telephone</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-1">New Password (optional)</label>
        <input
          type="password"
          className="w-full border rounded-lg p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={onClose}
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500"
        >
          Save
        </button>
      </div>
    </div>
  );
}
