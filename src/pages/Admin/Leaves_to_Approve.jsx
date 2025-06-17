import LeaveApprove from "../../features/Admin/LeaveToApprove"
import Dashboardd from "../../features/Admin/Dashboard"
import SideBarr from './SideBarr'
import { Box } from "@mui/material"

const Leaves_to_Approve = () => {
  return (
    <Box className="flex min-h-screen w-full">
      <div className="sidebar transition-all duration-300">
        <SideBarr />
      </div>

      <div className="flex-1 flex flex-col px-2 sm:px-6 lg:px-10 mt-5 space-y-6 transition-all duration-300">
        <Dashboardd />
        <LeaveApprove />
      </div>
    </Box>
  )
}

export default Leaves_to_Approve
