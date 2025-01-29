import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRollback } from "react-icons/ai";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "./common/PageHeader";
import { panditMockData } from "./data/panditMockData";

const PanditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pandit = panditMockData.find((p) => p.id == id);

  if (!pandit) {
    return <p>Pandit not found.</p>;
  }

  return (
    <div className="min-h-screen text-white px-6 sm:px-8 md:px-12">
      <PageHeader title="Pandit Details" />
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
                  <span className="text-black">{pandit.fullName}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Mobile:</strong>
                  <span className="text-black">{pandit.mobile}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">State:</strong>
                  <span className="text-black">{pandit.state}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Village/City:</strong>
                  <span className="text-black">{pandit.villageCity}</span>
                </div>
                {pandit.area && (
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">Area:</strong>
                    <span className="text-black">{pandit.area}</span>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Aadhar Number:</strong>
                  <span className="text-black">{pandit.aadhar}</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-gray-600 w-40">Sub Caste:</strong>
                  <span className="text-black">{pandit.subCaste}</span>
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
                <span className="text-black">{pandit.services.join(", ")}</span>
              </div>
              <div className="flex items-center">
                <strong className="text-gray-600 w-40">Experience:</strong>
                <span className="text-black">{pandit.experience} years</span>
              </div>
            </div>
          </div>

          {/* Subscription Details */}
          {pandit.isSubscribed && (
            <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Subscription Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">Website:</strong>
                    <a
                      href={pandit.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {pandit.website}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">YouTube:</strong>
                    <a
                      href={pandit.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {pandit.youtube}
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">WhatsApp:</strong>
                    <a
                      href={pandit.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {pandit.whatsapp}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-gray-600 w-40">
                      Social Links:
                    </strong>
                    <div className="flex gap-2">
                      <a
                        href={pandit.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Facebook
                      </a>
                      <a
                        href={pandit.instagram}
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
                  {pandit.subscriptionImages &&
                    pandit.subscriptionImages.map((img, index) => (
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

export default PanditProfile;
