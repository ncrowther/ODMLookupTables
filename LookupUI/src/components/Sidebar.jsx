import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Group, Home } from "@mui/icons-material";

import SellIcon from "@mui/icons-material/Sell";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleRouteClick = (route) => {
    navigate(route);
  };

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleRouteClick("/")}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleRouteClick("/DiallingCode")}>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Dialling Code" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleRouteClick("/CurrencyCode")}>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Currrency Code" />
            </ListItemButton>
          </ListItem>          
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
