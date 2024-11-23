import React from "react";

const PermissionsTable = ({ permissions, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Permission</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {permissions.map((perm) => (
        <tr key={perm.id}>
          <td>{perm.name}</td>
          <td>{perm.description}</td>
          <td>
            <button onClick={() => onDelete(perm.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PermissionsTable;
