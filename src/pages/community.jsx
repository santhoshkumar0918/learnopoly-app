import React, { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";
import Header from "./Header";

function Community() {
  const [question, setQuestion] = useState("");
  const [tags, setTags] = useState("");
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [discussions, setDiscussions] = useState([]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const handleTagsChange = (e) => setTags(e.target.value);

  const handleAddQuestion = async () => {
    if (!question || !tags) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoadingQuestion(true);

    try {
      await addDoc(collection(db, "questions"), {
        title: question,
        tags: tags.split(",").map((tag) => tag.trim()), 
        votes: 0,
        answers: 0,
        date: new Date().toLocaleString(),
        user: auth.currentUser?.email || "Anonymous", 
      });

      setDiscussions([
        {
          title: question,
          tags: tags.split(",").map((tag) => tag.trim()),
          votes: 0,
          answers: 0,
          date: new Date().toLocaleString(),
          user: auth.currentUser?.email || "Anonymous",
        },
        ...discussions,
      ]);

      setQuestion("");
      setTags("");
      alert("Question added successfully!");
    } catch (error) {
      console.error("Error adding question:", error.message);
      alert("Failed to add question.");
    } finally {
      setIsLoadingQuestion(false);
    }
  };

  const filteredDiscussions = discussions.filter((discussion) =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gray-100 mt-20 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Q&A Discussions</h1>
      
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search questions..."
          className="border border-gray-300 p-3 rounded-xl w-full max-w-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Add Question Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Ask a Question</h2>
        <input
          type="text"
          placeholder="Your question"
          value={question}
          onChange={handleQuestionChange}
          className="border border-gray-300 p-3 rounded-xl w-full mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={handleTagsChange}
          className="border border-gray-300 p-3 rounded-xl w-full mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddQuestion}
          className={`w-full p-3 rounded-xl text-white ${isLoadingQuestion ? 'bg-gray-400' : 'bg-blue-600'} hover:bg-blue-700 focus:outline-none transition-colors`}
          disabled={isLoadingQuestion}
        >
          {isLoadingQuestion ? "Adding..." : "Add Question"}
        </button>
      </div>

      {/* List of Discussions */}
      {filteredDiscussions.map((discussion, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md mb-6">
          <div className="flex justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">{discussion.title}</h2>
            <span className="text-sm text-gray-500">{discussion.date}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {discussion.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <span>{discussion.votes} Votes</span> | <span>{discussion.answers} Answers</span>
            </div>
            <span className="text-sm text-gray-500">{discussion.user}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Community;
