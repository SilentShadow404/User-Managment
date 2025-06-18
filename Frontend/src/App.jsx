import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser.jsx";
import EditUser from "./components/EditUser.jsx";
import UserList from "./components/UserList.jsx";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
