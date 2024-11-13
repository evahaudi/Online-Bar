// src/pages/Dashboard.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally clear stored token or user data
    localStorage.removeItem('userToken');
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
