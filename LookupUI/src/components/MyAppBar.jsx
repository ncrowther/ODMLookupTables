import React, { useState } from "react";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export default function MyAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLink = (link) => {
    setMenuOpen(false);
    window.open(link);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IBM Operational Decision Manager
        </Typography>

        {/* <Button color="inherit" onClick={(e) => setMenuOpen(true)}>
          Links
        </Button> */}
        <Icons>
          <HelpCenterIcon fontSize="large" onClick={(e) => setMenuOpen(true)} />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuOpen}
        onClose={(e) => setMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={(e) => handleLink("https://www.ibm.com/products/operational-decision-manager?utm_content=SRCWW&p1=Search&p4=43700074894717407&p5=e&gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_nQd181dthEVasQLjmiL7tHUmGXFh_-W3dMRJgaISh9l6X7qeCAw2AaAqM8EALw_wcB&gclsrc=aw.ds")}
        >
          IBM Docs
        </MenuItem>
  
      </Menu>
    </AppBar>
  );
}
