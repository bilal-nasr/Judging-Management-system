import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "./Auth";
import ProfileViewer from "./Pages/Admin/ViewProfile/ProfileViewer";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import StarupEvaluation from "./Pages/Jury/StartupEvaluation";
import StartupBootcampViewer from "./Pages/Admin/ViewProfile/StartupBootcampViewer";

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
          path="/profileviewer/:role/:id"
          element={<PrivateRoute element={<ProfileViewer />} />}
        />

        <Route
          path="/startup/:jId/:Sid"
          element={<PrivateRoute element={<StarupEvaluation />} />}
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
        <Route
          path="/StartupBootcampViewer/:id"
          element={<PrivateRoute element={<ProfileViewer />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
