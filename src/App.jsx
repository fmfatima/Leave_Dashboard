import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ import Routes
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import Dashboard from './pages/Admin/Dashboard';
// import EmployeeDetails from './pages/Admin/EmployeeDetails';
// import Leaves_to_Approve from './pages/Admin/Leaves_to_Approve';
// import MyLeaves  from './pages/Admin/MyLeaves';
import Profile  from './pages/Company/Profile';
// import Create_Company from './pages/Company/Create_Company';
// import CompanyStatus from './pages/Company/CompanyStatus';

const theme = createTheme({
  palette: {
    primary: { main: '#0FAC81' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Profile />
        {/* <Routes> 

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/dashboard' exact element = {<Dashboard/>} />
          <Route path='/empdetails' exact element = {<EmployeeDetails/>} />
          <Route path='/leaveapprove' exact element = {<Leaves_to_Approve/>} />
          <Route path='/myleave' exact element = {<MyLeaves/>} />
          <Route path='/profile' exact element = {<Profile/>} />
          <Route path='/createCompany' exact element = {<Create_Company/>} />
          <Route path='/compStatus' exact element = {<CompanyStatus/>} />
        </Routes> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
