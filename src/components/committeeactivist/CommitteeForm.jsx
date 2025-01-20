import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CommitteeForm = () => {
    const [formData, setFormData] = useState({
        committeeName: '',
        subCasteName: '',
        city: '',
        area: '',
        committeeImage: null
    });

    let navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        setFormData({ ...formData, committeeImage: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted successfully!');
        navigate('/committee-activist');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              

                {/* Committee Heading and SVG Icon in the same line */}
                <div className="flex items-center mb-4">
                <Link to='/committee-activist'>
                    <button className="text-gray-700 mt-2 text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </Link>
                    <h1 className="text-2xl font-bold text-red-700 mr-2">Committee</h1>
                </div>

                <h2 className="text-lg font-semibold text-red-600 mb-6">Upload Committee Details</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Committee Name *</label>
                        <input
                            type="text"
                            name="committeeName"
                            value={formData.committeeName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                            placeholder="Enter Committee Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Sub-Caste Name *</label>
                        <input
                            type="text"
                            name="subCasteName"
                            value={formData.subCasteName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                            placeholder="Enter Sub-Caste Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">City *</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                            placeholder="Enter City"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Area *</label>
                        <input
                            type="text"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                            placeholder="Enter Area"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Upload Your Committee Image *</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-fullbg-[#762140] text-white p-3 rounded-lg hover:bg-[#762140]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommitteeForm;
