import React, { useState } from "react";
import PermissionsTable from "../components/Permissions/PermissionsTable";

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read", description: "Allows reading data" },
    { id: 2, name: "Write", description: "Allows modifying data" },
    { id: 3, name: "Delete", description: "Allows deleting data" },
  ]);

  const handleAddPermission = (name) => {
    if (!permissions.some((perm) => perm.name === name)) {
      setPermissions([
        ...permissions,
        {
          id: permissions.length + 1,
          name,
          description: `Description for ${name}`, // Default description
        },
      ]);
    }
  };

  const handleDeletePermission = (id) => {
    setPermissions(permissions.filter((perm) => perm.id !== id));
  };

  return (
    <div>
      <h2>Manage Permissions</h2>
      <div>
        <input
          type="text"
          placeholder="Add new permission"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              handleAddPermission(e.target.value.trim());
              e.target.value = "";
            }
          }}
        />
      </div>
      <PermissionsTable
        permissions={permissions}
        onDelete={handleDeletePermission}
      />
    </div>
  );
};

export default PermissionsPage;
