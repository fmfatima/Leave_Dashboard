import MyButton from "../../components/MyButton";
import { useNavigate } from 'react-router-dom';

const Homee = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-black flex items-center justify-center mt-10 px-4">
        <h1 className="text-[22px] sm:text-[25px] md:text-[28px] text-center font-400">
          HR and Leave Management System
        </h1>
      </div>

      <div className="flex items-center justify-center px-4 mt-4">
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-justify text-black max-w-3xl leading-relaxed">
          Cloud-based HR tools to track employee time-off (like vacations, personal time off, and leaves of absence), centralize workforce data, empower employees, and get accurate reports. Start saving time on employee management.
        </p>
      </div>

      <div className="flex items-center justify-center mt-4">
         <MyButton
          sx={{ fontSize: '20px', color: 'white' }}
          onClick={() => navigate('/login')}>
          Get Started
        </MyButton>
      </div>
    </>
  )
}

export default Homee
