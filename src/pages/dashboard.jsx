import { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaSpinner } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
  });

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const [question, setQuestion] = useState("");
  const [tags, setTags] = useState("");
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false); // for question submission loading state

  // Handle changes in editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Handle logout
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
      setLoading(false);
    }, 1000); // Simulate a delay
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setEditing(!editing);
  };

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
        tags: tags.split(","),
        votes: 0,
        answers: 0,
        date: new Date().toLocaleString(),
        user: auth.currentUser?.email || "Anonymous", // Replace with logged-in user info
      });

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome to Your Dashboard
        </h1>

        {/* User Info Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <FaUser className="text-4xl text-blue-500" />
            <button
              onClick={toggleEdit}
              className="text-blue-500 font-medium hover:underline transition-colors duration-200"
            >
              {editing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            {/* Address Field */}
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Add Question Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Add a Question</h2>
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

        {/* Logout Button */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              <FaSignOutAlt className="mr-2" />
            )}
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
