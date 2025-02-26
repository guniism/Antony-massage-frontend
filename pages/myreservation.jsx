import Header from "../components/header"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
    const navigate = useNavigate();
    const [reservDatas, setReservDatas] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
        const fetchReservations = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/reservations`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();

                if (data.success) {
                    console.log(data.data);
                    setReservDatas(data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchReservations();
    }, []);

    const handleDelete = async (id) => {
   
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/reservations/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                console.log("Error: ", data.message);
                return;
            }
            
            setReservDatas((prev) => prev.filter((item) => item._id !== id));
        } 
        catch(error){
            console.log("Error: ", error);
        }
    }

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="My reservation" />
      <div className="flex-1 flex flex-row">
        <div className='border-r w-80 flex-none'>
          <Navbar />
        </div>
            <div className="w-full">
                <div className="p-4 space-y-4 h-full overflow-y-auto ">
                    <ul className="space-y-4">
                    {reservDatas.map((reservData, index) => (
                        <li key={reservData.id || `reservation-${index}`} className="border p-4 rounded-lg flex justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">{reservData.massageShop.name}</h2>
                            <p className="text-gray-600">
                                {new Date(reservData.reserverDate).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </p>

                        </div>
                        <div className="space-x-4">
                            <button className="hover:cursor-pointer hover:bg-[#333668] py-2 w-24 h-12 rounded-xl bg-[#212343] font-semibold text-white">Edit</button>
                            <button onClick={() => handleDelete(reservData._id)} className="hover:cursor-pointer hover:bg-[#F00B29] py-2 w-24 h-12 rounded-xl bg-[#D40B29] font-semibold text-white">Delete</button>
                        </div>
     
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
      </div>
    </div>
  )
}
