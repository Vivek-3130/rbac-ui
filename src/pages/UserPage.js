import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import AddUserModal from "../components/UserManagement/AddUserModal";
import EditUserModal from "../components/UserManagement/EditUserModal";

const UserPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <button onClick={() => setShowAddModal(true)}>Add User</button>
      <UserTable
        users={users}
        onEdit={(user) => {
          setSelectedUser(user);
          setShowEditModal(true);
        }}
        onDelete={handleDeleteUser}
      />
      {showAddModal && <AddUserModal onClose={() => setShowAddModal(false)} onSave={handleAddUser} />}
      {showEditModal && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setShowEditModal(false)}
          onSave={handleEditUser}
        />
      )}
    </div>
  );
};

export default UserPage;
