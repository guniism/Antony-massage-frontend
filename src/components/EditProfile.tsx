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
  onUpdate: (updatedUser: Partial<User>) => void;
}) {
  const [name, setName] = useState(user.name || "");
  const [username, setUsername] = useState(user.username || "");
  const [tel, setTel] = useState(user.tel || "");

  const handleSubmit = () => {
    onUpdate({ name, username, tel });
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
        <label className="block font-medium mb-1">Username</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-1">Telephone</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
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
