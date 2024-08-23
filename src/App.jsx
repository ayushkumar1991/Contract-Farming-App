import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import SignInPage from './routes/SignInPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to redirect to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Route for the Login page */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Route for the Sign-In page */}
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
