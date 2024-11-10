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
    <AppBar position="static" sx={{ backgroundColor: '#3ABEF9', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
          Pathways
        </Typography>

        <div className="navbar-links">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={item.path}
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                margin: '0 10px',
                '&:hover': {
                  color: '#3ABEF9',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
