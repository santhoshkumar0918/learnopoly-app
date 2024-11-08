import React, { useState } from 'react';
import { 
  Search, Bell, Bookmark, Share2, MessageCircle, Heart, 
  Repeat2, TrendingUp, Filter, BookOpen, Code, Video, 
  Zap, Plus, ChevronDown, Star, Paperclip, Users, Settings 
} from 'lucide-react';
import Header from './Header';

const Feed = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const trendingTopics = [
    { name: 'React 19', posts: '2.4k' },
    { name: 'TypeScript', posts: '1.8k' },
    { name: 'Web Performance', posts: '1.2k' },
    { name: 'AI in CodeGen', posts: '956' },
  ];

  const suggestedMentors = [
    { name: 'Alex Rivera', expertise: 'Frontend Dev', rating: 4.9, students: 1234 },
    { name: 'Maria Chen', expertise: 'System Design', rating: 4.8, students: 956 },
    { name: 'James Lee', expertise: 'DevOps', rating: 4.7, students: 789 },
  ];

  const learningPaths = [
    { name: 'Frontend Master', progress: 65, totalCourses: 12 },
    { name: 'Backend Pro', progress: 30, totalCourses: 15 },
    { name: 'Cloud Architecture', progress: 45, totalCourses: 10 },
  ];

  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      handle: "@sarahcodes",
      avatar: "/api/placeholder/40/40",
      verified: true,
      timestamp: "2h ago",
      content: "🚀 Just launched my new course on Advanced React Patterns!\n\nLearn how to build scalable and maintainable React applications using:\n\n✅ Compound Components\n✅ Render Props\n✅ Custom Hooks\n✅ Context + Reducers\n\nBonus: Real-world case studies included!",
      likes: 234,
      comments: 45,
      shares: 28,
      topic: "React",
      type: "course",
      attachments: [
        { type: 'image', url: '/api/placeholder/400/200' }
      ]
    },
    {
      id: 2,
      author: "David Kumar",
      handle: "@davidkumar",
      avatar: "/api/placeholder/40/40",
      verified: true,
      timestamp: "4h ago",
      content: "💡 Performance Tip of the Day:\n\nUse the React Profiler to identify unnecessary re-renders in your app:\n\n```jsx\n<Profiler id=\"MyComponent\" onRender={callback}>\n  <MyComponent />\n</Profiler>\n```\n\nThis helped us reduce render times by 40%! #webperf",
      likes: 456,
      comments: 89,
      shares: 122,
      topic: "Performance",
      type: "tip",
      codeSnippet: true
    },
    {
      id: 3,
      author: "TechEd Daily",
      handle: "@techeddaily",
      avatar: "/api/placeholder/40/40",
      timestamp: "6h ago",
      content: "🎥 New Video Tutorial: Building a Real-time Chat App\n\nTechnologies covered:\n- Socket.io\n- React\n- Node.js\n- MongoDB\n\nFull source code included! Check comments for link.",
      likes: 789,
      comments: 56,
      shares: 234,
      topic: "Tutorial",
      type: "video",
      attachments: [
        { type: 'video', thumbnail: '/api/placeholder/400/225' }
      ]
    }
  ];

  // JSX for the compose modal
  const ComposeModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ${showComposeModal ? '' : 'hidden'}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Create Post</h3>
          <button onClick={() => setShowComposeModal(false)} className="text-gray-500">
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
        <textarea
          placeholder="Share your knowledge..."
          className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 hover:text-blue-500">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500">
              <Code className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500">
              <Video className="w-5 h-5" />
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Post
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className='mb-20'><Header/></div>
      
    <div className="min-h-screen bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* User Profile Summary */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <div className="flex items-center space-x-3">
                  <img src="/api/placeholder/48/48" alt="Profile" className="rounded-full" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">John Developer</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Engineer</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="text-center">
                    <span className="block font-bold text-gray-900 dark:text-white">127</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Courses</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-gray-900 dark:text-white">3.2k</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Following</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-gray-900 dark:text-white">942</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Points</span>
                  </div>
                </div>
              </div>

              {/* Learning Paths Progress */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learning Paths
                </h3>
                <div className="mt-4 space-y-4">
                  {learningPaths.map((path) => (
                    <div key={path.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{path.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{path.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-4">
            {/* Feed Content */}
            <div className="space-y-4">
              {posts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition duration-150">
                  <div className="p-4">
                    <div className="flex items-center space-x-3">
                      <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {post.author} {post.verified && <Star className="inline w-4 h-4 text-yellow-500" />}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{post.handle} · {post.timestamp}</p>
                      </div>
                    </div>
                    <div className="mt-3 text-gray-900 dark:text-gray-100">
                      <p>{post.content}</p>
                    </div>
                    {post.codeSnippet && (
                      <pre className="mt-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">{`<Profiler id="MyComponent" onRender={callback}>`}</code>
                      </pre>
                    )}
                    {post.type === "video" && (
                      <div className="mt-4">
                        <video className="w-full rounded-md" controls>
                          <source src={post.attachments[0].thumbnail} type="video/mp4" />
                        </video>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2">
                        <Repeat2 className="w-5 h-5" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                    <button className="flex items-center space-x-2">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* Trending Topics */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Trending Topics
                </h3>
                <div className="mt-4 space-y-3">
                  {trendingTopics.map((topic) => (
                    <div key={topic.name} className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                      <span>{topic.name}</span>
                      <span>{topic.posts} Posts</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Mentors */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Suggested Mentors
                </h3>
                <div className="mt-4 space-y-4">
                  {suggestedMentors.map((mentor) => (
                    <div key={mentor.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src="/api/placeholder/48/48"
                          alt={mentor.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{mentor.name}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{mentor.expertise}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {mentor.rating} <Star className="inline w-4 h-4 text-yellow-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Compose Post Modal */}
      {showComposeModal && <ComposeModal />}
    </div>
  );
};

export default Feed;
