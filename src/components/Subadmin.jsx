import React, { useState } from "react";
import { FaTrash, FaEdit, FaEye, FaPlus } from "react-icons/fa";

const SubAdmin = () => {
  const [subAdmins, setSubAdmins] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Manager" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Assistant" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Coordinator" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [viewingAdmin, setViewingAdmin] = useState(null);

  // Handle searching
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredAdmins = subAdmins.filter((admin) =>
    admin[filterBy].toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle updating sub-admin
  const handleUpdate = (updatedAdmin) => {
    setSubAdmins((prev) =>
      prev.map((admin) => (admin.id === updatedAdmin.id ? updatedAdmin : admin))
    );
    setEditingAdmin(null);
  };

  // Handle deleting sub-admin
  const handleDelete = (id) => {
    setSubAdmins((prev) => prev.filter((admin) => admin.id !== id));
  };

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sub-Admin Management</h1>

      {/* Search and Filter */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder={`Search by ${filterBy}`}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="border p-2 rounded-md flex-grow"
        />
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="name">Name</option>
          <option value="role">Role</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#762140] text-white uppercase">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">View</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.map((admin) => (
            <tr key={admin.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{admin.name}</td>
              <td className="py-2 px-4">{admin.email}</td>
              <td className="py-2 px-4">{admin.role}</td>
              <td className="py-2 px-4">
                <button
                  className="px-3 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-md flex items-center"
                  onClick={() => setViewingAdmin(admin)}
                >
                  <FaEye className="mr-1" /> View
                </button>
              </td>
              <td className="py-2 px-4 flex gap-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700 flex items-center"
                  onClick={() => setEditingAdmin(admin)}
                >
                  <FaEdit className="mr-1" /> Update
                </button>

                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700 flex items-center"
                  onClick={() => handleDelete(admin.id)}
                >
                  <FaTrash className="mr-1" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Popup */}
      {editingAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Update Sub-Admin</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(editingAdmin);
              }}
            >
              <div className="mb-4">
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  value={editingAdmin.name}
                  onChange={(e) =>
                    setEditingAdmin({ ...editingAdmin, name: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  value={editingAdmin.email}
                  onChange={(e) =>
                    setEditingAdmin({ ...editingAdmin, email: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Role</label>
                <input
                  type="text"
                  value={editingAdmin.role}
                  onChange={(e) =>
                    setEditingAdmin({ ...editingAdmin, role: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-1 rounded-md hover:bg-gray-600"
                  onClick={() => setEditingAdmin(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Popup */}
      {viewingAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Sub-Admin Details</h2>
            <p><strong>Name:</strong> {viewingAdmin.name}</p>
            <p><strong>Email:</strong> {viewingAdmin.email}</p>
            <p><strong>Role:</strong> {viewingAdmin.role}</p>
            <div className="mt-4 text-right">
              <button
                className="bg-[#762140] text-white px-4 py-1 rounded-md hover:bg-[#a5526b]"
                onClick={() => setViewingAdmin(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubAdmin;
