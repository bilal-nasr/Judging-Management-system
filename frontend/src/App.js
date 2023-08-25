import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login"; // Your Login component

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
