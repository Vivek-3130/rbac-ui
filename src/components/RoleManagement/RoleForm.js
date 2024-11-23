import React from "react";

const RoleForm = ({ formData, onChange, onPermissionsChange }) => {
  const handleCheckboxChange = (permission) => {
    const updatedPermissions = formData.permissions.includes(permission)
      ? formData.permissions.filter((perm) => perm !== permission)
      : [...formData.permissions, permission];
    onPermissionsChange(updatedPermissions);
  };

  return (
    <form>
      <div>
        <label>Role Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Permissions:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={formData.permissions.includes("Read")}
              onChange={() => handleCheckboxChange("Read")}
            />
            Read
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.permissions.includes("Write")}
              onChange={() => handleCheckboxChange("Write")}
            />
            Write
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.permissions.includes("Delete")}
              onChange={() => handleCheckboxChange("Delete")}
            />
            Delete
          </label>
        </div>
      </div>
    </form>
  );
};

export default RoleForm;
