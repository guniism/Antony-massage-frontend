import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function EachNav({to, text}){
    return(
    <Link to={to}>
        <li className="border py-4 px-4 rounded-xl">{text}</li>
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

    function handleLogout() {
        localStorage.removeItem("token");
        // console.log("User has been logout");
        setShowLogout(true);
        navigate("/login");
    }
    return(
        <div className="p-7">
            <ul className="flex flex-col space-y-4">
                {/* <Link to="/">
                    <li className="border py-4 px-4 rounded-xl">Make reservation</li>
                </Link>
                <Link to="/">
                    <li className="border py-4 px-4 rounded-xl">Home</li>
                </Link>
                <Link to="/massage-shop">
                    <li className="border py-4 px-4 rounded-xl">Massage Shop</li>
                </Link> */}
                <EachNav to="/" text="Home"/>
                
                <EachNav to="/make-reservation" text="Make reservation"/>
                <EachNav to="/massage-shop" text="Massage shops"/>
                <EachNav to="/reservation" text="My reservation"/>
                <EachNav to="/profile" text="Profile"/>
                {showLogout ? 
                    <li onClick={handleLogout} className="hover:cursor-pointer border-[#D40B29] text-[#D40B29] border py-4 px-4 rounded-xl">
                        Logout
                    </li> 
                : <></>}
            </ul>
        </div>
    )
}