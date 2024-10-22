import React from "react";

function community() {
  const discussions = [
    {
      title: "How to dynamically get data from my GitHub account",
      tags: ["api", "github"],
      votes: 1,
      answers: 80,
      date: "6th Oct 2024, 7:39 PM",
      user: "Hassaan",
    },
    {
      title: "How to code",
      tags: ["code"],
      votes: 2,
      answers: 22,
      date: "14th Oct 2024, 7:56 PM",
      user: "Nicolas Robledo",
    },
    {
      title: "Still confused",
      tags: ["bootstrap"],
      votes: 4,
      answers: 23,
      date: "5th Oct 2024, 5:36 PM",
      user: "Uchawsing Marma",
    },
    {
      title: "Why is un2 an empty array?",
      tags: ["array", "copy_array", "empty_array", "python"],
      votes: 2,
      answers: 14,
      date: "13th Oct 2024, 4:09 PM",
      user: "BroFar",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Q&A Discussions</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full max-w-md mb-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Ask a question
        </button>
      </div>
      {discussions.map((discussion, index) => (
        <div key={index} className="bg-white p-4 rounded shadow mb-4">
          <div className="flex justify-between">
            <h2 className="font-semibold">{discussion.title}</h2>
            <span className="text-gray-400">{discussion.date}</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            {discussion.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-gray-200 p-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-4">
              <span>{discussion.votes} Votes</span>
              <span>{discussion.answers} Answers</span>
            </div>
            <span className="text-gray-500">{discussion.user}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default community;
