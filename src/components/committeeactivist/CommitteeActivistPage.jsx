import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CommitteeActivistPage = () => {
  const [cityFilter, setCityFilter] = useState('');
  const [subCasteFilter, setSubCasteFilter] = useState('');
  const committeeData = [
    { name: 'Vineshkumarji group', city: 'Indore', subCaste: 'Sub-caste A', area: 'area', image: '/MatrimonialProfile.png' },
    { name: 'Vineshkumarji group', city: 'Bhopal', subCaste: 'Sub-caste B', area: 'area', image: '/MatrimonialProfile.png' },
    { name: 'Vineshkumarji group', city: 'Indore', subCaste: 'Sub-caste A', area: 'area', image: '/MatrimonialProfile.png' },
    { name: 'Vineshkumarji group', city: 'city', subCaste: '', area: 'area', image: '/MatrimonialProfile.png' }
  ];

  // Filter logic
  const filteredData = committeeData.filter(item =>
    (cityFilter ? item.city.toLowerCase().includes(cityFilter.toLowerCase()) : true) &&
    (subCasteFilter ? item.subCaste === subCasteFilter : true)
  );

  return (
    <div className="p-4 font-sans">
      {/* Filter Section */}
      <div className="flex justify-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Filter by City"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <select
          value={subCasteFilter}
          onChange={(e) => setSubCasteFilter(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Sub-castes</option>
          <option value="Sub-caste A">Sub-caste A</option>
          <option value="Sub-caste B">Sub-caste B</option>
        </select>
       <Link to='/upload'> <button className="border px-4 py-2 rounded text-white bg-[#762140]">Upload</button></Link>
      </div>

      {/* Committee Cards Section */}
      <div className="space-y-4">
        {filteredData.map((item, index) => (
          <div key={index} className="flex items-center p-4 border rounded-lg shadow-md">
            <img src={item.image} alt="Profile" className="rounded-full w-20 h-20 mr-4" />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p>{item.city} | {item.subCaste} | {item.area}</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center ">
                <span className="mr-2">Save</span>🔖
              </button>
              <button className="flex items-center">
                <span className="mr-2">Shares</span>📤
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeActivistPage;
