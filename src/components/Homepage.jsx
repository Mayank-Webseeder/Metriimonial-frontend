import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [notifications, setNotifications] = useState(["New message from admin", "Event reminder: Date Meet"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-pink-100 shadow-md">
        <button className="text-xl">
          <i className="fas fa-bars"></i>
        </button>
        <h1 className="text-xl   font-bold" style={{ color: '#762140' }}>Home</h1>
        <div className="relative">
          <button className="text-xl relative" onClick={toggleDropdown}>
            <i className="fas fa-bell"></i>
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-600 rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification, index) => (
                  <li key={index} className="p-2 text-sm hover:bg-gray-100">
                    {notification}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      {/* <section className="relative">
        <div className="p-4 bg-pink-100 text-center">
          <h2 className="text-xl font-bold">Date Meet at Cafe Zee</h2>
          <p className="text-sm">Time: 4:00 pm - 6:00 pm</p>
          <button className="px-4 py-2 mt-2 text-white bg-pink-600 rounded">Continue</button>
        </div>
      </section> */}

      {/* Matrimony Section */}
      <section className="mt-4 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold" >Matrimony</h2>
          <Link to="/home/matrimonialprofiles" className='p-2 rounded-lg' style={{ color: 'white',backgroundColor:"#762140" }}>View All</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
          <img src="/MatrimonialProfile.png" alt="Profile 1" className="rounded shadow-md" />
          <img src="/MatrimonialProfile.png" alt="Profile 2" className="rounded shadow-md" />
          <img src="/MatrimonialProfile.png" alt="Profile 3" className="rounded shadow-md" />
        </div>
      </section>

      {/* Pandit / Jyotish / Kathavachak Section */}
      <section className="mt-4 p-4 bg-gray-100">
        <h2 className="text-lg font-bold" style={{textAlign:"center"}} >Pandit / Jyotish / Kathavachak</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="flex flex-col items-center">
            <img src="/Pandit.jpg" alt="Pandit" className="w-16 h-16" />
            <Link to='/pandit'><span className="text-sm font-bold">Pandit</span></Link>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Jyotish.jpg" alt="Jyotish" className="w-16 h-16" />
            <Link to='/astrologer-profile'><span className="text-sm font-bold">Jyotish</span></Link>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Kathavachak.jpg" alt="Kathavachak" className="w-16 h-16" />
           <Link to='/kathavachak-profile'> <span className="text-sm font-bold">Kathavachak</span></Link>
          </div>
        </div>
      </section>

      {/* Brahmin Community Section */}
      <section className="mt-4 p-4" >
        <h2 className="text-lg font-bold" style={{textAlign:"center"}}>Brahmin Community</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="flex flex-col items-center">
            <img src="/DharmshalaHome.jpg" alt="Dharmshala" className="w-16 h-16" />
            <Link to='/dharm-shala'><span className="text-sm font-bold">Dharm Shala</span></Link>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Events&News.jpg" alt="Event" className="w-16 h-16" />
            <Link to='news&events'><span className="text-sm font-bold">Event & News</span></Link>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Committee.jpg" alt="Committee" className="w-16 h-16" />
            <Link to='/committee-activist'><span className="text-sm font-bold">Committee</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
