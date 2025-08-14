import MyTextField from '../../../components/MyTextField';
import MyButton from "../../../components/MyButton";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignedUp = () => {
    const navigate = useNavigate(); 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const name = `${firstName} ${lastName}`;
        const res = await api.post("/auth/signup", { name, email, password });
        
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/home");
        } catch (err) {
        alert(err.response?.data?.message || "Signup failed");
        }
    };
    
    return (
    <>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full max-w-[95%] sm:max-w-[90%] md:max-w-[900px] 
                rounded-xl overflow-hidden px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg h-auto md:h-[550px] mt-5">
            
            {/* Left Side (Login Form) */}
            <div className="bg-white flex flex-col h-[auto] md:h-full p-6">
                <h1 className="text-xl font-semibold">SignUp</h1>
                <div className="flex flex-col justify-center items-center mt-5">
                    <h1 className="text-2xl text-black-600 font-bold mt-2 mb-2">Welcome Back, Work Leave</h1>
                    <p className="text-sm">Create A new account with email</p>
                    {/* SignUp Form */}
                    <form className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-row space-x-4">
                        {/* First Name */}
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="firstName" className="mb-1 text-[14px] font-medium text-black-400">
                            First Name
                            </label>
                            <MyTextField
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="lastName" className="mb-1 text-[14px] font-medium text-black-400">
                            Last Name
                            </label>
                            <MyTextField
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            value={lastName} onChange={(e) => setLastName(e.target.value)} required
                            />
                        </div>
                        </div>

                        <div className="flex flex-col ml-1">
                            <label htmlFor="email" className="mb-1 text-[14px] font-medium text-black-400">Email</label>
                            <MyTextField
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email} onChange={(e) => setEmail(e.target.value)} required
                            />
                        </div>

                        <div className="flex flex-col ml-1">
                            <label htmlFor="password" className="mb-1 text-[14px] font-medium text-black-400">Password</label>
                            <MyTextField
                            type="password"
                            id="password"
                            placeholder="***************"
                            value={password} onChange={(e) => setPassword(e.target.value)} required
                            />
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex justify-between items-center text-[14px] text-[#0A1931] px-1">
                            <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox accent-[#39A049]" />
                            I have read and agree to the<t></t><span className="text-[#39A049]">terms of use.</span>
                            </label>
                        </div>

                        <MyButton
                            type="submit"
                            className="!w-[206px] !h-[50px]"
                            // onClick={() => navigate ('/home')} 
                        >
                            Sign Up
                        </MyButton>
                    </form>
                </div>
                
            </div>
            {/* left side end */}

            {/* Right Side (Image) */}
            <div className="hidden sm:flex flex justify-center items-center h-[250px] md:h-full">
            <img 
                className="w-full h-full object-cover"
                src="src/assets/login.png" 
                alt="signUp" 
            />
            </div>
            
        </div>
    </div>

    </>
  )
}

export default SignedUp
