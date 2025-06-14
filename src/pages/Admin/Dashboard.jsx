import MyButton from "../../components/MyButton";
import Box from '@mui/material/Box';
import { IoIosClose } from "react-icons/io";
import { MdOutlinePersonAdd } from "react-icons/md";
import { useState } from "react";
import MyTextField from "../../components/MyTextField";
import SideBar from "./SideBar";
  
const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Box sx={{ display: 'flex' }}>

      <SideBar />

      <div className="w-full max-w-[1020px] flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border border-gray-300 rounded-lg m-4 space-y-4 sm:space-y-0">
      <div className="flex flex-col text-[#575757]">
        <h1 className="text-xl sm:text-2xl font-bold">Welcome to Leave Work</h1>
        <p className="text-sm sm:text-base">We have assembled some links to get you started!</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto items-end sm:items-center">
        <MyButton 
          variant="outlined" 
          onClick={() => {}} 
          className="!normal-case !w-[140px] !h-[34px] !text-[11px] !text-[#0FAC81] !border !border-[#0FAC81] !bg-transparent"
        >
          Leave Settings
        </MyButton>

        <MyButton 
          onClick={() => setOpen(true)} 
          className="!normal-case !w-[140px] !h-[34px] !text-[11px] text-white !bg-[#0FAC81] rounded"
        >
          Invite employees <MdOutlinePersonAdd className="size-[16px]" />
        </MyButton>

      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-[432px]">

            {/* Cross Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              <IoIosClose />
            </button>

            {/* Modal Content */}
            <h2 className="text-[#575757] text-[16px] font-semibold mb-4 text-center">
              Invite Employees
            </h2>

            <h1 className="text-[#000000] text-[14px] mb-2 mt-6">Email:</h1>
            <div className="w-full mb-5">
              <MyTextField
                type="email"
                id="email"
                placeholder="Enter Employee Email"
                required
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <MyButton
                type="submit"
                className="!normal-case !w-full sm:!w-[179px] !h-[37px] !bg-[#0FAC81]"
              >
                Send Invite
              </MyButton>
            </div>
          </div>
        </div>
      )}
    </div>

    </Box>
  </>
    
  );
};

export default Dashboard;
