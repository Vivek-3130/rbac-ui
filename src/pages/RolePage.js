import React, { useState } from "react";
import RoleTable from "../components/RoleManagement/RoleTable";
import AddRoleModal from "../components/RoleManagement/AddRoleModal";
import EditRoleModal from "../components/RoleManagement/EditRoleModal";

const RolePage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", description: "Full access to the system", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", description: "Can edit content", permissions: ["Read", "Write"] },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleAddRole = (newRole) => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
  };

  const handleEditRole = (updatedRole) => {
    setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)));
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <h2>Manage Roles</h2>
      <button onClick={() => setShowAddModal(true)}>Add Role</button>
      <RoleTable
        roles={roles}
        onEdit={(role) => {
          setSelectedRole(role);
          setShowEditModal(true);
        }}
        onDelete={handleDeleteRole}
      />
      {showAddModal && <AddRoleModal onClose={() => setShowAddModal(false)} onSave={handleAddRole} />}
      {showEditModal && (
        <EditRoleModal
          role={selectedRole}
          onClose={() => setShowEditModal(false)}
          onSave={handleEditRole}
        />
      )}
    </div>
  );
};

export default RolePage;
