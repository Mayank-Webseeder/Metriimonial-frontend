// File: src/pages/NewsEvents.js
import React from "react";
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

const NewsEvents = () => {
  const posts = [
    {
      profilePicture: "https://miro.medium.com/v2/resize:fit:683/0*JQGt5cN0oZbo4uLV.jpg",
      name: "Aman Sharma",
      timestamp: "4 hours ago",
      images: [
        "https://static.vecteezy.com/system/resources/thumbnails/049/497/386/small_2x/slender-androgynous-male-model-in-high-fashion-attire-minimalist-runway-clean-lines-sharp-cheekbones-neutral-colors-striking-an-avant-garde-pose-elegant-and-sleek-photo.jpg",
        "https://mediaslide-europe.storage.googleapis.com/models1/pictures/2732/6431/profile-1502277379-1a5b58255e7778d1af94127577b7be0d.jpg",
        "https://www.gngmodels.com/wp-content/uploads/2023/12/male-model-portfolio-6-e1703576778868.jpg"
      ],
      caption:
        "Hi Everyone, My name is Aman, my last shot on Facebook. Follow me on https://facebook.com/amanpsihombing",
      likes: 40000,
      comments: 70,
      shares: 270,
    },
    {
      profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/039/051/196/small_2x/ai-generated-woman-using-laptop-device-isolated-on-blue-background-smiling-female-model-holding-computer-presenting-advertising-job-search-online-shopping-online-services-photo.jpeg",
      name: "Mahi Rai",
      timestamp: "1 hours ago",
      images: [
        "https://plus.unsplash.com/premium_photo-1708271587084-af26622d8b02?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWwlMjBwb3Npbmd8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/1427922205/photo/smiling-model-with-perfect-white-teeth-beautiful-indian-girl-cheerful-smiling-beauty-woman.jpg?s=612x612&w=0&k=20&c=LlEZGr3uxct9NATLpudq4Avbib9mFrP_nOJ0kBE06T0=",
        "https://plus.unsplash.com/premium_photo-1708271587084-af26622d8b02?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWwlMjBwb3Npbmd8ZW58MHx8MHx8fDA%3D",
        "https://img.freepik.com/premium-photo/female-models-stunning-pose-high-fashion-magazine-cover_563241-5989.jpg",
      ],
      caption:
        "Hi Everyone, My name is Mahi, my last shot on Facebook. Follow me on https://facebook.com/amanpsihombing",
      likes: 25000,
      comments: 90,
      shares: 250,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold text-center mb-8">News & Events</h1>

      {posts.map((post, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-6 max-w-xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-4">
            <img
              src={post.profilePicture}
              alt="profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold">{post.name}</h4>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>

          {/* Post Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="post"
                className="rounded-lg w-full object-cover"
              />
            ))}
          </div>

          {/* Caption */}
          <p className="text-gray-700 mb-4">{post.caption}</p>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-red-500">
                <AiOutlineHeart className="mr-1" size={20} /> {post.likes} Likes
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <AiOutlineComment className="mr-1" size={20} /> {post.comments} Comments
              </button>
            </div>
            <button className="flex items-center text-gray-600 hover:text-green-500">
              <AiOutlineShareAlt className="mr-1" size={20} /> {post.shares} Shares
            </button>
          </div>
        </div>
      ))}

      <button className="block mx-auto mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
        Load More Posts
      </button>
    </div>
  );
};

export default NewsEvents;
