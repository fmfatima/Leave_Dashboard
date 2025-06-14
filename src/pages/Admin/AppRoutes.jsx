import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import EmployeeDetails from './EmployeeDetails';
import Leaves_to_Approve from './Leaves_to_Approve';
import MyLeaves  from './MyLeaves';

const theme = createTheme({
  palette: {
    primary: { main: '#0FAC81' },
  },
});

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path='/' exact element = {<Dashboard/>} ></Route>
        <Route path='/employeedetails' exact element = {<EmployeeDetails/>} ></Route>
        <Route path='/leaveapprove' exact element = {<Leaves_to_Approve/>} ></Route>
        <Route path='/myleave' exact element = {<MyLeaves/>} ></Route>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRoutes;
