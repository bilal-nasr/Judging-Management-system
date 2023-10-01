import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from "react-router-dom";
import Auth from "./Auth";
import ProfileViewer from "./Pages/Admin/ViewProfile/ProfileViewer";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";

function PrivateRoute({ element }) {
  // Check for authentication
  if (!Auth.isAuthenticated()) {
    // Redirect using the Navigate component
    return <Navigate to="/login" replace />;
  }

  return element;
}

function App() {
  console.log("from app ", Auth.isAuthenticated());

  return (
    <Router>
      <Routes>
        <Route
          path="/profileviewer/:id"
          element={<PrivateRoute element={<ProfileViewer />} />}
        />

        <Route
          path="/login"
          element={
            Auth.isAuthenticated() ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage />
            )
          }
        />

        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
