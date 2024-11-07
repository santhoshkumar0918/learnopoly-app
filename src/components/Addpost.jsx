// import React, { useState } from 'react';
// import { db } from '../firebase/firebaseConfig';

// function AddPost() {
//   const [postContent, setPostContent] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (postContent.trim()) {
//       try {
//         await db.collection("posts").add({
//           content: postContent,
//           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         });
//         setPostContent(""); // Clear the input after posting
//       } catch (error) {
//         console.error("Error adding post: ", error);
//       }
//     }
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md mb-4">
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <textarea
//           value={postContent}
//           onChange={(e) => setPostContent(e.target.value)}
//           placeholder="What’s on your mind?"
//           className="p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Add Post
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddPost;
