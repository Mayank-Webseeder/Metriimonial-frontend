// File: src/App.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPandit, editPandit, deletePandit } from '../redux/pandit/Panditslice';

const Panditprofile = () => {
  const dispatch = useDispatch();

  const pandits = useSelector((state) => state.pandits.pandits);

  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    age: '',
    contact: '',
    subCaste: '',
    address: '',
    image: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  // Filter pandits based on search term and age
  const filteredPandits = pandits.filter(
    (pandit) =>
      pandit.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (ageFilter === '' || pandit.age === Number(ageFilter))
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for add/edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editPandit(formData));
      setIsEditing(false);
    } else {
      dispatch(
        addPandit({
          ...formData,
          id: Date.now(), // Generate unique ID
          image: formData.image || 'https://via.placeholder.com/150', // Default image if empty
        })
      );
    }
    setFormData({ id: null, name: '', age: '', contact: '', subCaste: '', address: '', image: '' });
  };

  // Handle edit action
  const handleEdit = (pandit) => {
    setFormData(pandit);
    setIsEditing(true);
  };

  // Handle delete action
  const handleDelete = (id) => {
    dispatch(deletePandit(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Pandit Profiles</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by age..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/3"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        />
      </div>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Pandit' : 'Add Pandit'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subCaste"
            placeholder="Sub-caste"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.subCaste}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          {isEditing ? 'Update Pandit' : 'Add Pandit'}
        </button>
      </form>

      {/* Pandit Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPandits.length > 0 ? (
          filteredPandits.map((pandit) => (
            <div
              key={pandit.id}
              className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={pandit.image}
                alt={pandit.name}
                className="h-32 w-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{pandit.name}</h3>
              <p className="text-gray-600 text-center">Age: {pandit.age}</p>
              <p className="text-gray-600 text-center">Sub-caste: {pandit.subCaste}</p>
              <p className="text-gray-600 text-center">Contact: {pandit.contact}</p>
              <p className="text-gray-600 text-center">Address: {pandit.address}</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => handleEdit(pandit)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pandit.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No matching pandit profiles found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Panditprofile;
