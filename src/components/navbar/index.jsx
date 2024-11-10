import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Navbar = () => {
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
    </AppBar>
  );
};

export default Navbar;
