import React, { useState } from 'react';

const ComposeModal = ({ isOpen, onClose }) => {
  const [content, setContent] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the post submission logic here
    console.log('Post content:', content);
    if (attachment) {
      console.log('Post attachment:', attachment);
    }

    // Close the modal after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Compose a Post</h2>

        <form onSubmit={handleSubmit}>
          {/* Content input */}
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="What's on your mind?"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            rows="4"
          ></textarea>

          {/* Attachment input */}
          <div className="mb-4">
            <label htmlFor="attachment" className="block text-sm text-gray-600 mb-2">Add an attachment</label>
            <input
              type="file"
              id="attachment"
              onChange={handleAttachmentChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComposeModal;
