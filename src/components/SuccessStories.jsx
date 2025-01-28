import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "./common/PageHeader";

const SuccessStories = () => {
  const navigate = useNavigate();
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
      title: "Anjali And Anshul Story",
      content:
        "After years of searching, Priya and Arjun found each other on a matrimony platform. Initially hesitant, they connected over shared values and interests during virtual chats. Their bond grew stronger with every conversation, eventually leading to a heartfelt meeting arranged by their families. Today, they celebrate their love as a happily married couple, crediting the platform for bringing their destinies together.",
      image: "/SuccessStoryImage.jpg",
    },
  ];

  const handleNavigate = () => {
    navigate("/success-story/post");
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100">
      <PageHeader title="Success Stories" />

      <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700"
          >
            <img
              loading="lazy"
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{story.title}</h2>
              <p className="text-sm text-slate-300">{story.content}</p>
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
