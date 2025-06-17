import EmpDetails from "../../features/Admin/EmployeeDetails"
import Dashboardd from "../../features/Admin/Dashboard"
import SideBarr from './SideBarr'
import { Box } from "@mui/material"

const EmployeeDetails = () => {
  return (
    <Box className="flex min-h-screen w-full">
      <div className="sidebar transition-all duration-300">
        <SideBarr />
      </div>

      <div className="flex-1 flex flex-col px-2 sm:px-6 lg:px-10 mt-5 space-y-6 transition-all duration-300">
        <Dashboardd />
        <EmpDetails />
      </div>
    </Box>
  )
}

export default EmployeeDetails
