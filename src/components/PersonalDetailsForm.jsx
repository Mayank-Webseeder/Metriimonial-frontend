import React, { useState } from 'react';

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    maritalStatus: '',
    height: '',
    weight: '',
    complexion: '',
    mangalikStatus: '',
    nadi: '',
    gatraSelf: '',
    gatraMother: '',
    qualification: '',
    occupation: '',
    annualIncome: '',
    livingWithFamily: '',
    currentCity: '',
    aboutMe: '',
    mobileNo: '',
    fatherFullName: '',
    motherFullName: '',
    fatherOccupation: '',
    fatherAnnualIncome: '',
    familyType: '',
    motherOccupation: '',
    motherAnnualIncome: '',
    otherFamilyOccupation: '',
    siblings: '',
    familyMemberInfo: '',
    fatherMobileNo: '',
    motherMobileNo: '',
    permanentAddress: '',
    residentialAddress: '',
    knowCooking: '',
    partnerDietaryHabits: '',
    smokingHabits: '',
    drinkingHabits: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-red-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-700">Personal Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-red-700">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Date of Birth</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Place of Birth</label>
            <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Marital Status</label>
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg">
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Height</label>
            <input type="text" name="height" value={formData.height} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Weight</label>
            <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Complexion</label>
            <input type="text" name="complexion" value={formData.complexion} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Mangalik Status</label>
            <select name="mangalikStatus" value={formData.mangalikStatus} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Nadi</label>
            <input type="text" name="nadi" value={formData.nadi} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Gatra (Self)</label>
            <input type="text" name="gatraSelf" value={formData.gatraSelf} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Gatra (Mother)</label>
            <input type="text" name="gatraMother" value={formData.gatraMother} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Qualification</label>
            <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Occupation</label>
            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Annual Income</label>
            <input type="text" name="annualIncome" value={formData.annualIncome} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Living with Family</label>
            <select name="livingWithFamily" value={formData.livingWithFamily} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Current City</label>
            <select name="currentCity" value={formData.currentCity} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg">
              <option value="">Select</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-red-700">About Me</label>
            <textarea name="aboutMe" value={formData.aboutMe} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" rows="4"></textarea>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Mobile No.</label>
            <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mt-8 text-red-700">Family Details</h2>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Father Full Name</label>
            <input type="text" name="fatherFullName" value={formData.fatherFullName} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Mother Full Name</label>
            <input type="text" name="motherFullName" value={formData.motherFullName} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Father Occupation</label>
            <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Father Annual Income</label>
            <input type="text" name="fatherAnnualIncome" value={formData.fatherAnnualIncome} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Family Type</label>
            <input type="text" name="familyType" value={formData.familyType} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Mother Occupation (If any)</label>
            <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Mother Annual Income</label>
            <input type="text" name="motherAnnualIncome" value={formData.motherAnnualIncome} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Other Family Member Occupation (optional)</label>
            <input type="text" name="otherFamilyOccupation" value={formData.otherFamilyOccupation} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Siblings</label>
            <input type="text" name="siblings" value={formData.siblings} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Any Family Member Information (optional)</label>
            <input type="text" name="familyMemberInfo" value={formData.familyMemberInfo} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Father Mobile No.</label>
            <input type="text" name="fatherMobileNo" value={formData.fatherMobileNo} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Mother Mobile No.</label>
            <input type="text" name="motherMobileNo" value={formData.motherMobileNo} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Permanent Address</label>
            <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Residential Address</label>
            <input type="text" name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mt-8 text-red-700">Other Personal Details</h2>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Do you know cooking?</label>
            <select name="knowCooking" value={formData.knowCooking} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Partner Dietary Habits</label>
            <input type="text" name="partnerDietaryHabits" value={formData.partnerDietaryHabits} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-red-700">Smoking Habits</label>
            <select name="smokingHabits" value={formData.smokingHabits} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-red-700">Drinking Habits</label>
            <select name="drinkingHabits" value={formData.drinkingHabits} onChange={handleChange} className="w-full p-2 border border-red-300 rounded-lg">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="text-center mt-8">
          <button type="submit" className="bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-600">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;