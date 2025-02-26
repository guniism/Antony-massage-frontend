import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !password){
          setError("Please complete the information");
          return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                setError("Login error: " + (data.message));
                return;
            }
            
            localStorage.setItem("token", data.token);
            navigate("/");

            console.log("Login successful!", data);
        } catch (error) {
            setError("Error: " + error.message);
        }
        
        

    }
    return(
        <div className="flex justify-center pt-32">
            <div className="flex flex-col justify-center w-96 space-y-6">
                <Link to="/" className="mx-auto">
                <div className="text-5xl font-semibold">
                    <span className="text-[#D40B29] hover:text-[#F00B29] ">Antony </span>
                    <span className="text-black">Massage</span>
                </div>
                </Link>
                <h1 className='text-center font-semibold text-3xl'>Login</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-evenly'>
                    <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>Email</h3>
                    <input onChange={(e) => setEmail(e.target.value.toLowerCase())} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='email' placeholder='Enter your email'></input>
                    <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>Password</h3>
                    <input onChange={(e) => setPassword(e.target.value)} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray mb-5' type='password' placeholder='Enter your password'></input>

                    {error && (
                        <div className='block rounded-2xl text-base text-[#D40B29] py-1 mx-auto w-full border border-[#D40B29] text-center'>{error}</div>
                    )}

                    <button type='submit' className='hover:cursor-pointer block rounded-2xl text-xl mt-5 text-white py-4 mx-auto w-full bg-[#D40B29] font-semibold'>Login</button>
                    <div className='flex flex-row mt-4 text-lg mx-auto'>
                        <p className=''>Don't have an account?</p>&nbsp;<Link href="/register" className='text-[#D40B29] font-semibold'>Register</Link>
                    </div>
                </form>
                
            </div>
        </div>
    )
}