import { useState } from "react";
import PageHeader from "../common/PageHeader";

// Mock data for Dharamsala requests
const mockData = [
  {
    id: 1,
    name: "Shree Dharamsala",
    subCaste: "Jain",
    city: "Ahmedabad",
    contact: "9876543210",
    description: "A peaceful stay for travelers.",
    images: [
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
    ],
    requesterName: "John Doe",
    requestDate: "2025-01-10",
  },
  {
    id: 2,
    name: "Maharaja Dharamsala",
    subCaste: "Rajput",
    city: "Jaipur",
    contact: "9123456789",
    description: "Located near the city center.",
    images: [
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
      "https://placehold.co/600x400/png",
    ],
    requesterName: "Jane Doe",
    requestDate: "2025-01-15",
  },
];

export default function AdminApproval() {
  const [pendingRequests, setPendingRequests] = useState(mockData);
  const [approvedRequests, setApprovedRequests] = useState([]);

  // Pending requests filters
  const [pendingSearchQuery, setPendingSearchQuery] = useState("");
  const [pendingCityFilter, setPendingCityFilter] = useState("");
  const [pendingStartDate, setPendingStartDate] = useState("");
  const [pendingEndDate, setPendingEndDate] = useState("");

  // Approved requests filters
  const [approvedSearchQuery, setApprovedSearchQuery] = useState("");
  const [approvedCityFilter, setApprovedCityFilter] = useState("");
  const [approvedStartDate, setApprovedStartDate] = useState("");
  const [approvedEndDate, setApprovedEndDate] = useState("");

  // Filtered results
  const [filteredPendingRequests, setFilteredPendingRequests] =
    useState(mockData);
  const [filteredApprovedRequests, setFilteredApprovedRequests] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);

  const filterRequests = (requests, query, city, startDate, endDate) => {
    let filtered = requests.filter(
      (req) =>
        req.name.toLowerCase().includes(query.toLowerCase()) ||
        req.requesterName.toLowerCase().includes(query.toLowerCase())
    );

    if (city) {
      filtered = filtered.filter((req) =>
        req.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter((req) => {
        const requestDate = new Date(req.requestDate);
        return (
          requestDate >= new Date(startDate) && requestDate <= new Date(endDate)
        );
      });
    }

    return filtered;
  };

  const handlePendingFilters = (
    newQuery = pendingSearchQuery,
    newCity = pendingCityFilter,
    newStartDate = pendingStartDate,
    newEndDate = pendingEndDate
  ) => {
    const filtered = filterRequests(
      pendingRequests,
      newQuery,
      newCity,
      newStartDate,
      newEndDate
    );
    setFilteredPendingRequests(filtered);
  };

  const handleApprovedFilters = (
    newQuery = approvedSearchQuery,
    newCity = approvedCityFilter,
    newStartDate = approvedStartDate,
    newEndDate = approvedEndDate
  ) => {
    const filtered = filterRequests(
      approvedRequests,
      newQuery,
      newCity,
      newStartDate,
      newEndDate
    );
    setFilteredApprovedRequests(filtered);
  };

  const handleApproval = (id, status) => {
    const request = pendingRequests.find((req) => req.id === id);

    // Remove from pending requests
    const updatedPendingRequests = pendingRequests.filter(
      (req) => req.id !== id
    );
    setPendingRequests(updatedPendingRequests);
    setFilteredPendingRequests(updatedPendingRequests);

    if (status === "approved") {
      const updatedApprovedRequests = [
        ...approvedRequests,
        {
          ...request,
          approvalDate: new Date().toLocaleDateString("en-GB"),
        },
      ];
      setApprovedRequests(updatedApprovedRequests);
      setFilteredApprovedRequests(updatedApprovedRequests);
    }

    alert(`Request ${id} has been ${status}`);
  };

  const handleResetPendingFilters = () => {
    setPendingSearchQuery("");
    setPendingCityFilter("");
    setPendingStartDate("");
    setPendingEndDate("");
    setFilteredPendingRequests(pendingRequests);
  };

  const handleResetApprovedFilters = () => {
    setApprovedSearchQuery("");
    setApprovedCityFilter("");
    setApprovedStartDate("");
    setApprovedEndDate("");
    setFilteredApprovedRequests(approvedRequests);
  };

  return (
    <div className="bg-transparent min-h-screen p-6 pt-0">
      <PageHeader title="Dharamsalas" />

      {/* Pending Requests Section */}
      <h1 className="text-white text-xl font-semibold mb-4 underline underline-offset-8">
        Pending Dharamsala Requests
      </h1>

      {/* Pending Requests Filters */}
      <div className="flex justify-between mt-6 mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="p-2 border rounded-md bg-slate-100 text-slate-900"
            placeholder="Search by name or requester..."
            value={pendingSearchQuery}
            onChange={(e) => {
              setPendingSearchQuery(e.target.value);
              handlePendingFilters(e.target.value);
            }}
          />
          <input
            type="text"
            className="p-2 border rounded-md bg-slate-100 text-slate-900"
            placeholder="Filter by city"
            value={pendingCityFilter}
            onChange={(e) => {
              setPendingCityFilter(e.target.value);
              handlePendingFilters(pendingSearchQuery, e.target.value);
            }}
          />
          <input
            type="date"
            className="p-2 border rounded-md bg-slate-100 text-slate-900"
            value={pendingStartDate}
            onChange={(e) => {
              setPendingStartDate(e.target.value);
              handlePendingFilters(
                pendingSearchQuery,
                pendingCityFilter,
                e.target.value,
                pendingEndDate
              );
            }}
          />
          <input
            type="date"
            className="p-2 border rounded-md bg-slate-100 text-slate-900"
            value={pendingEndDate}
            onChange={(e) => {
              setPendingEndDate(e.target.value);
              handlePendingFilters(
                pendingSearchQuery,
                pendingCityFilter,
                pendingStartDate,
                e.target.value
              );
            }}
          />
        </div>
        <button
          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={handleResetPendingFilters}
        >
          Reset Filters
        </button>
      </div>

      {/* Pending Requests Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Dharamsala Name</th>
              <th className="p-3 text-left">Requester Name</th>
              <th className="p-3 text-left">City</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Images</th>
              <th className="p-3 text-left">Request Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPendingRequests.map((req) => (
              <tr key={req.id} className="border-t border-slate-200">
                <td className="p-3">{req.name}</td>
                <td className="p-3">{req.requesterName}</td>
                <td className="p-3">{req.city}</td>
                <td className="p-3">{req.contact}</td>
                <td className="p-3">{req.description}</td>
                <td className="p-3 flex space-x-2">
                  {req.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Preview"
                      className="w-12 h-12 rounded-md cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </td>
                <td className="p-3">
                  {new Date(req.requestDate).toLocaleDateString("en-GB")}
                </td>
                <td className="p-3 space-x-2">
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded"
                    onClick={() => handleApproval(req.id, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleApproval(req.id, "rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Approved Requests Section */}
      <div className="mt-10">
        <h1 className="text-white text-xl font-semibold mb-4 underline underline-offset-8">
          Approved Dharamsalas
        </h1>

        {/* Approved Requests Filters */}
        <div className="flex justify-between mt-6 mb-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              placeholder="Search approved Dharamsalas"
              value={approvedSearchQuery}
              onChange={(e) => {
                setApprovedSearchQuery(e.target.value);
                handleApprovedFilters(e.target.value);
              }}
            />
            <input
              type="text"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              placeholder="Filter by city"
              value={approvedCityFilter}
              onChange={(e) => {
                setApprovedCityFilter(e.target.value);
                handleApprovedFilters(approvedSearchQuery, e.target.value);
              }}
            />
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={approvedStartDate}
              onChange={(e) => {
                setApprovedStartDate(e.target.value);
                handleApprovedFilters(
                  approvedSearchQuery,
                  approvedCityFilter,
                  e.target.value,
                  approvedEndDate
                );
              }}
            />
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={approvedEndDate}
              onChange={(e) => {
                setApprovedEndDate(e.target.value);
                handleApprovedFilters(
                  approvedSearchQuery,
                  approvedCityFilter,
                  approvedStartDate,
                  e.target.value
                );
              }}
            />
          </div>
          <button
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={handleResetApprovedFilters}
          >
            Reset Filters
          </button>
        </div>

        {/* Approved Requests Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3 text-left">Dharamsala Name</th>
                <th className="p-3 text-left">Requester Name</th>
                <th className="p-3 text-left">City</th>
                <th className="p-3 text-left">Contact</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Approval Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredApprovedRequests.map((req) => (
                <tr key={req.id} className="border-t border-slate-200">
                  <td className="p-3">{req.name}</td>
                  <td className="p-3">{req.requesterName}</td>
                  <td className="p-3">{req.city}</td>
                  <td className="p-3">{req.contact}</td>
                  <td className="p-3">{req.description}</td>
                  <td className="p-3">{req.approvalDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-lg mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
