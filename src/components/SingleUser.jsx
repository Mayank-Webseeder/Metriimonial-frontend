import { AiFillEdit, AiOutlineRollback } from "react-icons/ai";
import React from "react";
import { mockUsers } from "./data/mockusers";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "./common/PageHeader";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = mockUsers.find((user) => user.id == id);

  if (!user) {
    return <p>User not found.</p>;
  }

  const sections = [
    {
      title: "Basic Information",
      fields: [
        "fullName",
        "city",
        "gender",
        "mobile",
        "email",
        "address",
        "dob",
        "timeOfBirth",
        "placeOfBirth",
        "maritalStatus",
        "disabilities",
        "height",
        "weight",
        "complexion",
      ],
    },
    {
      title: "Astrological Details",
      fields: ["manglikStatus", "nadi", "selfGotra", "motherGotra"],
    },
    {
      title: "Education & Occupation",
      fields: ["qualification", "occupation", "income", "livingStatus"],
    },
    {
      title: "About Me",
      fields: ["aboutMe", "profileCreatedBy"],
    },
    {
      title: "Family Details",
      fields: [
        "fatherFullName",
        "motherFullName",
        "fatherOccupation",
        "fatherIncome",
        "motherOccupation",
        "motherIncome",
        "familyType",
        "siblings",
        "familyMemberInfo",
      ],
    },
    {
      title: "Additional Contacts",
      fields: ["contact1", "contact2", "addressMe"],
    },
    {
      title: "Lifestyle & Habits",
      fields: [
        "cookingStatus",
        "dietaryHabit",
        "smokingStatus",
        "drinkingHabit",
        "tobaccoHabits",
      ],
    },
    {
      title: "Hobbies",
      fields: ["hobbies"],
    },
  ];

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
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.fields.map((field) => (
                  <div key={field} className="flex items-center">
                    <strong className="text-gray-600 w-40 capitalize">
                      {field.replace(/([A-Z])/g, " $1").trim()}:
                    </strong>
                    <span className="text-black">{user[field]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
