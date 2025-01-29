import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import { FaEdit, FaRegTimesCircle } from "react-icons/fa";

const SubscriptionManagementPage = () => {
  const [subscriptions, setSubscriptions] = useState({
    Matrimonial: { trialPeriod: 30, duration: 12, amount: 500 },
    Pandit: { trialPeriod: 15, duration: 6, amount: 300 },
    Kathavachak: { trialPeriod: 10, duration: 3, amount: 150 },
    Astrologer: { trialPeriod: 7, duration: 1, amount: 100 },
  });

  const [editing, setEditing] = useState(null);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    setSubscriptions({
      ...subscriptions,
      [type]: { ...subscriptions[type], [name]: value },
    });
  };

  const handleSave = (type) => {
    // Add logic to save the subscription data
    console.log(`Saving ${type} subscription`, subscriptions[type]);
    setEditing(null); // Exit edit mode after saving
  };

  const handleCancel = (type) => {
    // Reset to original state or fetch the data again
    console.log(`Canceling changes for ${type}`);
    setEditing(null); // Exit edit mode without saving
  };

  const handleEditClick = (type) => {
    setEditing(type); // Enable editing for the clicked type
  };

  return (
    <div className="bg-transparent p-8 pt-0">
      <PageHeader title="Manage Subscriptions" />
      <div className="mt-6 flex justify-center items-start space-x-4 flex-wrap">
        {Object.keys(subscriptions).map((type) => (
          <div key={type} className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-slate-900 text-white p-4 rounded-t-lg flex justify-between items-center gap-4">
              <h2 className="text-xl">{type} Subscription</h2>
              <button
                onClick={() => handleEditClick(type)}
                className="text-white hover:text-gray-300"
              >
                <FaEdit />
              </button>
            </div>
            <div className="mt-4">
              {editing === type ? (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor={`${type}-trial`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Trial Period (in days)
                    </label>
                    <input
                      type="number"
                      name="trialPeriod"
                      value={subscriptions[type].trialPeriod}
                      onChange={(e) => handleInputChange(e, type)}
                      id={`${type}-trial`}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`${type}-duration`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subscription Duration (in months)
                    </label>
                    <input
                      type="number"
                      name="duration"
                      value={subscriptions[type].duration}
                      onChange={(e) => handleInputChange(e, type)}
                      id={`${type}-duration`}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`${type}-amount`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Amount (in INR)
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={subscriptions[type].amount}
                      onChange={(e) => handleInputChange(e, type)}
                      id={`${type}-amount`}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="mt-4 flex justify-end space-x-4">
                    <button
                      onClick={() => handleSave(type)}
                      className="px-4 py-2 border border-gray-300 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleCancel(type)}
                      className="px-4 py-2 border border-gray-300 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p>Trial Period: {subscriptions[type].trialPeriod} days</p>
                  <p>Duration: {subscriptions[type].duration} months</p>
                  <p>Amount: ₹{subscriptions[type].amount}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionManagementPage;
