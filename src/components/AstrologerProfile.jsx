import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAstrologer, editAstrologer, deleteAstrologer } from '../redux/Astrologer/AstrologerSlice';
import { v4 as uuidv4 } from 'uuid'; 

const AstrologerProfile = () => {
  const dispatch = useDispatch();

  // Corrected key in useSelector
  const Astrologers = useSelector((state) => state.Astrologer || []);
  console.log(Astrologers);

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

  // Filter Astrologers based on search term and age
  const filteredAstrologers = Astrologers.filter(
    (Astrologer) =>
      Astrologer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (ageFilter === '' || Astrologer.age === Number(ageFilter))
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission for add/edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editAstrologer(formData));
      setIsEditing(false);
    } else {
      dispatch(
        addAstrologer({
          ...formData,
          id: uuidv4(), // Generate unique ID using UUID
        })
      );
    }
    setFormData({ id: null, name: '', age: '', contact: '', subCaste: '', address: '', image: '' });
  };

  // Handle edit action
  const handleEdit = (Astrologer) => {
    setFormData({ ...Astrologer }); // Ensure formData is fully copied
    setIsEditing(true);
  };

  // Handle delete action
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      dispatch(deleteAstrologer(id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Astrologer Profiles</h1>

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
        <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Astrologer' : 'Add Astrologer'}</h2>
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
            type="file"
            name="image"
            accept="image/*"
            className="border border-gray-300 rounded-md px-4 py-2"
            onChange={handleImageChange}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          {isEditing ? 'Update Astrologer' : 'Add Astrologer'}
        </button>
      </form>

      {/* Astrologer Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAstrologers.length > 0 ? (
          filteredAstrologers.map((Astrologer) => (
            <div
              key={Astrologer.id}
              className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={Astrologer.image}
                alt={Astrologer.name}
                className="h-32 w-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{Astrologer.name}</h3>
              <p className="text-gray-600 text-center">Age: {Astrologer.age}</p>
              <p className="text-gray-600 text-center">Sub-caste: {Astrologer.subCaste}</p>
              <p className="text-gray-600 text-center">Contact: {Astrologer.contact}</p>
              <p className="text-gray-600 text-center">Address: {Astrologer.address}</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => handleEdit(Astrologer)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(Astrologer.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No matching Astrologer profiles found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AstrologerProfile;
