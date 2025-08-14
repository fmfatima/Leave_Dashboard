import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";


import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function EmpSideBar() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/home");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          {/* Dashboard */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/employee/dashboard")}>
            <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          {/* Leave Status */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/employee/leavestatus")}>
            <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon><FaRegCircleCheck /></ListItemIcon>
              <ListItemText primary="Leave Status" />
            </ListItemButton>
          </ListItem>

          {/* Logout */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleLogout}>
            <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon><IoIosLogOut /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

          {/* Collapse Menu */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => setOpen(!open)}>
            <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon><IoArrowBackCircleOutline /></ListItemIcon>
              <ListItemText primary="Collapse Menu" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}