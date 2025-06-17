import MyTextField from '../../../components/MyTextField';
import MyButton from "../../../components/MyButton";

const LoggedIn = () => {
  return (
    <>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full max-w-[95%] sm:max-w-[90%] md:max-w-[900px] 
                rounded-xl overflow-hidden px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg h-auto md:h-[550px] mt-5">
            
            {/* Left Side (Login Form) */}
            <div className="bg-white flex flex-col h-[auto] md:h-full p-6">
                <h1 className="text-xl font-semibold">Login</h1>
                <div className="flex flex-col justify-center items-center mt-5">
                    <h1 className="text-2xl text-black-600 font-bold mt-2 mb-2">Welcome Back, Work Leave</h1>
                    <p className="text-sm">
                        <a href="#">
                            Continue with Google
                        </a> or Enter Your Details
                    </p>
                    {/* Login Form */}
                    <form className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg space-y-4">
                        <div className="flex flex-col ml-1">
                            <label htmlFor="email" className="mb-1 text-[14px] font-medium text-black-400">Email</label>
                            <MyTextField
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            />
                        </div>

                        <div className="flex flex-col ml-1">
                            <label htmlFor="password" className="mb-1 text-[14px] font-medium text-black-400">Password</label>
                            <MyTextField
                            type="password"
                            id="password"
                            placeholder="***************"
                            required
                            />
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex justify-between items-center text-[14px] text-[#0A1931] px-1">
                            <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox accent-[#0FAC81]" />
                            <span>Remember me</span>
                            </label>
                            <a href="#" className="text-[#0FAC81] hover:underline">Forgot password?</a>
                        </div>

                        <MyButton
                            type="submit"
                            className="!w-[206px] !h-[50px]"
                        >
                            Login
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

export default LoggedIn
