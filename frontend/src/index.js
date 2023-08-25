import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Your main App component

// Use createRoot to render your app
const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
