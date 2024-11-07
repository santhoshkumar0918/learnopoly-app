
import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig'; // Make sure to configure your firebase.js as shown in previous step
import Header from './Header'; // Assuming you have a Header component
import firebase from 'firebase/app';
import 'firebase/firestore';

function AddPost() {
  const [postContent, setPostContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      try {
        await db.collection("posts").add({
          content: postContent,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setPostContent(""); // Clear the input after posting
      } catch (error) {
        console.error("Error adding post: ", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What’s on your mind?"
          className="p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />

      <div className="mt-8 px-6">
        <div className="flex h-[calc(100vh-5rem)] bg-gradient-to-tr from-gray-100 to-blue-50 text-gray-800 space-x-6">
          
          {/* Sidebar */}
          <div className="w-1/6 p-4 space-y-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-blue-600">X</h1>
            <nav className="space-y-4">
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <span>🏠</span>
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <span>🔍</span>
                <span>Explore</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <span>🔔</span>
                <span>Notifications</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <span>✉️</span>
                <span>Messages</span>
              </a>
              {/* Add more sidebar links as needed */}
            </nav>
            <button className="w-full p-3 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700">Post</button>
          </div>

          {/* Main Content */}
          <div className="w-3/5 p-6 space-y-8">
            
            {/* Add Post Section */}
            <AddPost />

            {/* Display Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">Posted just now</h3>
                    <span className="text-sm text-gray-500">2h ago</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/6 p-4 bg-gray-200 rounded-lg shadow-md">
            <div className="p-4 mb-6 bg-gray-300 rounded-lg">
              <button className="w-full p-2 text-white bg-blue-600 rounded-lg">Subscribe to Premium</button>
            </div>

            <div className="p-4 bg-gray-300 rounded-lg">
              <h2 className="mb-4 text-lg font-bold text-gray-800">What's happening</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-700">2024 US Elections</h3>
                  <p className="text-gray-500">US national news • LIVE</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">#NewFeature</h3>
                  <p className="text-gray-500">Trending with #AppUpdate</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">#BreakingNews</h3>
                  <p className="text-gray-500">Trending now</p>
                </div>
                {/* Add more trending topics as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
