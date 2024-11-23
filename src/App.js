import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";
import RolePage from "./pages/RolePage";
import PermissionsPage from "./pages/PermissionsPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/roles" element={<RolePage />} />
      <Route path="/permissions" element={<PermissionsPage />} />
    </Routes>
  </Router>
);

export default App;
