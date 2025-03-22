import Image from "next/image";

export default function Profile() {
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
        <h1 className="text-2xl font-bold text-center mb-4">Antony United Man</h1>
        <div className="space-y-4 text-gray-700">
          <div>
            <p className="font-semibold pb-2">Email</p>
            <p className="bg-gray-100 rounded-lg p-2">user@egmail.com</p>
          </div>
          <div>
            <p className="font-semibold pb-2">Username</p>
            <p className="bg-gray-100 rounded-lg p-2">user@</p>
          </div>
          <div>
            <p className="font-semibold pb-2">Telephone</p>
            <p className="bg-gray-100 rounded-lg p-2">1234565555</p>
          </div>
          <div>
            <p className="font-semibold pb-2">Role</p>
            <p className="bg-gray-100 rounded-lg p-2">User</p>
          </div>
        </div>
      </div>
    </div>
  );
}