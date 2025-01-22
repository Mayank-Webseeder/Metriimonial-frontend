import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessStories = () => {

   const navigate= useNavigate()
  const stories = [
    {
      id: 1,
      title: "Arjun And Priya Story",
      content:
        "After years of searching, Priya and Arjun found each other on a matrimony platform. Initially hesitant, they connected over shared values and interests during virtual chats. Their bond grew stronger with every conversation, eventually leading to a heartfelt meeting arranged by their families. Today, they celebrate their love as a happily married couple, crediting the platform for bringing their destinies together.",
      image: "/SuccessStoryImage.jpg",
    },
    {
      id: 2,
      title: "Anjali And Ansual Story",
      content:
        "After years of searching, Priya and Arjun found each other on a matrimony platform. Initially hesitant, they connected over shared values and interests during virtual chats. Their bond grew stronger with every conversation, eventually leading to a heartfelt meeting arranged by their families. Today, they celebrate their love as a happily married couple, crediting the platform for bringing their destinies together.",
      image: "/SuccessStoryImage.jpg",
    },
  ];
  const Handlenavigate=()=>{
    navigate('/success-story/post')
  }

  return (
    <div className="bg-gray-50 min-h-screen"  >
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-pink-100 shadow-md ">
        <button className="text-xl">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="text-lg font-bold" style={{ color: '#762140' }}>Success Stories</h1>
        <div className="flex items-center space-x-4">
          <button className="text-xl">
            <i className="fas fa-bell"></i>
          </button>
          <button className="px-4 py-1 text-white  bg-[#762140] rounded" onClick={Handlenavigate}>Post</button>
       
        </div>
      </header>

      {/* Success Stories Section */}
      <section className="p-4"  style={{textAlign:"center"}}>
        {stories.map((story) => (
          <div
            key={story.id}
            className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
            style={{border:"2px solid black"}}
          >
            <img
              loading="lazy"
              src={story.image}
              alt={story.title}
              className=" w-3/4 max-w-md rounded mt-2"
              style={{marginLeft:"420px"}}
             
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{story.title}</h2>
              <p className="text-sm text-gray-600">{story.content}</p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className="fas fa-star text-yellow-400 text-sm mr-1"
                  ></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SuccessStories;
