import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    useNavigate,
    Routes,
  } from "react-router-dom";
import LoginPage from "./Pages/LoginPage"; // Your Login component
import Dashboard from "./Pages/Dashboard";
import Auth from "./Auth";


function PrivateRoute({ children }) {
    const navigate = useNavigate();
    //Auth.deAuthenticateUser()
    // Check if the user is authenticated
    if (!Auth.isUserAuthenticated()) { // Correct method name here
      // If not authenticated, redirect to the login page
      navigate('/login');
      return null; // Render nothing if not authenticated
    }
  
    // If authenticated, render the component
    return children;
  }

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
  );
}

export default App;
