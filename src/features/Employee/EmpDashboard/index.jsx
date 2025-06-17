import {useNavigate} from "react-router-dom";
import MyButton from "../../../components/MyButton";

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border border-gray-300 rounded-lg space-y-4 sm:space-y-0">
      
      <div className="flex flex-col text-[#575757]">
        <h1 className="text-xl md:text-2xl font-bold">Welcome to Leave Work</h1>
        <p className="text-sm">We have assembled some links to get you started!</p>
      </div>

      <div className="flex md:gap-4  self-end md:self-auto">
        <MyButton 
          variant="outlined" 
          onClick={() => {navigate ('/applyleaves')}} 
          className="!normal-case !w-[140px] !h-[34px] !text-[11px] !text-[#0FAC81] !border !border-[#0FAC81] !bg-transparent"
        >
          Leave Settings
        </MyButton>
      </div>

    </div>
  );
};

export default EmployeeDashboard;
