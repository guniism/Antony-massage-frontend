import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Button(){
    return(
        <Link to="/login">
            <button className="hover:cursor-pointer py-2 px-7 h-12 hover:bg-[#F00B29] rounded-xl bg-[#D40B29] font-semibold text-white">Login</button>
        </Link> 
    )
}


export default function Header({ title }) {
    const [isLogin, setLogin] = useState(false);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setLogin(true);
            const fetchData = async () => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/me`, {
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
                    setUsername(data.data.name);
                } catch (error) {
                    console.error("Failed to fetch user data:", error);
                }
            }
            fetchData();
        }
        
    }, []);
    return(
        <div className="border-b flex h-20 flex-row">
            <div className="md:w-80 flex-none justify-center flex items-center px-4">
                <Link to="/">
                <div className="text-3xl md:text-4xl font-semibold">
                    <span className="text-[#D40B29] hover:text-[#F00B29]">Antony </span>
                    <span className="text-black">Massage</span>
                </div>
                </Link>
            </div>

            <div className="w-full flex-row flex justify-center md:justify-between items-center px-5">
                <h1 className="text-xl text-[#D40B29] font-semibold hidden md:flex">{title}</h1>
                
                {!isLogin ? 
                    <Button />
                : <p className="text-lg">Hello, {username}</p>}
            </div>

            
        </div>
    )
}