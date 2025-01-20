import axios from "axios";
import React, { useState } from "react";

const PreferenceForm = () => {
  const [formData, setFormData] = useState({
    partnerSubCaste: "",
    partnerMinAge: "",
    partnerMaxAge: "",
    partnerMinHeightFeet: "",
    partnerMaxHeightFeet: "",
    partnerMinWeight: "",
    partnerMaxWeight: "",
    partnerMaritalStatus: "",
    partnerMinimumIncome: "",
    partnerMaximumIncome: "",
    partnerOccupation: "",
    partnerQualification: "",
    partnerDisabilities: "",
    partnerManglikStatus: "",
    partnersLivingStatus: "",
    partnerDistrict: "",
    partnerState: "",
    partnerVillage: "",
    partnerBodyStructure: "",
    partnerComplexion: "",
    partnerDietaryHabits: "",
    partnerSmokingHabits: "",
    partnerDrinkingHabits: "",
    partnerExpectations: "",
    partnerFamilyType: "",
    partnerFamilyFinancialStatus: "",
    partnerFamilyIncome: "",
     partnerIncome: "",
     partnerCity:"pune"
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Extracting name and value from the event object

    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        // Correctly updating partnerIncome when min or max income changes
        partnerIncome:
            name === "partnerMinimumIncome" || name === "partnerMaximumIncome"
                ? `${name === "partnerMinimumIncome" ? value : prevData.partnerMinimumIncome} - ${name === "partnerMaximumIncome" ? value : prevData.partnerMaximumIncome}`
                : prevData.partnerIncome
    }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Get the bearer token from wherever you store it (localStorage, context, etc.)
      let userDetails = JSON.parse(localStorage.getItem("userInfo")); // Adjust this based on your token storage method
      let Token = userDetails.token;
      console.log("token in preferences", Token);
      const response = await axios({
        method: "post",
        url: "https://api-matrimonial.webseeder.tech/api/v1/biodata/createPartnerPreferences",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
        data: formData,
      });

      setSuccess(true);
      alert("Preferences submitted successfully!", response.data.message);
      // Optionally reset form
      // setFormData({ ... }); // Reset to initial state if needed
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit preferences");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Preferences</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Subcaste Field */}
        <div>
          <label htmlFor="partnerSubCaste" className="block font-medium">
            Subcaste
          </label>
          <select
            name="partnerSubCaste"
            id="partnerSubCaste"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerSubCaste}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="OBC">OBC</option>
            <option value="General">General</option>
            <option value="ST">ST</option>
            <option value="SC">SC</option>
          </select>
        </div>

        {/* Age Criteria */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="partnerMinAge" className="block font-medium">
              Minimum Age
            </label>
            <select
              name="partnerMinAge"
              id="partnerMinAge"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMinAge}
              onChange={handleChange}
            >
              <option value="">Select Minimum Age</option>
              {[...Array(61).keys()].slice(18).map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="partnerMaxAge" className="block font-medium">
              Maximum Age
            </label>
            <select
              name="partnerMaxAge"
              id="partnerMaxAge"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMaxAge}
              onChange={handleChange}
            >
              <option value="">Select Maximum Age</option>
              {[...Array(61).keys()].slice(18).map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Height Criteria */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="partnerMinHeightFeet" className="block font-medium">
              Minimum Height (FT)
            </label>
            <select
              name="partnerMinHeightFeet"
              id="partnerMinHeightFeet"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMinHeightFeet}
              onChange={handleChange}
            >
              <option value="">Select Minimum Height</option>
              {Array.from({ length: 7 }, (_, i) => i + 1).map((feet) => (
                <option key={feet} value={feet}>
                  {feet} Ft
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="partnerMaxHeightFeet" className="block font-medium">
              Maximum Height (FT)
            </label>
            <select
              name="partnerMaxHeightFeet"
              id="partnerMaxHeightFeet"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMaxHeightFeet}
              onChange={handleChange}
            >
              <option value="">Select Maximum Height</option>
              {Array.from({ length: 7 }, (_, i) => i + 1).map((feet) => (
                <option key={feet} value={feet}>
                  {feet} Ft
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weight Criteria */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="partnerMinWeight" className="block font-medium">
              Minimum Weight (kg)
            </label>
            <select
              name="partnerMinWeight"
              id="partnerMinWeight"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMinWeight}
              onChange={handleChange}
            >
              <option value="">Select Minimum Weight</option>
              {Array.from({ length: 51 }, (_, i) => i + 50).map((weight) => (
                <option key={weight} value={weight}>
                  {weight} kg
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="partnerMaxWeight" className="block font-medium">
              Maximum Weight (kg)
            </label>
            <select
              name="partnerMaxWeight"
              id="partnerMaxWeight"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMaxWeight}
              onChange={handleChange}
            >
              <option value="">Select Maximum Weight</option>
              {Array.from({ length: 51 }, (_, i) => i + 50).map((weight) => (
                <option key={weight} value={weight}>
                  {weight} kg
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Partner's Marital Status */}
        <div>
          <label htmlFor="partnerMaritalStatus" className="block font-medium">
            Partner's Marital Status
          </label>
          <select
            name="partnerMaritalStatus"
            id="partnerMaritalStatus"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerMaritalStatus}
            onChange={handleChange}
          >
            <option value="">Select Marital Status</option>
            <option value="never_married">Never Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        {/* Income */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="partnerMinimumIncome" className="block font-medium">
              Minimum Income (INR)
            </label>
            <select
              name="partnerMinimumIncome"
              id="partnerMinimumIncome"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMinimumIncome}
              onChange={handleChange}
            >
              <option value="">Select Minimum Income</option>
              {Array.from({ length: 20 }, (_, i) => (i + 1) * 10000).map(
                (income) => (
                  <option key={income} value={income}>
                    {income.toLocaleString("en-IN")} INR
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <label htmlFor="partnerMaximumIncome" className="block font-medium">
              Maximum Income (INR)
            </label>
            <select
              name="partnerMaximumIncome"
              id="partnerMaximumIncome"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.partnerMaximumIncome}
              onChange={handleChange}
            >
              <option value="">Select Maximum Income</option>
              {Array.from({ length: 20 }, (_, i) => (i + 1) * 10000).map(
                (income) => (
                  <option key={income} value={income}>
                    {income.toLocaleString("en-IN")} INR
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Occupation */}
        <div>
          <label htmlFor="partnerOccupation" className="block font-medium">
            Occupation
          </label>
          <select
            name="partnerOccupation"
            id="partnerOccupation"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerOccupation}
            onChange={handleChange}
          >
            <option value="">Select Occupation</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
            <option value="teacher">Teacher</option>
            <option value="business">Business</option>
          </select>
        </div>

        {/* Qualification */}
        <div>
          <label htmlFor="partnerQualification" className="block font-medium">
            Qualification
          </label>
          <select
            name="partnerQualification"
            id="partnerQualification"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerQualification}
            onChange={handleChange}
          >
            <option value="">Select Qualification</option>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
            <option value="diploma">Diploma</option>
          </select>
        </div>

        {/* Disabilities */}
        <div>
          <label htmlFor="partnerDisabilities" className="block font-medium">
            Disabilities(Physical/mental)
          </label>
          <select
            name="partnerDisabilities"
            id="partnerDisabilities"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerDisabilities}
            onChange={handleChange}
          >
            <option value="">Select Disability</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Doesn't Matter">Doesn't Matter</option>
          </select>
        </div>
        {/* Manglic Status */}
        <div>
          <label htmlFor="partnerManglikStatus" className="block font-medium">
            Manglik Status
          </label>
          <select
            name="partnerManglikStatus"
            id="partnerManglikStatus"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerManglikStatus}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="Purna Manglik">Purna Manglik</option>
            <option value="Anshik Manglik">Anshik Manglik</option>
            <option value="Doesn't Matter">Doesn't Matter</option>
          </select>
        </div>
        {/* Partners livein */}
        <div>
          <label htmlFor="partnersLivingStatus" className="block font-medium">
            Partners Livein
          </label>
          <select
            name="partnersLivingStatus"
            id="partnersLivingStatus"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnersLivingStatus}
            onChange={handleChange}
          >
            <option value="">Select Livein</option>
            <option value="India">India</option>
            <option value="Abroad">Abroad</option>
          </select>
        </div>

        {/* District */}
        <div>
          <label htmlFor="partnerDistrict" className="block font-medium">
            District
          </label>
          {/* <select
            name="district"
            id="district"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.district}
            onChange={handleChange}
          >
            <option value="">Select district</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Gujarat">Gujarat</option>
           
          </select> */}
          <input
            type="text"
            name="partnerDistrict"
            id="partnerDistrict"
            onChange={handleChange}
            value={formData.partnerDistrict}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* State */}
        <div>
          <label htmlFor="partnerState" className="block font-medium">
            State
          </label>
          <select
            name="partnerState"
            id="partnerState"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerState}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Gujarat">Gujarat</option>
          </select>
        </div>
        {/* Village */}
        <div>
          <label htmlFor="partnerVillage" className="block font-medium">
            Village
          </label>
          <select
            name="partnerVillage"
            id="partnerVillage"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerVillage}
            onChange={handleChange}
          >
            <option value="">Select Village</option>
            <option value="Jalgaon">Jalgaon</option>
            <option value="Badwani">Badwani</option>
          </select>
        </div>
        {/* Partners Body Structure */}
        <div>
          <label htmlFor="partnerBodyStructure" className="block font-medium">
            Partners Body Structure
          </label>
          <select
            name="partnerBodyStructure"
            id="partnerBodyStructure"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerBodyStructure}
            onChange={handleChange}
          >
            <option value="">Select Structure</option>
            <option value="Slim">Slim</option>
            <option value="Normal">Normal</option>
            <option value="Fatty">Fatty</option>
            <option value="Doesn't Matter">Doesn't Matter</option>
          </select>
        </div>
        {/* Complexion */}
        <div>
          <label htmlFor="partnerComplexion" className="block font-medium">
            Complexion
          </label>
          <select
            name="partnerComplexion"
            id="partnerComplexion"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerComplexion}
            onChange={handleChange}
          >
            <option value="">Select Complexion</option>
            <option value="Fare">Fare</option>
            <option value="Dark">Dark</option>
            <option value="Dusky">Dusky</option>
            <option value="Doesn't Matter">Doesn't Matter</option>
          </select>
        </div>
        {/* Partners Dietary Habits */}
        <div>
          <label htmlFor="partnerDietaryHabits" className="block font-medium">
            Partners Dietary Habits
          </label>
          <select
            name="partnerDietaryHabits"
            id="partnerDietaryHabits"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerDietaryHabits}
            onChange={handleChange}
          >
            <option value="">Select Diet</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Eggetarian">Eggetarian</option>
            <option value="Doesn't Matter">Doesn't Matter</option>
          </select>
        </div>
        {/* Smoking Habits */}
        <div>
          <label htmlFor="partnerSmokingHabits" className="block font-medium">
            Smoking Habits
          </label>
          <select
            name="partnerSmokingHabits"
            id="partnerSmokingHabits"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerSmokingHabits}
            onChange={handleChange}
          >
            <option value="">Select Smoking</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Doesn't Matter">Doesn't Matter</option>
          </select>
        </div>
        {/* Drinking Habits */}
        <div>
          <label htmlFor="partnerDrinkingHabits" className="block font-medium">
            Drinking Habits
          </label>
          <select
            name="partnerDrinkingHabits"
            id="partnerDrinkingHabits"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerDrinkingHabits}
            onChange={handleChange}
          >
            <option value="">Select Smoking</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Occasionally">Occasionally</option>

            <option value="Doesn't Matter">Doesn't Matter</option>
          </select>
        </div>

        {/* Family Type */}
        <div>
          <label htmlFor="partnerFamilyType" className="block font-medium">
            Family Type
          </label>
          <select
            name="partnerFamilyType"
            id="partnerFamilyType"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerFamilyType}
            onChange={handleChange}
          >
            <option value="">Select Family Type</option>
            <option value="Nuclear Family">Nuclear Family</option>
            <option value="Joint Family">Joint Family</option>
            <option value="Extended Family">Extended Family</option>
          </select>
        </div>

        {/* Family Financial Status */}
        <div>
          <label
            htmlFor="partnerFamilyFinancialStatus"
            className="block font-medium"
          >
            Family Financial Status
          </label>
          <select
            name="partnerFamilyFinancialStatus"
            id="partnerFamilyFinancialStatus"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerFamilyFinancialStatus}
            onChange={handleChange}
          >
            <option value="">Select Family Financial Status</option>
            <option value="Lower Class">Lower Class</option>
            <option value="Middle Class">Middle Class</option>
            <option value="Upper Middle Class">Upper Middle Class</option>
            <option value="Upper Class">Upper Class</option>
          </select>
        </div>

        {/* Family Income */}
        <div>
          <label htmlFor="partnerFamilyIncome" className="block font-medium">
            Family Income
          </label>
          <select
            name="partnerFamilyIncome"
            id="partnerFamilyIncome"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerFamilyIncome}
            onChange={handleChange}
          >
            <option value="">Select Family Income</option>
            <option value="Less than 1 lakh">Less than 1 lakh</option>
            <option value="1 Lakh-5 Lakh">1 Lakh-5 Lakh</option>
            <option value=" Lakh-10 Lakh">5 Lakh-10 Lakh</option>
            <option value="10 Lakh-15 Lakh">10 Lakh-15 Lakh</option>
            <option value="Above 20 Lakh">Above 20 Lakh</option>
          </select>
        </div>

        {/* Expectation from Partner */}
        <div>
          <label htmlFor="partnerExpectations" className="block font-medium">
            Expectation from Partner
          </label>
          <textarea
            name="partnerExpectations"
            id="partnerExpectations"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.partnerExpectations}
            onChange={handleChange}
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-[#762140] text-white py-2 px-4 rounded hover:bg-[#762140]"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default PreferenceForm;
