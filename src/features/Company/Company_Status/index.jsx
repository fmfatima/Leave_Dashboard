import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Nav from "../../../components/ui/Nav";


const CompStatus = () => {
   const navigate = useNavigate();
   
  return (
    <>
    <Nav />
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-start mt-10 ml-2 sm:ml-0 absolute right-1/2 top-1/2 -translate-y-1/2">
          {/* Profile Card */}
          <div className="flex flex-col items-center bg-[#F6F6F6] rounded-xl shadow w-[200px] sm:w-[220px] md:w-[254px] h-auto p-3 sm:p-4">
            <img
              src="src/assets/profile1.png"
              alt="Profile"
              onClick={() => navigate('/admin/profile')}
              className="cursor-pointer w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-lg"
            />
            <div className="flex items-start justify-between mt-3">
              <span className="text-base sm:text-lg font-semibold">Profile</span>
              <button
                onClick={() => navigate('/admin/profile')}
                className="ml-2 p-1 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer"
              >
                <FaPlus size={16} />
              </button>
            </div>
          </div>
    
          {/* Company Card */}
          <div className="flex flex-col items-center bg-[#F6F6F6] rounded-xl shadow w-[200px] sm:w-[220px] md:w-[254px] h-auto p-3 sm:p-4">
            <img
              src="src/assets/company.png"
              alt="Company"
              onClick={() => navigate('/company/new')}
              className="cursor-pointer w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-lg"
            />
            <div className="flex items-start justify-between mt-3">
              <span className="text-base sm:text-lg font-semibold">Company</span>
              <button
                onClick={() => navigate('/company/new')}
                className="ml-2 p-1 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer"
              >
                <FaPlus size={16} />
              </button>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default CompStatus
