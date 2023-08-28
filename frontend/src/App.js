import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login"; // Your Login component
import Dashboard from "./Dashboard/dashboard"
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
