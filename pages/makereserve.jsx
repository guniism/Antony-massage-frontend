import Header from "../components/header"
import Navbar from "../components/navbar"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MakeReserve() {
  const location = useLocation();
  const clickedShop = location.state?.shopId;

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectShop, setSelectShop] = useState(clickedShop ? clickedShop : "");
  const [shops, setShops] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchShops = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/massage-shops`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                // console.log(data.data);
                setShops(data.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchShops();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!date || !selectShop){
      setError("Please fill the information");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
      });

      if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
      }

      const dt = await res.json();
      // console.log("User Data:", dt.data._id);
      const userID = dt.data._id;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/massage-shops/${selectShop}/reservations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            reserverDate: date,
            user: userID,
          }),
      });

      const data = await response.json();

      if (!response.ok) {
          setError("Login error: " + (data.message));
          return;
      }
  
      setSuccess("Reservation done!");
      setError("");
    } catch (error) {
        setError("Error: " + error.message);
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Make Reservation" />
      <div className="flex-1 flex flex-row">
        <div className='border-r w-80 flex-none'>
          <Navbar />
        </div>
        <div className='w-full pt-20'>
          <div className="w-96 mx-auto space-y-2 px-4">
            <form onSubmit={handleSubmit} className='flex flex-col justify-evenly '>
            <h2 className="font-semibold pl-3">Reservation date</h2>
            <input type="date" onChange={(e) => setDate(e.target.value)} defaultValue={new Date().toISOString().split('T')[0]} className='border rounded-xl px-3 py-2'></input>
            
            <h2 className="font-semibold pl-3 pt-3">Massage shop</h2>
              <select id="type" value={selectShop} onChange={(e) => setSelectShop(e.target.value)} ame="type" className='border rounded-xl px-3 py-2'>
                  <option value="" disabled>-- Select massage shop --</option>
                  {shops.map((shop) => (
                    <option key={shop.id} value={shop.id}>{shop.name}</option>
                  ))}
              </select>
              {error && (
                  <div className='block rounded-2xl text-base text-[#D40B29] py-1 mx-auto w-full border border-red text-center mt-5'>{error}</div>
              )}
              {success && (
                  <div className='block rounded-2xl text-base text-black py-1 mx-auto w-full border border-green text-center mt-5'>{success}</div>
              )}

            <button type='submit' className='hover:cursor-pointer block rounded-2xl text-xl mt-5 text-white py-4 mx-auto w-full bg-[#D40B29] font-semibold'>Make a reservation</button>
            </form>



          </div>
        </div>
      </div>
    </div>
  )
}
