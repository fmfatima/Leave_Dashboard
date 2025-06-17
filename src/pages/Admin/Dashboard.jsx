import Dashboardd from "../../features/Admin/Dashboard"
import SideBarr from './SideBarr'
import { Box } from "@mui/material"

const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
      {/* Sidebar - fixed width on the left */}
      <div>
        <SideBarr />
      </div>

      {/* Main content area - flex column */}
      <div className="flex flex-col flex-1 sm:px-6 lg:px-10 mt-5 space-y-6">
        {/* Dashboard at top */}
        <Dashboardd />
         </div>
      </Box>
    </>
  )
}

export default Dashboard
