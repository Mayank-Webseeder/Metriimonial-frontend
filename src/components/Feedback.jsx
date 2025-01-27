import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    alert(`Rating: ${rating}\nComment: ${comment}`);
  };

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-[#7d0245]">Feedback</h2>
      <p className="text-md text-[#7d0245] mb-4">Share your experience in scaling</p>

      <div className="flex space-x-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-10 h-10 cursor-pointer ${
              (hover || rating) >= star ? "text-yellow-500" : "text-gray-300"
            }`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 3.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.374 2.453a1 1 0 00-.364 1.118l1.287 3.967c.3.92-.755 1.688-1.54 1.118L10 15.347l-3.374 2.453c-.785.57-1.84-.198-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.635 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
      </div>

      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7d0245]"
        placeholder="Add your comments..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button
        className="w-full bg-[#7d0245] text-white font-semibold py-2 mt-4 rounded-lg hover:bg-[#5a012f]"
        onClick={handleSubmit}
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;
