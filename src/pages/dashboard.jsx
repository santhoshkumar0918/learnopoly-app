
import React, { useState } from "react";
import { FaUser, FaSignOutAlt, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock user data (replace with actual user data from Firebase or backend)
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
  });

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state
  
  // Handle changes in editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Handle logout
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate a logout process
      navigate("/login");
      setLoading(false);
    }, 1000); // Simulate a delay
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div>
      <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br mt-20 from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome to Your Dashboard</h1>
        
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
    </div>
  );
};

export default Dashboard;
