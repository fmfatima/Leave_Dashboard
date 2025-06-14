import { useNavigate } from 'react-router-dom';
import Nav from "../Login/Nav";
import { FaPlus } from "react-icons/fa";
import MyButton from "../../components/MyButton";
import MyTextField from "../../components/MyTextField";

const Profile = () => {
    const navigate = useNavigate();

  return (
    <>
      <Nav/>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-start mt-10 ml-2 sm:ml-0 absolute right-1/2 top-1/2 -translate-y-1/2">
      {/* Profile Card */}
      <div className="flex flex-col items-center bg-[#F6F6F6] rounded-xl shadow w-[200px] sm:w-[220px] md:w-[254px] h-auto p-3 sm:p-4">
        <img
          src="src/assets/profile1.png"
          alt="Profile"
          onClick={() => navigate('/')}
          className="cursor-pointer w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-lg"
        />
        <div className="flex items-start justify-between mt-3">
          <span className="text-base sm:text-lg font-semibold">Profile</span>
        </div>
      </div>

      {/* Company Card */}
      <div className="flex flex-col items-center bg-[#F6F6F6] rounded-xl shadow w-[200px] sm:w-[220px] md:w-[254px] h-auto p-3 sm:p-4">
        <img
          src="src/assets/company.png"
          alt="Company"
          onClick={() => navigate('/createCompany')}
          className="cursor-pointer w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-lg"
        />
        <div className="flex items-start justify-between mt-3">
          <span className="text-base sm:text-lg font-semibold">Company</span>
          <button
            onClick={() => navigate('/createCompany')}
            className="ml-2 p-1 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            <FaPlus size={16} />
          </button>
        </div>
      </div>
    </div>


     {/* form  */}
      <div className="flex flex-col p-6 sm:p-10 w-full max-w-[1114px] rounded-xl mx-auto mt-30 mb-20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6 w-full">
          <div className="flex flex-col w-full max-w-[368px]">
            <label className="text-black text-[14px] mb-2">First Name</label>
            <MyTextField
              type="text"
              id="First Name"
              placeholder="Enter First Name"
              required
              value=""
            />
          </div>

          <div className="flex flex-col w-full max-w-[368px]">
            <label className="text-black text-[14px] mb-2">Last Name</label>
            <MyTextField
              type="text"
              id="last_name"
              placeholder="Enter Last Name"
              required
              value=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[368px] mb-10">
            <label className="text-black text-[14px] mb-2">Password</label>
            <MyTextField
              type="password"
              id="Password"
              placeholder="Password"
              required
              value=""
            />
          </div>

        <MyButton className="!normal-case !w-[219px] !h-[37px] !text-[11px] text-white !bg-[#0FAC81] rounded">
          Save
        </MyButton>

      </div>

    </>
  )
}

export default Profile
