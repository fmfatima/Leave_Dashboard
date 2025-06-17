import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Admin/Dashboard';
import EmployeeDetails from './pages/Admin/EmployeeDetails';
import Leaves_to_Approve from './pages/Admin/Leaves_to_Approve';
import MyLeaves  from './pages/Admin/MyLeaves';
import Profile  from './pages/Company/Profile';
import Create_Company from './pages/Company/Create_Company';
import CompanyStatus from './pages/Company/CompanyStatus';

import Emp_Dashboard from './pages/Employee/Emp_Dashboard'
import LeaveSettings from './pages/LeaveSettings/LeaveSettings';
import EmpLeaves from './pages/Employee/EmpLeaves';
import ResetPassword from './pages/Password/ResetPassword'
import ForgetPassword from './pages/Password/ForgetPassword'
import Nav from './pages/Login/Nav';

const theme = createTheme({
  palette: {
    primary: { main: '#0FAC81' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      {/* <Home /> */}
        <Routes> 
          <Route path="/" element={<Nav />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />

          <Route path='/admin/dashboard' exact element = {<Dashboard/>} />
          <Route path='/admin/employee/details' exact element = {<EmployeeDetails/>} />
          <Route path='/admin/leaveToApprove' exact element = {<Leaves_to_Approve/>} />
          <Route path='/admin/leaves' exact element = {<MyLeaves/>} />
          <Route path='/admin/profile' exact element = {<Profile/>} />

          <Route path='/company/new' exact element = {<Create_Company/>} />
          <Route path='/company/status' exact element = {<CompanyStatus/>} />

          <Route path='/employee/dashboard' exact element = {<Emp_Dashboard/>} />
          <Route path='/employee/leavestatus' exact element = {<EmpLeaves/>} />
          <Route path='/applyleaves' exact element = {<LeaveSettings/>} />



        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
