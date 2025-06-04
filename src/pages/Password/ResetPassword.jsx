import Nav from "../Login/Nav";
import MyButton from "../../components/MyButton";

const ResetPassword = () => {
  return (
    <>
    <Nav />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full max-w-[95%] sm:max-w-[90%] md:max-w-[900px] 
                rounded-xl overflow-hidden px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg h-auto md:h-[550px] mt-5">
            
            {/* Left Side (Login Form) */}
            <div className="bg-white flex flex-col h-[auto] md:h-full p-6">
                <h1 className="text-xl font-semibold">Reset Password</h1>
                <div className="flex flex-col justify-center items-center mt-5">
                    <h1 className="text-2xl text-black-600 font-bold mt-2 mb-2">Welcome Back, Work Leave</h1>
                    <p className="text-sm">We send code to <span> infographics@gmail.com</span></p>
                    {/* PassCode section */}
                    <form className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg mt-5">
                        <div className="flex justify-between mb-10">
                            {[1, 2, 3, 4].map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-14 h-14 text-center border border-[#263238] rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-[#0FAC81]"
                            />
                            ))}
                        </div>

                        <MyButton
                            type="submit"
                            className="!w-[206px] !h-[50px] !bg-[#0FAC81]"
                        >
                            Continue
                        </MyButton>

                        {/* RESED emial*/}
                        <div className="flex justify-between items-center text-[14px] text-[#0A1931] px-1 mt-5">
                            <label className="flex items-center space-x-2">
                            Did’t recevied email? <a href="#" className="text-[#185ADB]">Click to Resend</a>
                            </label>
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

export default ResetPassword
