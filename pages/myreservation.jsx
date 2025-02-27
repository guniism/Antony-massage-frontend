import Header from "../components/header"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function EditPopup({close, data, updateData}) {
    const [shops, setShops] = useState([]);
    const [selectShop, setSelectShop] = useState(data[1]);
    const [date, setDate] = useState(new Date(data[2]).toISOString().split('T')[0]);
    const reserveId = data[0];
    useEffect(() => {
        // console.log(data);
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
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/reservations/${reserveId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    reserveDate: date,
                    massageShop: selectShop
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const updatedReservation = await response.json();

            if (updatedReservation.success) {
                updateData(prev => prev.map(reservation =>
                    reservation._id === reserveId 
                        ? { ...reservation, reserveDate: date, massageShop: { id: selectShop, name: shops.find(shop => shop.id === selectShop)?.name } }
                        : reservation
                ));
    
                close([]);
            }
        } catch (error) {
            console.error("Error to update:", error);
        }
    }
    const handleClose = () => {
        close([]);
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <div className="bg-white text-black max-w-xl w-full m-10 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className='flex flex-col justify-evenly px-8 s py-8'>
                <h2 className="font-semibold pl-3">Reservation date</h2>
                <input type="date" onChange={(e) => setDate(e.target.value)} defaultValue={date} className='border rounded-xl px-3 py-2'></input>
                
                <h2 className="font-semibold pl-3 pt-3">Massage shop</h2>
                <select id="type" value={selectShop} onChange={(e) => setSelectShop(e.target.value)} ame="type" className='border rounded-xl px-3 py-2'>
                    <option value="" disabled>-- Select massage shop --</option>
                    {shops.map((shop) => (
                        <option key={shop.id} value={shop.id}>{shop.name}</option>
                    ))}
                </select>
                <div className="space-x-4 mt-5">
                    <button onClick={handleClose} className="hover:cursor-pointer hover:bg-[#F00B29] py-2 w-24 h-12 rounded-xl bg-[#D40B29] font-semibold text-white">
                        Close
                    </button>
                    <button type='submit' className='hover:cursor-pointer hover:bg-[#15bc4f] py-2 w-24 h-12 rounded-xl bg-[#079c3b] font-semibold text-white'>
                        Update
                    </button>
                </div>
                
                </form>
                
            </div>
        </div>
    );
}

export default function Reservation() {
    const navigate = useNavigate();
    const [reservDatas, setReservDatas] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [editData, setEditData] = useState([]);
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
                    // console.log(data.data);
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

    const handleEdit = (data) => {
        setShowEdit(!showEdit);
        setEditData(data);
    }

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="My reservation" />
      <div className="flex-1 flex flex-row">
        <div className='border-r w-80 flex-none hidden md:block'>
          <Navbar />
        </div>
        <div className="md:hidden fixed border-t h-44 bottom-0 left-0 w-full z-50 flex flex-row justify-around bg-white">
          <Navbar />
        </div>
            <div className="w-full">
            <h1 className="text-2xl mb-8 mt-10 text-[#D40B29] font-semibold md:hidden text-center">My reservation</h1>
                <div className="p-4 space-y-4 h-full overflow-y-auto ">
                {reservDatas.length === 0 ? (
                    <p className="text-center mt-4 text-lg">You don't have any reservations.</p>
                        ) : (
                        <ul className="space-y-4">
                            {reservDatas.map((reservData, index) => (
                            <li key={reservData._id || `reservation-${index}`} className="border p-4 rounded-lg flex justify-between">
                                <div>
                                <h2 className="text-lg font-semibold">{reservData.massageShop.name}</h2>
                                <p className="text-gray-600">
                                    {new Date(reservData.reserveDate).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    })}
                                </p>
                                </div>
                                <div className="space-x-2 md:space-x-4 flex flex-row">
                                <button onClick={() => handleEdit([reservData._id, reservData.massageShop.id, reservData.reserveDate])} className="hover:cursor-pointer hover:bg-[#333668] py-2 w-16 md:w-24 h-12 rounded-xl bg-[#212343] font-semibold text-white">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(reservData._id)} className="hover:cursor-pointer hover:bg-[#F00B29] py-2 w-16 md:w-24 h-12 rounded-xl bg-[#D40B29] font-semibold text-white">
                                    Delete
                                </button>
                                </div>
                            </li>
                            ))}
                        </ul>
                    )}
                </div>
                
                {(showEdit) ? <EditPopup close={handleEdit} data={editData} updateData={setReservDatas}/> : <></>}
                
            </div>
            <div className="md:hidden h-64"></div>
      </div>
    </div>
  )
}
