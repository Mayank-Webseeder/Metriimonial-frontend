import React, { useState } from "react";

const NotificationsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Pandit Profile Approval Required",
      description:
        "Pandit Rajesh Kumar has submitted profile for verification. Specialization: Vedic rituals, marriage ceremonies.",
      icon: "🕉️",
      timestamp: new Date("2025-01-29T14:30:00"),
      category: "profile_approval",
      read: false,
    },
    {
      id: 2,
      title: "Matrimonial Profile Created",
      description:
        "New matrimonial profile created by Sharma family seeking alliance for their daughter, 27, software engineer.",
      icon: "💑",
      timestamp: new Date("2025-01-30T09:00:00"),
      category: "matrimonial",
      read: true,
    },
    {
      id: 3,
      title: "Dharmshala Listing Approval",
      description:
        "New dharmshala registration in Haridwar. Capacity: 50 rooms, Facilities: Temple, Community kitchen.",
      icon: "🏰",
      timestamp: new Date("2025-01-29T18:45:00"),
      category: "dharmshala",
      read: false,
    },
    {
      id: 4,
      title: "User Report: Inappropriate Behavior",
      description:
        "Multiple users have reported inappropriate comments from user ID: SK123. Required immediate review.",
      icon: "⚠️",
      timestamp: new Date("2025-01-28T15:20:00"),
      category: "reports",
      read: false,
    },
    {
      id: 5,
      title: "Kathavachak Verification Request",
      description:
        "Experienced Kathavachak Smt. Meena Devi requests profile verification. 15 years experience in Bhagwat Katha.",
      icon: "📚",
      timestamp: new Date("2025-01-27T11:30:00"),
      category: "profile_approval",
      read: true,
    },
    {
      id: 6,
      title: "Astrologer Profile Update",
      description:
        "Acharya Shastri has added new certifications and updated consultation timings.",
      icon: "🌟",
      timestamp: new Date("2025-01-26T16:15:00"),
      category: "profile_update",
      read: false,
    },
    {
      id: 7,
      title: "Activist Profile Submission",
      description:
        "New activist profile submitted by Mr. Rakesh Singh. Focus areas: Environmental protection, Ganga cleanup.",
      icon: "🌱",
      timestamp: new Date("2025-01-25T13:45:00"),
      category: "profile_approval",
      read: false,
    },
  ]);

  const [filters, setFilters] = useState({
    readStatus: "all",
    category: "all",
  });

  const categories = [...new Set(notifications.map((n) => n.category))];

  const formatDate = (date) => {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }
    return date.toLocaleDateString();
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const filteredNotifications = notifications.filter((notification) => {
    const readFilter =
      filters.readStatus === "all" ||
      (filters.readStatus === "read" && notification.read) ||
      (filters.readStatus === "unread" && !notification.read);

    const categoryFilter =
      filters.category === "all" || notification.category === filters.category;

    const dateRangeFilter =
      (!dateRange.startDate ||
        notification.timestamp >= new Date(dateRange.startDate)) &&
      (!dateRange.endDate ||
        notification.timestamp <= new Date(dateRange.endDate));

    return readFilter && categoryFilter && dateRangeFilter;
  });

  // Pagination
  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
  const paginatedNotifications = filteredNotifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categoryLabels = {
    profile_approval: "Profile Approval",
    matrimonial: "Matrimonial",
    dharmshala: "Dharmshala",
    reports: "Reports",
    profile_update: "Profile Update",
  };

  return (
    <div className="max-w-8xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <button
          onClick={markAllAsRead}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Mark all as read
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex gap-2 items-center">
          <input
            type="date"
            className="px-3 py-2 border rounded-lg"
            value={dateRange.startDate}
            onChange={(e) =>
              setDateRange({ ...dateRange, startDate: e.target.value })
            }
          />
          <span className="text-white">to</span>
          <input
            type="date"
            className="px-3 py-2 border rounded-lg"
            value={dateRange.endDate}
            onChange={(e) =>
              setDateRange({ ...dateRange, endDate: e.target.value })
            }
          />
        </div>

        <select
          className="px-3 py-2 border rounded-lg"
          value={filters.readStatus}
          onChange={(e) =>
            setFilters({ ...filters, readStatus: e.target.value })
          }
        >
          <option value="all">All notifications</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>

        <select
          className="px-3 py-2 border rounded-lg"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {categoryLabels[category] || category}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {paginatedNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              notification.read ? "bg-white" : "bg-blue-100"
            }`}
            onClick={() => toggleRead(notification.id)}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{notification.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{notification.title}</h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(notification.timestamp)}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{notification.description}</p>
                <div className="mt-2">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {categoryLabels[notification.category] ||
                      notification.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6 text-white">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
