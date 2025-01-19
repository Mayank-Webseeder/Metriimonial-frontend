import { useState } from "react";

const ActivistList = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [searchSubCaste, setSearchSubCaste] = useState("");
  const [searchLocality, setSearchLocality] = useState("");
  const [showNotFound, setShowNotFound] = useState(false);
  const [formData, setFormData] = useState({
    subCaste: "",
    dob: "",
    state: "",
    city: "",
    contact: "",
    activistId: "",
    committee: "",
    profilePicture: null,
  });

  const activists = [
    { name: "Raj Sharma", subCaste: "Sub-caste name", locality: "Indore", image: "https://e7.pngegg.com/pngimages/334/512/png-clipart-man-wearing-gray-button-up-elbow-sleeved-shirt-model-hairstyle-graphy-male-model-celebrities-tshirt-thumbnail.png" },
    { name: "Dipto Neogi", subCaste: "Sub-caste name", locality: "Kolkata", image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?cs=srgb&dl=pexels-chloekalaartist-1043474.jpg&fm=jpg" },
    { name: "Md Zaid Sheikh", subCaste: "Sub-caste name", locality: "Mumbai", image: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=" },
  ];

  const filteredActivists = activists.filter(
    (activist) =>
      activist.subCaste.toLowerCase().includes(searchSubCaste.toLowerCase()) &&
      activist.locality.toLowerCase().includes(searchLocality.toLowerCase())
  );

  const handleFileUpload = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = () => {
    console.log("New Activist Added: ", formData);
    setFormOpen(false);
  };

  const handleApplyFilters = () => {
    if (filteredActivists.length === 0) {
      setShowNotFound(true);
    }
    setFilterOpen(false);
  };

  return (
    <div className="p-4 w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-[#7d0245] mb-4">Activist</h2>
      <input
        type="text"
        placeholder="Search in Your city"
        className="w-full p-2 border rounded-md mb-4"
        value={searchLocality}
        onChange={(e) => setSearchLocality(e.target.value)}
      />
      <div className="flex justify-between mb-4">
        <button className="bg-[#7d0245] text-white px-4 py-2 rounded-md" onClick={() => setFilterOpen(true)}>
          Filter
        </button>
        <button className="bg-[#7d0245] text-white px-4 py-2 rounded-md" onClick={() => setFormOpen(true)}>
          Be an Activist
        </button>
      </div>
      {/* {showNotFound && <p className="text-red-500">User Not Found</p>} */}
      {!filterOpen && !formOpen && filteredActivists.map((activist, index) => (
        <div key={index} className="flex items-center p-4 border rounded-lg mb-4">
          <img src={activist.image} alt={activist.name} className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-bold">{activist.name}</h3>
            <p>{activist.subCaste}</p>
            <p>{activist.locality}</p>
          </div>
          <button className="bg-[#7d0245] text-white px-4 py-2 rounded-md">Connect</button>
        </div>
      ))}
      {filterOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <h3 className="text-lg font-bold mb-4">Filter</h3>
            <input
              type="text"
              placeholder="Search by Sub-caste"
              className="w-full p-2 border rounded-md mb-4"
              value={searchSubCaste}
              onChange={(e) => setSearchSubCaste(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search by Locality"
              className="w-full p-2 border rounded-md mb-4"
              value={searchLocality}
              onChange={(e) => setSearchLocality(e.target.value)}
            />
            <div className="flex justify-between">
              <button className="bg-[#7d0245] text-white px-4 py-2 rounded-md" onClick={handleApplyFilters}>
                Apply Filters
              </button>
              <button className="bg-red-700 text-white px-4 py-2 rounded-md" onClick={() => {
                setFilterOpen(false);
                setSearchLocality("");
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {formOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <h3 className="text-lg font-bold mb-4">Be an Activist</h3>
            <input type="text" placeholder="Enter Your Name" className="w-full p-2 border rounded-md mb-4" />
            <select className="w-full p-2 border rounded-md mb-4">
              <option>Select Sub Caste</option>
            </select>
            <input type="date" className="w-full p-2 border rounded-md mb-4" />
            <select className="w-full p-2 border rounded-md mb-4">
              <option>Select State</option>
            </select>
            <select className="w-full p-2 border rounded-md mb-4">
              <option>Select City/Village</option>
            </select>
            <input type="text" placeholder="Contact" className="w-full p-2 border rounded-md mb-4" />
            <input type="text" placeholder="Known Activist ID No." className="w-full p-2 border rounded-md mb-4" />
            <label className="block mb-2">Are you engaged in any committee?</label>
            <div className="flex gap-4 mb-4">
              <button className="border p-2 rounded-md">Yes</button>
              <button className="border p-2 rounded-md">No</button>
            </div>
            <label className="block mb-2">Profile Picture</label>
            <input type="file" className="w-full p-2 border rounded-md mb-4" onChange={handleFileUpload} />
            <button className="bg-[#7d0245] text-white w-full py-2 rounded-md" onClick={handleSubmit}>Submit</button>
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => setFormOpen(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivistList;