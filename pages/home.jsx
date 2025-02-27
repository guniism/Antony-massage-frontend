import Header from "../components/header"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Home" />
      <div className="flex-1 flex flex-row">
        <div className='border-r w-80 flex-none hidden md:block'>
          <Navbar />
        </div>
        <div className="md:hidden fixed border-t h-44 bottom-0 left-0 w-full z-50 flex flex-row justify-around bg-white">
          <Navbar />
        </div>
        <div className='w-full flex flex-col items-center md:pt-32 p-6 pt-20'>


      <div className="text-5xl font-semibold mb-10 text-center space-y-5">
        <h3 className="text-4xl">Welcome to</h3>
        <span className="text-[#D40B29] hover:text-[#F00B29]">Antony </span>
        <span className="text-black">Massage</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl md:grid-cols-3 lg:grid-cols-4">
        <Link to="/make-reservation" className="col-span-2 row-span-2 flex items-center justify-center bg-[#D40B29] text-white text-xl font-bold p-8 rounded-2xl transition-transform transform hover:scale-105">
          Make Reservation
        </Link>
        <Link to="/reservation" className="flex items-center justify-center border-2 border-[#D40B29] text-[#D40B29] text-lg font-semibold p-6 rounded-2xl transition-transform transform hover:scale-105">
          My Reservation
        </Link>
        <Link to="/profile" className="flex items-center justify-center border-2 border-[#D40B29] text-[#D40B29] text-lg font-semibold p-6 rounded-2xl transition-transform transform hover:scale-105">
          Profile
        </Link>
        <Link to="/massage-shop" className="col-span-2 flex items-center justify-center bg-black text-white text-lg font-semibold p-6 rounded-2xl transition-transform transform hover:scale-105">
          Massage Shops
        </Link>
      </div>


        </div>
      </div>
      <div className="md:hidden h-64">

      </div>
    </div>
  )
}
