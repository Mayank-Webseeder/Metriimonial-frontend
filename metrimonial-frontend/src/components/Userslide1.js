import React, { useState } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";

function Userslide1() {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
        { id: 3, name: "Alice Brown", age: 30, email: "alice@example.com" },
      ]);
    
      const [search, setSearch] = useState("");
      const [filterAge, setFilterAge] = useState("");
    
      const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
      };
    
      const handleUpdate = (id) => {
        const updatedName = prompt("Enter new name:");
        if (updatedName) {
          setUsers(
            users.map((user) =>
              user.id === id ? { ...user, name: updatedName } : user
            )
          );
        }
      };
    
      const filteredUsers = users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) &&
          (!filterAge || user.age.toString() === filterAge)
      );
    
      return (
        <div className="ml-64 p-6"> {/* Offset for Sidebar */}
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
    
          {/* Search and Filter */}
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="Search by name"
              className="p-2 border rounded-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
              type="number"
              placeholder="Filter by age"
              className="p-2 border rounded-md"
              value={filterAge}
              onChange={(e) => setFilterAge(e.target.value)}
            />
          </div>
    
          {/* User Table */}
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Age</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.age}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2 flex space-x-2">
                    <button
                      onClick={() => handleUpdate(user.id)}
                      className="px-3 py-1 text-white bg-blue-500 rounded-md flex items-center space-x-2"
            
                    >
                         <FaEdit className="mr-1" />
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1 text-white bg-red-500 rounded-md flex items-center space-x-2"
                    >
                    <FaTrash className="mr-1" />
                     Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Userslide1
