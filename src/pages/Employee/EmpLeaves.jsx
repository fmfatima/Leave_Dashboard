import EmployeeLeaves from "../../features/Employee/EmpLeaveDetails"
import EmployeeDashboard from "../../features/Employee/EmpDashboard"
import EmpSidebar from "../Employee/EmpSideBar"
import { Box } from "@mui/material"

const EmpLeaves = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <EmpSidebar />
      </div>

      <div className="flex flex-col flex-1 sm:px-6 lg:px-10 mt-5 space-y-6">
 
        <EmployeeDashboard />
        <EmployeeLeaves />

         </div>
      </Box>
  )
}

export default EmpLeaves
