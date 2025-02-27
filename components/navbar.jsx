import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function EachNav({to, text, hide}){
    return(
    <Link to={to} className={hide}>
        <li className="border py-4 px-4 rounded-xl text-sm md:text-base">{text}</li>
    </Link>
    )
}



export default function Navbar(){
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setShowLogout(true);
        }
    }, [navigate]);

    async function handleLogout() {
        // console.log("User has been logout");
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/logout`, {
                method: "GET",
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                console.log("Error: ", data.message);
                return;
            }
            localStorage.removeItem("token");
            setShowLogout(true);
            navigate("/login");
        } 
        catch(error){
            console.log("Error: ", error);
        }

    }
    return(
        <div className="p-7">
            <ul className="grid grid-cols-3 gap-2 md:flex md:flex-col md:space-y-4 md:gap-0 text-center">
                <EachNav to="/" text="Home" hide=""/>

                <EachNav to="/make-reservation" text="Make reservation" hide="hidden md:block"/>
                <EachNav to="/make-reservation" text="Make reserve" hide="md:hidden"/>

                <EachNav to="/massage-shop" text="Massage shops" hide="hidden md:block"/>
                <EachNav to="/massage-shop" text="Shops" hide="md:hidden"/>

                <EachNav to="/reservation" text="My reservation" hide="hidden md:block"/>
                <EachNav to="/reservation" text="My reserve" hide="md:hidden"/>

                <EachNav to="/profile" text="Profile" hide=""/>
                {showLogout && (
                    <li
                        onClick={handleLogout}
                        className="hover:cursor-pointer border-[#D40B29] text-[#D40B29] border py-4 px-4 rounded-xl w-full hover:bg-red-100 transition text-sm md:text-base"
                    >
                        Logout
                    </li>
                )}
            </ul>
        </div>
    )
}