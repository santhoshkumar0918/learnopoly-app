import React from 'react';
import Header from './Header';

function Feed() {
  return (
    <div>
      <Header />
      <div className="flex h-screen bg-gray-100 mt-20 text-gray-800">
        
        {/* Sidebar */}
        <div className="w-1/6 p-4 space-y-6 bg-white rounded-r-3xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600">X</h1>
          <nav className="space-y-4">
            {[
              { icon: "🏠", label: "Home" },
              { icon: "🔍", label: "Explore" },
              { icon: "🔔", label: "Notifications" },
              { icon: "✉️", label: "Messages" },
              { icon: "📜", label: "Grok" },
              { icon: "👥", label: "Communities" },
              { icon: "⭐", label: "Premium" },
              { icon: "⚡", label: "Verified Orgs" },
              { icon: "👤", label: "Profile" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-lg transition ease-in-out"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <button className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 transition ease-in-out">
            Post
          </button>
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-6 border-l border-gray-300">
          <div className="flex items-center justify-between p-4 mb-6 bg-gray-200 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="What's happening?!"
              className="w-full p-3 bg-white rounded-md text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button className="p-2 ml-4 text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg hover:from-gray-600 hover:to-gray-700 transition ease-in-out">
              Post
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-3 text-2xl font-bold text-blue-600">Introducing Radar</h2>
            <p className="mb-4 text-gray-600">
              Stay ahead of the curve on any topic, directly on X. Now available for select Premium+ members.
            </p>
            <button className="p-2 px-4 text-blue-600 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition ease-in-out">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/6 p-4 bg-white border-l border-gray-300 rounded-l-3xl shadow-lg">
          <div className="p-4 mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg">
            <button className="w-full p-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition ease-in-out">
              Subscribe to Premium
            </button>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-blue-600">What's happening</h2>
            <div className="space-y-4">
              {[
                { title: "2024 US Elections", description: "US national news • LIVE" },
                { title: "#DeathThreat", description: "Trending with #ChennaiRains" },
                { title: "ध्रुव राठी", description: "Trending in India" },
                { title: "#अधिकारोंका हनन", description: "1,390 posts" },
              ].map((item, index) => (
                <div key={index} className="p-2 bg-white rounded-lg hover:bg-gray-200 transition ease-in-out">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
 