import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import { mockReports } from "../data/mockReports";

const ReportManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReports, setFilteredReports] = useState(mockReports);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Handle search by reportedByProfileName
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterReports(e.target.value, startDate, endDate);
  };

  // Handle date range filtering
  const handleDateChange = (type, value) => {
    if (type === "start") setStartDate(value);
    else setEndDate(value);
    filterReports(
      searchQuery,
      type === "start" ? value : startDate,
      type === "end" ? value : endDate
    );
  };

  // Filter reports based on search and date range
  const filterReports = (query, start, end) => {
    let filtered = mockReports.filter((report) =>
      report.reportedByProfileName.toLowerCase().includes(query.toLowerCase())
    );

    if (start) {
      filtered = filtered.filter(
        (report) => new Date(report.dateReported) >= new Date(start)
      );
    }

    if (end) {
      filtered = filtered.filter(
        (report) => new Date(report.dateReported) <= new Date(end)
      );
    }

    setFilteredReports(filtered);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setStartDate("");
    setEndDate("");
    setFilteredReports(mockReports);
  };

  return (
    <div className="min-h-screen p-8 pt-0">
      <PageHeader title="Report Management" />
      <div className="max-w-8xl mx-auto bg-white mt-6 p-6 rounded-lg shadow-lg">
        {/* Search & Date Range Filters */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              placeholder="Search by reporter's name..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={startDate}
              onChange={(e) => handleDateChange("start", e.target.value)}
            />
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={endDate}
              onChange={(e) => handleDateChange("end", e.target.value)}
            />
          </div>

          {/* Show Reset Button Only When Filters Are Applied */}
          {(searchQuery || startDate || endDate) && (
            <button
              onClick={resetFilters}
              className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Report Table */}
        <table className="min-w-full table-auto bg-slate-50 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-slate-900 text-slate-100">
            <tr>
              <th className="py-3 px-4 text-left">Reported By</th>
              <th className="py-3 px-4 text-left">Reported Profile</th>
              <th className="py-3 px-4 text-left">Reason for Report</th>
              <th className="py-3 px-4 text-left">Additional Description</th>
              <th className="py-3 px-4 text-left">Date Reported</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report, index) => (
                <tr key={index} className="hover:bg-slate-100">
                  <td className="py-3 px-4 text-blue-600">
                    {report.reportedByProfileName} - (
                    <span className="text-black">{report.reporterid}</span>)
                  </td>
                  <td className="py-3 px-4 text-blue-600">
                    {report.reportedProfileName} - (
                    <span className="text-black">{report.reportedid}</span>)
                  </td>
                  <td className="py-3 px-4">{report.reason}</td>
                  <td className="py-3 px-4">{report.additionalDescription}</td>
                  <td className="py-3 px-4">
                    {new Date(report.dateReported).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-3 px-4 text-center text-red-500">
                  No reports found for the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportManagementPage;
