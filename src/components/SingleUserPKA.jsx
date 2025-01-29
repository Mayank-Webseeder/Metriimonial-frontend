import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRollback } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "./common/PageHeader";
import {
  panditProfiles,
  jyotishProfiles,
  kathavachakProfiles,
} from "./data/specialistMockData";

const SpecialistProfile = () => {
  const { userType, id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState([]);

  // Use useEffect to set profileData based on userType
  useEffect(() => {
    if (userType === "pandit") {
      setProfileData(panditProfiles);
    } else if (userType === "astrologer") {
      setProfileData(jyotishProfiles);
    } else if (userType === "kathavachak") {
      setProfileData(kathavachakProfiles);
    } else {
      setProfileData([]);
    }
  }, [userType]); // This effect runs when `userType` changes

  const profile = profileData.find((p) => p.id == id);

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <div className="min-h-screen text-white px-6 sm:px-8 md:px-12">
      <PageHeader title={`${userType} Details`} />
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
                  <strong className="text-gray-600 w-40">Name:</strong>
                  <span className="text-black">{profile.fullName}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Mobile:</strong>
                  <span className="text-black">{profile.mobile}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">State:</strong>
                  <span className="text-black">{profile.state}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Village/City:</strong>
                  <span className="text-black">{profile.villageCity}</span>
                </div>
                {profile.area && (
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">Area:</strong>
                    <span className="text-black">{profile.area}</span>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Aadhar Number:</strong>
                  <span className="text-black">{profile.aadhar}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Sub Caste:</strong>
                  <span className="text-black">{profile.subCaste}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services and Experience */}
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Services & Experience
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <strong className="text-gray-600 w-40">Services:</strong>
                <span className="text-black">
                  {profile.services.join(", ")}
                </span>
              </div>
              <div className="flex items-center">
                <strong className="text-gray-600 w-40">Experience:</strong>
                <span className="text-black">{profile.experience} years</span>
              </div>
            </div>
          </div>

          {/* Subscription Details */}
          {profile.isSubscribed && (
            <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Subscription Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">Website:</strong>
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {profile.website}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">YouTube:</strong>
                    <a
                      href={profile.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {profile.youtube}
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">WhatsApp:</strong>
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {profile.whatsapp}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">
                      Social Links:
                    </strong>
                    <div className="flex gap-2">
                      <a
                        href={profile.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Facebook
                      </a>
                      <a
                        href={profile.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription Images */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Subscription Images
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {profile.subscriptionImages &&
                    profile.subscriptionImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Subscription ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialistProfile;
