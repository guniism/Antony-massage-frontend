import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password != confirmPassword){
            setError("Password is not the same");
            return;
        }
      
        if(!name || !email || !password || !confirmPassword || !tel){
            setError("Please complete the information");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    tel: tel,
                    password: password,
                }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                setError("Register error: " + (data.message));
                return;
            }
            

            console.log("Register successful!", data);
        } catch (error) {
            setError("Error: " + error.message);
        }
        
        

    }
    return(
        <div className="flex justify-center pt-0 md:pt-8">
            <div className="flex flex-col justify-center w-96 space-y-6 p-5">
                <Link to="/" className="mx-auto">
                <div className="text-5xl font-semibold">
                    <span className="text-[#D40B29] hover:text-[#F00B29] ">Antony </span>
                    <span className="text-black">Massage</span>
                </div>
                </Link>
                <h1 className='text-center font-semibold text-3xl'>Register</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-evenly'>
                    <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>Name</h3>
                    <input onChange={(e) => setName(e.target.value)} className='border rounded-2xl p-3 block mx-auto  w-full text-gray' type='text' placeholder='Enter your email'></input>
                    
                    <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>Email</h3>
                    <input onChange={(e) => setEmail(e.target.value)} className='border rounded-2xl p-3 block mx-auto  w-full text-gray' type='email' placeholder='Enter your email'></input>
                    
                    <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>Telephone</h3>
                    <input onChange={(e) => setTel(e.target.value)} className='border rounded-2xl p-3 block mx-auto  w-full text-gray' type='tel' placeholder='Enter your email'></input>

                    <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>Password</h3>
                    <input onChange={(e) => setPassword(e.target.value)} className='border rounded-2xl p-3 block mx-auto w-full text-gray' type='password' placeholder='Enter your password'></input>
                    
                    <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>Confirm Password</h3>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} className='border rounded-2xl p-3 block mx-auto w-full text-gray mb-5' type='password' placeholder='Confirm your password'></input>

                    {error && (
                        <div className='block rounded-2xl text-base text-[#D40B29] py-1 mx-auto w-full border border-red text-center mt-5'>{error}</div>
                    )}
                    {success && (
                        <div className='block rounded-2xl text-base text-black py-1 mx-auto w-full border border-green text-center mt-5'>{success}</div>
                    )}

                    <button type='submit' className='hover:cursor-pointer block rounded-2xl text-xl mt-5 text-white py-4 mx-auto w-full bg-[#D40B29] font-semibold'>Register</button>
                    <div className='flex flex-row mt-4 text-lg mx-auto'>
                        <p className=''>Already have an account?</p>&nbsp;<Link to="/login" className='text-[#D40B29] font-semibold'>Login</Link>
                    </div> 
                </form>
                
            </div>
        </div>
    )
}