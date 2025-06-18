import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      navigate("/");
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-green-600">
          Add New User
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700">City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white text-lg py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
