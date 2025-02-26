import Header from "../components/header"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EachField({title, value}){
  return(
    <div>
      <h2 className="font-semibold pl-3">{title}</h2>
      <div className="border rounded-xl px-3 py-2">{value}</div>
    </div>
  )
}
export default function Profile() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
          navigate("/login");
      }
      else{
          const fetchData = async () => {
              try {
                  const response = await fetch("/api/v1/auth/me", {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                          "Authorization": `Bearer ${token}`
                      },
                  });
              
                  if (!response.ok) {
                      throw new Error(`Error: ${response.status}`);
                  }
              
                  const data = await response.json();
                  // console.log("User Data:", data.data);
                  setData(data.data)
              } catch (error) {
                  console.error("Failed to fetch user data:", error);
              }
          }
          fetchData();
      }
      
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Profile" />
      <div className="flex-1 flex flex-row">
        <div className='border-r w-80 flex-none'>
          <Navbar />
        </div>
        <div className='w-full pt-20'>
          <div className="w-96 mx-auto space-y-2 px-4">
            <img src="src/assets/profile.jpeg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full border mx-auto"
            />
          <EachField title="Name" value={data.name}/>
          <EachField title="Email" value={data.email}/>
          <EachField title="Telephone" value={data.tel}/>
          <EachField title="Role" value={data.role}/>
            
          </div>

  
        </div>
      </div>
    </div>
  )
}
