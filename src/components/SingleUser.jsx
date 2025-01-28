import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRollback } from "react-icons/ai";
import React from "react";
import { mockUsers } from "./data/mockusers"; // Assuming mockUsers data is in a file named data.js
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "./common/PageHeader";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = mockUsers.find((user) => user.id == id);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="min-h-screen text-white px-6 sm:px-8 md:px-12">
      <PageHeader title="User Details" />
      <div className="max-w-7xl mx-auto mt-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-white text-gray-900 px-6 py-2 rounded-md mb-6 flex items-center gap-2"
          >
            <AiOutlineRollback /> Back
          </button>

          <button
            onClick={() => navigate(-1)}
            className="bg-white text-gray-900 px-6 py-2 rounded-md mb-6 flex items-center gap-2"
          >
            <AiFillEdit /> Edit
          </button>
        </div>

        <div className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Full Name:</strong>
                  <span className="text-black">{user.fullName}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">City:</strong>
                  <span className="text-black">{user.city}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Gender:</strong>
                  <span className="text-black">{user.gender}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Email:</strong>
                  <span className="text-black">{user.email}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Mobile:</strong>
                  <span className="text-black">{user.mobile}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Address:</strong>
                  <span className="text-black">{user.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Information */}
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Extended Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Date of Birth:</strong>
                  <span className="text-black">{user.dob}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Time of Birth:</strong>
                  <span className="text-black">{user.timeOfBirth}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">
                    Place of Birth:
                  </strong>
                  <span className="text-black">{user.placeOfBirth}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">
                    Marital Status:
                  </strong>
                  <span className="text-black">{user.maritalStatus}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Disabilities:</strong>
                  <span className="text-black">{user.disabilities}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Height:</strong>
                  <span className="text-black">{user.height}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Weight:</strong>
                  <span className="text-black">{user.weight} kg</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Complexion:</strong>
                  <span className="text-black">{user.complexion}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Hobbies
            </h2>
            <div className="flex items-center">
              <strong className="text-gray-600 w-40">Hobbies:</strong>
              <span className="text-black">{user.hobbies}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
