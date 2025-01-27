import React, { useState } from "react";
import axios from "axios";
const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    placeofbirth: "",
    maritalStatus: "",
    specialAbility: "",
    minHeightFeet: "",
    maxHeightFeet: "",
    minWeight: "",
    maxWeight: "",
    complexion: "",
    manglikStatus: "",
    nadi: "",
    gotraSelf: "",
    gotraMother: "",
    qualification: "",
    occupation: "",
    annualIncome: "",
    livingStatus: "",
    currentCity: "",
    aboutMe: "",
    mobileNo: "",
    profileCreatedBy: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    fatherIncomeAnnually: "",
    motherOccupation: "",
    motherIncomeAnnually: "",
    otherFamilyMemberOccupation: "",
    familyType: "",
    siblings: "",
    otherFamilyMemberInfo: "",
    fatherMobileNo: "",
    motherMobileNo: "",
    familyMemberMobileNo:"",
    permanentAddress: "",
    residentialAddress: "",
    knowCooking: "",
    partnerDietHabit: "",
    smokingHabit: "",
    drinkingHabit: "",
    hobbies: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })};
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    const authToken = localStorage.getItem("authToken"); 
    console.log(authToken);
    axios.post("http://localhost:3600/api/v1/biodata/createPersonalDetails", 
      {formData}, 
      {
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${authToken}`
          },
          withCredentials:true
      }
  )
  .then(response => console.log("Success:", response.data))
  .catch(error => console.error("Error:", error)
  );
  
  };

 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Personal Details Form</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Date of Birth</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Place of Birth</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              id="placeofbirth"
              name="placeofbirth"
              value={formData.placeofbirth}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Marital Status</label>
            <select
              className="w-full p-2 border rounded"
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>
          <div>
            <label className="block">Special Ability</label>
            <select
              className="w-full p-2 border rounded"
              id="specialAbility"
              name=" specialAbility"
              value={formData.specialAbility}
              onChange={handleChange}
            >
              <option>Physical</option>
              <option>Mental</option>
              <option>None</option>
            </select>
          </div>
          <div>
            <label className="block">Minimum Height</label>
            <select
              className="w-full p-2 border rounded"
              id="minHeightFeet"
              name="minHeightFeet"
              value={formData.minHeightFeet}
              onChange={handleChange}
            >
              <option>150cm</option>
              <option>160cm</option>
              <option>170cm</option>
              <option>180cm</option>
            </select>
          </div>
          <div>
            <label className="block">Maximum Height</label>
            <select
              className="w-full p-2 border rounded"
              id="maxHeightFeet"
              name="maxHeightFeet"
              value={formData.maxHeightFeet}
              onChange={handleChange}
            >
              <option>150cm</option>
              <option>160cm</option>
              <option>170cm</option>
              <option>180cm</option>
            </select>
          </div>
          <div>
            <label className="block">Minimum Weight</label>
            <select
              className="w-full p-2 border rounded"
              id="minWeight"
              name="minWeight"
              value={formData.minWeight}
              onChange={handleChange}
            >
              <option>50kg</option>
              <option>60kg</option>
              <option>70kg</option>
              <option>80kg</option>
            </select>
          </div>
          <div>
            <label className="block">Maximum Weight</label>
            <select
              className="w-full p-2 border rounded"
              id="maxWeight"
              name="maxWeight"
              value={formData.maxWeight}
              onChange={handleChange}
            >
              <option>50kg</option>
              <option>60kg</option>
              <option>70kg</option>
              <option>80kg</option>
            </select>
          </div>
          <div>
            <label className="block">complexion</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              id="complexion"
              name="complexion"
              value={formData.complexion}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Mangalik Status</label>
            <select
              className="w-full p-2 border rounded"
              id="manglikStatus"
              name="manglikStatus"
              value={formData.manglikStatus}
              onChange={handleChange}
            >
              <option>Mangalik</option>
              <option>Non-Mangalik</option>
            </select>
          </div>
          <div>
            <label className="block">nadi</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              id="nadi"
              name="nadi"
              value={formData.nadi}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Gatra (Self)</label>
            <select
              className="w-full p-2 border rounded"
              id="gotraSelf"
              name="gotraSelf"
              value={formData.gotraSelf}
              onChange={handleChange}
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div>
            <label className="block">Gatra (Mother)</label>
            <select
              className="w-full p-2 border rounded"
              id="gotraMother"
              name="gotraMother"
              value={formData.gotraMother}
              onChange={handleChange}
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div>
            <label className="block">qualification</label>
            <select
              className="w-full p-2 border rounded"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            >
              <option>High School</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
          </div>
          <div>
            <label className="block">occupation</label>
            <select
              className="w-full p-2 border rounded"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            >
              <option>Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block">Annual Income</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              id="annualIncome"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Are you living with family?</label>
            <select
              className="w-full p-2 border rounded"
              id="livingStatus"
              name="livingStatus"
              value={formData.livingStatus}
              onChange={handleChange}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block">
              Which city are you currently living in?
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              id="currentCity"
              name="currentCity"
              value={formData.currentCity}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">About Me</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              id="aboutMe"
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Mobile No.</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Profile created by</label>
            <select
              className="w-full p-2 border rounded"
              id="profileCreatedBy"
              name="profileCreatedBy"
              value={formData.profileCreatedBy}
              onChange={handleChange}
            >
              <option>Self</option>
              <option>Parent</option>
              <option>Sibling</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Family Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Father's Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Mother's Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Father's occupation</label>
            <select
              className="w-full p-2 border rounded"
              id="fatherOccupation"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
            >
              <option>Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block">Father's Annual Income</label>
            <select
              className="w-full p-2 border rounded"
              id="fatherIncomeAnnually"
              name="fatherIncomeAnnually"
              value={formData.fatherIncomeAnnually}
              onChange={handleChange}
            >
              <option>Below $20,000</option>
              <option>$20,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>Above $100,000</option>
            </select>
          </div>
          <div>
            <label className="block">Mother's occupation (If any)</label>
            <select
              className="w-full p-2 border rounded"
              id="motherOccupation"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleChange}
            >
              <option>Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block">Mother's Annual Income</label>
            <select
              className="w-full p-2 border rounded"
              id="motherIncomeAnnually"
              name="motherIncomeAnnually"
              value={formData.motherIncomeAnnually}
              onChange={handleChange}
            >
              <option>Below $20,000</option>
              <option>$20,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>Above $100,000</option>
            </select>
          </div>
          <div>
            <label className="block">
              Other Family Member occupation (Optional)
            </label>
            <select
              className="w-full p-2 border rounded"
              id="otherFamilyMemberOccupation"
              name="otherFamilyMemberOccupation"
              value={formData.otherFamilyMemberOccupation}
              onChange={handleChange}
            >
              <option>Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block">Family Type</label>
            <select
              className="w-full p-2 border rounded"
              id="familyType"
              name="familyType"
              value={formData.familyType}
              onChange={handleChange}
            >
              <option>Nuclear</option>
              <option>Joint</option>
            </select>
          </div>
          <div>
            <label className="block">siblings</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              id="siblings"
              name="siblings"
              value={formData.siblings}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">
              Any Family Member Information (Optional)
            </label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              id="otherFamilyMemberInfo"
              name="otherFamilyMemberInfo"
              value={formData.otherFamilyMemberInfo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Father's Mobile No.</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              id="fatherMobileNo"
              name="fatherMobileNo"
              value={formData.fatherMobileNo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label classname="block">Mother's Mobile No.</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              id="motherMobileNo"
              name="motherMobileNo"
              value={formData.motherMobileNo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label classname="block">Family member Mobile no.</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              id="familyMemberMobileNo"
              name="familyMemberMobileNo"
              value={formData.familyMemberMobileNo}
              onChange={handleChange}
            />
          </div>

         

          <div>
            <label className="block">Permanent Address</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              id="permanentAddress"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block">Residential Address</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              id="residentialAddress"
              name="residentialAddress"
              value={formData.residentialAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Other Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Do you know cooking?</label>
            <select
              className="w-full p-2 border rounded"
              id="knowCooking"
              name="knowCooking"
              value={formData.knowCooking}
              onChange={handleChange}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block">Partner's Dietary habits</label>
            <select
              className="w-full p-2 border rounded"
              id="partnerDietHabit"
              name="partnerDietHabit"
              value={formData.partnerDietHabit}
              onChange={handleChange}
            >
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Vegan</option>
            </select>
          </div>
          <div>
            <label className="block">Smoking habits</label>
            <select
              className="w-full p-2 border rounded"
              id="smokingHabit"
              name="smokingHabit"
              value={formData.smokingHabit}
              onChange={handleChange}
            >
              <option>Yes</option>
              <option>No</option>
              <option>Occasionally</option>
            </select>
          </div>
          <div>
            <label className="block">Drinking habits</label>
            <select
              className="w-full p-2 border rounded"
              id="drinkingHabit"
              name="drinkingHabit"
              value={formData.drinkingHabit}
              onChange={handleChange}
            >
              <option>Yes</option>
              <option>No</option>
              <option>Occasionally</option>
            </select>
          </div>
        </div>

        <div>
            <label className="block">Your Hobbies</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              id="hobbies"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
            />
          </div>

        <div className="mt-8">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );

}
export default PersonalDetailsForm;
