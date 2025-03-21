export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-20">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[200%] max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="text-red-600">Antony</span>{" "}
          <span className="text-gray-900">Massage</span>
        </h1>

        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-3">Register</h2>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600 mb-2">Telephone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600 mb-2">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
          />
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition">
          Register
        </button>

        <div className="mt-3 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-red-600 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}