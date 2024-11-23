import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome to the Role-Based Access Control Management System!</p>
    <div>
      <Link to="/users">Manage Users</Link>
    </div>
    <div>
      <Link to="/roles">Manage Roles</Link>
    </div>
    <div>
      <Link to="/permissions">Manage Permissions</Link>
    </div>
  </div>
);

export default Dashboard;
