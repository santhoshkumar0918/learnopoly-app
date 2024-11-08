


import React, { useState } from "react";
import { FaUser, FaSignOutAlt, FaSpinner, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "Aravindh",
    email: "aravinddan404@example.com",
    phone: "+7358120918",
    address: "123 Main St, ezhil nagar, perambur , chennai ,India",
  });

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
      setLoading(false);
    }, 1000);
  };

  const toggleEdit = () => {
    if (editing) {
      handleSave();
    } else {
      setEditing(true);
    }
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setEditing(false);
      setSaving(false);
    }, 1000);
  };

  return (
    <div>
      <div className="mb-20">
        <Header />
      </div>
      <div className="flex min-h-screen bg-gray-100 text-gray-800">
        
        {/* Sidebar */}
        <div className="bg-white shadow-lg w-64 p-6">
          <h2 className="text-xl font-semibold mb-8">Dashboard</h2>
          <ul>
            <li className="mb-4 cursor-pointer hover:text-blue-500">Profile</li>
            <li className="mb-4 cursor-pointer hover:text-blue-500">Settings</li>
            <li className="mb-4 cursor-pointer hover:text-blue-500">Notifications</li>
          </ul>
          <button
            onClick={handleLogout}
            className="flex items-center mt-12 bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : <FaSignOutAlt className="mr-2" />}
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>

        {/* Profile Content */}
        <div className="flex-1 p-10">
          <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto">
            
            {/* User Header with Icon */}
            <div className="flex items-center mb-8">
              <FaUser className="text-4xl text-blue-500 mr-4" />
              <div>
                <h1 className="text-2xl font-bold">{userInfo.name}</h1>
                <p className="text-gray-500">{userInfo.email}</p>
              </div>
            </div>

            {/* User Info Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-8">
              <button
                onClick={toggleEdit}
                className="flex items-center bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                {saving ? <FaSpinner className="animate-spin mr-2" /> : <FaSave className="mr-2" />}
                {saving ? "Saving..." : editing ? "Save Changes" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

