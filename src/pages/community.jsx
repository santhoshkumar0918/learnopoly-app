
import React, { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig"; // Assuming you have firebase setup
import { collection, addDoc } from "firebase/firestore";

function Community() {
  const [question, setQuestion] = useState("");
  const [tags, setTags] = useState("");
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [discussions, setDiscussions] = useState([]);


  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Handle change in question input
  const handleQuestionChange = (e) => setQuestion(e.target.value);

  // Handle change in tags input
  const handleTagsChange = (e) => setTags(e.target.value);

  // Handle adding question to Firestore
  const handleAddQuestion = async () => {
    if (!question || !tags) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoadingQuestion(true);

    try {
      await addDoc(collection(db, "questions"), {
        title: question,
        tags: tags.split(",").map((tag) => tag.trim()), // Splitting and trimming tags
        votes: 0,
        answers: 0,
        date: new Date().toLocaleString(),
        user: auth.currentUser?.email || "Anonymous", // Replace with logged-in user info
      });

      // Optionally update the local state with the new question (to avoid reload)
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

      // Clear the form after submission
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

  // Filter discussions based on search term
  const filteredDiscussions = discussions.filter((discussion) =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Q&A Discussions</h1>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full max-w-md mb-2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => console.log("Ask a question clicked")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ask a question
        </button>
      </div>

      {/* Add Question Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Ask a Question</h2>
        <input
          type="text"
          placeholder="Your question"
          value={question}
          onChange={handleQuestionChange}
          className="border p-2 rounded w-full mt-4"
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={handleTagsChange}
          className="border p-2 rounded w-full mt-4"
        />
        <button
          onClick={handleAddQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          disabled={isLoadingQuestion}
        >
          {isLoadingQuestion ? "Adding..." : "Add Question"}
        </button>
      </div>

      {/* List of Discussions */}
      {filteredDiscussions.map((discussion, index) => (
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

export default Community;
