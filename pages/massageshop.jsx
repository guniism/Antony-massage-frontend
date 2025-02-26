import Header from "../components/header"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MassageShop() {
  console.log("API URL:", import.meta.env.VITE_API_URL);

    const [shops, setShops] = useState([]);

    useEffect(() => {
      const fetchShops = async () => {
          try {
              const response = await fetch(`/api/v1/massage-shops`, {
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
    // useEffect(() => {
    //     fetch("/api/v1/massage-shops?page=1")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if (data.success) {
    //             console.log(data.data);
    //             setShops(data.data);
    //         }
    //     })
    //     .catch((error) => console.error("Error fetching data:", error));
    // }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Massage Shop" />
      <div className="flex-1 flex flex-row">
        <div className='border-r w-80 flex-none'>
          <Navbar />
        </div>
            <div className="w-full">
                <div className="p-4 space-y-4 h-full overflow-y-auto ">
                    <ul className="space-y-4">
                    {shops.map((shop) => (
                        <li key={shop.id} className="border p-4 rounded-lg flex justify-between">
                        <div>
                          <h2 className="text-lg font-semibold">{shop.name}</h2>
                          <p className="text-gray-600">{shop.address}</p>
                          <p className="text-gray-500">Tel: {shop.tel}</p>
                          <p className="text-gray-500">
                              Open: {shop.openTime} - {shop.closeTime}
                          </p>
                        </div>
                        <Link to="/make-reservation" state={{ shopId: shop.id }}>
                            <button className="hover:cursor-pointer hover:bg-[#F00B29] py-2 px-7 h-12 rounded-xl bg-[#D40B29] font-semibold text-white">Reserve</button>
                        </Link> 
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

      </div>
    </div>
  )
}