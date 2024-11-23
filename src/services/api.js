const API_URL = "https://jsonplaceholder.typicode.com"; // Replace with actual backend URL

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const fetchRoles = async () => {
  const response = await fetch(`${API_URL}/roles`);
  return response.json();
};

export const fetchPermissions = async () => {
  const response = await fetch(`${API_URL}/permissions`);
  return response.json();
};

export const addUser = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Add other API functions as required for roles and permissions.
