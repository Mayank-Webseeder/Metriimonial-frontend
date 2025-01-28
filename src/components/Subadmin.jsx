import { AiOutlineUserAdd } from "react-icons/ai";
import React, { useState } from "react";
import { FaTrash, FaEdit, FaEye, FaPlus } from "react-icons/fa";
import PageHeader from "./common/PageHeader";

const CommunityMembers = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      city: "New York",
      designation: "Manager",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      city: "Los Angeles",
      designation: "Assistant",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      city: "Chicago",
      designation: "Coordinator",
      phone: "555-123-4567",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const [editingMember, setEditingMember] = useState(null);
  const [viewingMember, setViewingMember] = useState(null);
  const [addingMember, setAddingMember] = useState(false);

  // Handle searching
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMembers = members.filter((member) =>
    member[filterBy].toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle updating member
  const handleUpdate = (updatedMember) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setEditingMember(null);
  };

  // Handle deleting member
  const handleDelete = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  // Handle adding new member
  const handleAddMember = (newMember) => {
    setMembers((prev) => [...prev, { ...newMember, id: members.length + 1 }]);
    setAddingMember(false);
  };

  return (
    <div className="p-6 pt-0 bg-gray-900 min-h-screen">
      <PageHeader title="Community Members" />

      <div className="flex justify-between items-center">
        {/* Search and Filter */}
        <div className="flex items-center gap-4 my-6">
          <input
            type="text"
            placeholder={`Search by ${filterBy}`}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="border p-2 rounded-md"
          />
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="name">Name</option>
            <option value="city">City</option>
            <option value="designation">Designation</option>
          </select>
        </div>

        <button
          className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-700 hover:text-white flex items-center"
          onClick={() => setAddingMember(true)}
        >
          <AiOutlineUserAdd size={25} />
        </button>
      </div>
      {/* Table */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <table className="w-full text-left border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-900 text-white uppercase">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">City</th>
              <th className="py-2 px-4 text-left">Designation</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">View</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{member.name}</td>
                <td className="py-2 px-4">{member.email}</td>
                <td className="py-2 px-4">{member.city}</td>
                <td className="py-2 px-4">{member.designation}</td>
                <td className="py-2 px-4">{member.phone}</td>
                <td className="py-2 px-4">
                  <button
                    className="p-2 text-white bg-gray-900 hover:bg-gray-600 rounded-full flex items-center"
                    onClick={() => setViewingMember(member)}
                  >
                    <FaEye size={15} />
                  </button>
                </td>
                <td className="py-2 px-4 flex gap-2">
                  <button
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 flex items-center"
                    onClick={() => setEditingMember(member)}
                  >
                    <FaEdit size={15} />
                  </button>

                  <button
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 flex items-center"
                    onClick={() => handleDelete(member.id)}
                  >
                    <FaTrash size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Member Popup */}
      {addingMember && (
        <div
          onClick={(e) => {
            if (e.target.classList.contains("fixed")) {
              setAddingMember(false);
            }
          }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4 underline">
              Add Community Member
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newMember = {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  city: e.target.city.value,
                  designation: e.target.designation.value,
                  phone: e.target.phone.value,
                };
                handleAddMember(newMember);
              }}
            >
              <div className="mb-4">
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">City</label>
                <input
                  type="text"
                  name="city"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Designation</label>
                <input
                  type="text"
                  name="designation"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-900 text-white px-4 py-1 rounded-md hover:bg-gray-600"
                  onClick={() => setAddingMember(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Popup */}
      {editingMember && (
        <div
          onClick={(e) => {
            if (e.target.classList.contains("fixed")) {
              setEditingMember(null);
            }
          }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4 underline">
              Update Community Member
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(editingMember);
              }}
            >
              <div className="mb-4">
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  value={editingMember.name}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, name: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  value={editingMember.email}
                  onChange={(e) =>
                    setEditingMember({
                      ...editingMember,
                      email: e.target.value,
                    })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">City</label>
                <input
                  type="text"
                  value={editingMember.city}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, city: e.target.value })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Designation</label>
                <input
                  type="text"
                  value={editingMember.designation}
                  onChange={(e) =>
                    setEditingMember({
                      ...editingMember,
                      designation: e.target.value,
                    })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Phone</label>
                <input
                  type="text"
                  value={editingMember.phone}
                  onChange={(e) =>
                    setEditingMember({
                      ...editingMember,
                      phone: e.target.value,
                    })
                  }
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-900 text-white px-4 py-1 rounded-md hover:bg-gray-600"
                  onClick={() => setEditingMember(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Popup */}
      {viewingMember && (
        <div
          onClick={(e) => {
            if (e.target.classList.contains("fixed")) {
              setViewingMember(null);
            }
          }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 underline">
              Community Member Details
            </h2>
            <p>
              <strong>Name:</strong> {viewingMember.name}
            </p>
            <p>
              <strong>Email:</strong> {viewingMember.email}
            </p>
            <p>
              <strong>City:</strong> {viewingMember.city}
            </p>
            <p>
              <strong>Designation:</strong> {viewingMember.designation}
            </p>
            <p>
              <strong>Phone:</strong> {viewingMember.phone}
            </p>
            <div className="mt-4 text-right">
              <button
                className="bg-gray-900 text-white px-4 py-1 rounded-md hover:bg-gray-900/70"
                onClick={() => setViewingMember(null)}
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

export default CommunityMembers;
