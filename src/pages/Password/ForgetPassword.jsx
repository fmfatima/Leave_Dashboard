import Nav from "../Login/Nav";
import MyTextField from '../../components/MyTextField';
import MyButton from "../../components/MyButton";
import { BiArrowBack } from "react-icons/bi";



const ForgetPassword = () => {
  return (
    <>
    <Nav />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full max-w-[95%] sm:max-w-[90%] md:max-w-[900px] 
                rounded-xl overflow-hidden px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg h-auto md:h-[550px] mt-5">
            
            {/* Left Side (Login Form) */}
            <div className="bg-white flex flex-col h-[auto] md:h-full p-6">
                <h1 className="text-xl font-semibold">Forgot Password</h1>
                <div className="flex flex-col justify-center items-center mt-5">
                    <h1 className="text-2xl text-black-600 font-bold mt-2 mb-2">Welcome Back, Work Leave</h1>
                    <p className="text-sm">If You forget password no worris, you reset password</p>
                    {/* Login Form */}
                    <form className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg space-y-4 mt-5">
                        <div className="flex flex-col ml-1">
                            <label htmlFor="email" className="mb-1 text-[14px] font-medium text-black-400">Enter Your Email</label>
                            <MyTextField
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            />
                        </div>

                        <MyButton
                            type="submit"
                            className="!w-[206px] !h-[50px] !mt-8 !bg-[#0FAC81]"
                        >
                            Reset Password
                        </MyButton>
                        <div className="flex items-center space-x-2 mt-5 text-[18px] font-semibold text-[#0FAC81]">
                            <BiArrowBack className="text-[20px]" />
                            <a href="#">Back To Login</a>
                        </div>
                    </form> 
                </div>
                
            </div>
            {/* left side end */}

            {/* Right Side (Image) */}
            <div className="hidden sm:flex flex justify-center items-center h-[250px] md:h-full">
            <img 
                className="w-full h-full object-cover"
                src="src/assets/forget.png" 
                alt="signUp" 
            />
            </div>
            
        </div>
    </div>

    </>
  )
}

export default ForgetPassword
