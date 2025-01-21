import React, { useState } from 'react';
import DharmshalaCard from './DharmashalaCard';
import { Link } from 'react-router-dom';
// import DharmshalaCard from './DharmshalaCard';

const DharmshalaPage = () => {
    const [filterSubCaste, setFilterSubCaste] = useState('');
    const [filterCity, setFilterCity] = useState('');

    const dharmshalas = [
        {
            name: 'Hotel NH Valencia Center',
            location: 'Indore',
            phone: '+911234567890',
            cast: 'Brahmin',
            image: '/images/dharmshala1.jpg'
        },
        {
            name: 'Hotel Royal Indore',
            location: 'Indore',
            phone: '+919876543210',
            cast: 'Kshatriya',
            image: '/images/dharmshala2.jpg'
        },
        {
            name: 'Hotel Mahakaleshwar',
            location: 'Ujjain',
            phone: '+917654321098',
            cast: 'Vaishya',
            image: '/images/dharmshala3.jpg'
        }
    ];

    const filteredDharmshalas = dharmshalas.filter(d => 
        (filterSubCaste ? d.cast.toLowerCase().includes(filterSubCaste.toLowerCase()) : true) &&
        (filterCity ? d.location.toLowerCase().includes(filterCity.toLowerCase()) : true)
    );

    return (
        <div className="p-6">
            {/* Filter Section */}
            <div className="flex justify-center space-x-4 mb-6">
                <select 
                    className="border p-2 rounded" 
                    value={filterSubCaste}
                    onChange={(e) => setFilterSubCaste(e.target.value)}
                >
                    <option value="">Select Sub-caste</option>
                    <option value="Brahmin">Brahmin</option>
                    <option value="Kshatriya">Kshatriya</option>
                    <option value="Vaishya">Vaishya</option>
                </select>
                
                <input
                    className="border p-2 rounded"
                    placeholder="Enter City"
                    value={filterCity}
                    onChange={(e) => setFilterCity(e.target.value)}
                />

                <Link to='/add-dharmshala'><button className="bg-[#762140] text-white px-4 py-2 rounded">Upload</button></Link>
            </div>

            {/* Cards Section */}
            <div className="space-y-4">
                {filteredDharmshalas.map((d, index) => (
                    <DharmshalaCard key={index} dharmshala={d} />
                ))}
            </div>
        </div>
    );
};

export default DharmshalaPage;
