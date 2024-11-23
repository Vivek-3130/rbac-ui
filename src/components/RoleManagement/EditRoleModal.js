import React, { useState } from "react";
import RoleForm from "./RoleForm";

const EditRoleModal = ({ role, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: role.name,
    description: role.description,
    permissions: role.permissions,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePermissionsChange = (permissions) => {
    setFormData({ ...formData, permissions });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Edit Role</h3>
      <RoleForm
        formData={formData}
        onChange={handleChange}
        onPermissionsChange={handlePermissionsChange}
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditRoleModal;
