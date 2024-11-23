import React from "react";

const UserForm = ({ formData, onChange }) => (
  <form>
    <div>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
        required
      />
    </div>
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
      />
    </div>
    <div>
      <label>Role:</label>
      <select
        name="role"
        value={formData.role}
        onChange={onChange}
        required
      >
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
    </div>
    <div>
      <label>Status:</label>
      <select
        name="status"
        value={formData.status}
        onChange={onChange}
        required
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  </form>
);

export default UserForm;
