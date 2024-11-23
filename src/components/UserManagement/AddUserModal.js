import React, { useState } from 'react';

const AddUserModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', status: 'Active' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Add User</h3>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddUserModal;
