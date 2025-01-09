import React from 'react'

const PanditServices = () => {
  return (
    <>
      <div className="min-h-screen bg-red-200 flex items-center justify-center py-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Pandit Services
        </h1>

        <form>
         

          {/* Jyotish Services */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Pandit Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
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
                "mangal dosh",
                "pitru dosh",
                "Rahu Ketu Dosh",
               " Shani Shanti dosh",
               "chandi yagya evam",
               "Bagalamukhi Anusthan",
               "Vastu Shanti Pujan",
               "Antim shanshkar Vidhi",
               "Ashthi Visarjan Vidhi",
               "Pind Dwan Evam Tarpan",
               "Dashakarma vidhi",
               "Girud Piram  Vachan",
               "Shradhha Vidhi",
               "Yogya Evam Dharmik",
               "Saptashatsthi Anushthan",
               "Moul Shanti",
               "Yogyapavit Samiskar Pujan",
               "Pran Pratishtha",
               "Tantra Swadhana"
              ].map((service, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2">{service}</span>
                </label>
              ))}
            </div>
          </div>

         

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-900 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>  
      
    </>
  )
}

export default PanditServices
