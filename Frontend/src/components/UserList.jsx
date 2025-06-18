import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700">User Management</h1>

      <div className="flex justify-end mb-8 space-x-4">
        <Link
          to="/add"
          className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-green-700 transition"
        >
          Add User
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1"> {user.email}</p>
            <p className="text-gray-600 mb-1"> {user.city}</p>
            <p className="text-gray-600 mb-4"> {user.age} years old</p>

            <div className="flex justify-between">
              <Link
                to={`/edit/${user.id}`}
                className="bg-yellow-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
