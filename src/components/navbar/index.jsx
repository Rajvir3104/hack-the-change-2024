import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const menuItems = [
    { text: "Home", path: "/dashboard" },
    { text: "Events", path: "/culture" },
    { text: "Employment", path: "/employment" },
    { text: "Organizations", path: "/resources" },
    { text: "Translator", path: "/translation" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#00a7ef' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pathways
        </Typography>

        {/* Navbar Links for Desktop View */}
        <div className="navbar-links">
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit" component={Link} to={item.path}>
              {item.text}
            </Button>
          ))}
        </div>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => toggleDrawer(false)} component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
