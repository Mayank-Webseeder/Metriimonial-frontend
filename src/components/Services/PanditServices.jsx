import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedServices } from "../../redux/commonform/Commonfromslice";
// import { setSelectedServices } from "../redux/slices/commonFormSlice";

const PanditServices = () => {
  const dispatch = useDispatch();
  const savedServices = useSelector((state) => state.commonform?.selectedServices  || []);
  const [selectedServices, setSelected] = useState(savedServices || []);

  const servicesList = [
    "Ganesh Pujan",
    "Ganesh Sthapana",
    "GrahaPravesh Pujan",
    "Rudrabhishek",
    "Havan",
    "Mahamrutyunjay Jaap",
    "Marriage",
    "Satyanarayan Pujan",
    "Navgrah Shanti Pujan",
    "Namkaran Sanskar",
    "New Business Opening Pujan",
    "New Vehicle Pujan",
    "Maa Lakshmi Pujan",
    "Kaal Sorpo Dosh",
    "Mangal Dosh",
    "Pitru Dosh",
    "Rahu Ketu Dosh",
    "Shani Shanti Dosh",
    "Chandi Yagya Evam",
    "Bagalamukhi Anusthan",
    "Vastu Shanti Pujan",
    "Antim Sanskar Vidhi",
    "Asthi Visarjan Vidhi",
    "Pind Daan Evam Tarpan",
    "Dashakarma Vidhi",
  ];

  useEffect(() => {
    setSelected(savedServices);
  }, [savedServices]);

  const handleServiceSelection = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((item) => item !== service)
      : [...selectedServices, service];
    setSelected(updatedServices);
  };

  const handleSubmit = () => {
    dispatch(setSelectedServices(selectedServices));
  };

  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center py-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Pandit Services
        </h1>

        <form>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Select Pandit Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {servicesList.map((service, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={selectedServices.includes(service)}
                    onChange={() => handleServiceSelection(service)}
                  />
                  <span className="ml-2">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons Section */}
          <div className="text-center flex justify-center gap-4 mt-6">
            <Link to="/user-form">
              <button
                type="button"
                className="bg-red-900 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition"
              >
                Back
              </button>
            </Link>
            <Link to="/user-form/photo-upload">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-red-900 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition"
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PanditServices;
