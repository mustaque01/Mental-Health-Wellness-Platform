import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MessageCircle, Heart, Users, Flag, Clock, User } from 'lucide-react';
import { format } from 'date-fns';

const Community = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', anonymous: false });

  const posts = [
    {
      id: 1,
      title: "Dealing with work anxiety - any tips?",
      content: "I've been experiencing a lot of anxiety at work lately. My boss is really demanding and I feel like I'm constantly walking on eggshells. Has anyone dealt with something similar?",
      author: "Anonymous",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      likes: 12,
      replies: 8,
      category: "anxiety"
    },
    {
      id: 2,
      title: "Small wins today 🌟",
      content: "Just wanted to share that I finally managed to go for a walk after weeks of feeling too depressed to leave the house. It's a small step but it feels huge to me right now.",
      author: "Sarah M.",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      likes: 25,
      replies: 15,
      category: "depression"
    },
    {
      id: 3,
      title: "Meditation apps that actually work?",
      content: "Looking for recommendations for meditation apps. I've tried a few but can't seem to stick with them. What has worked for you?",
      author: "Alex K.",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      likes: 8,
      replies: 12,
      category: "mindfulness"
    },
    {
      id: 4,
      title: "Supporting a friend through tough times",
      content: "My best friend has been going through a really difficult period with depression. I want to help but I'm not sure what to say or do. Any advice on how to be supportive?",
      author: "Anonymous",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      likes: 18,
      replies: 22,
      category: "support"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', color: 'bg-gray-100 text-gray-700' },
    { id: 'anxiety', name: 'Anxiety', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'depression', name: 'Depression', color: 'bg-blue-100 text-blue-700' },
    { id: 'mindfulness', name: 'Mindfulness', color: 'bg-green-100 text-green-700' },
    { id: 'support', name: 'Support', color: 'bg-purple-100 text-purple-700' }
  ];

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission
    console.log('New post:', newPost);
    setNewPost({ title: '', content: '', anonymous: false });
    setShowNewPost(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Community</h1>
            <p className="text-gray-600">Connect with others on similar mental health journeys</p>
          </div>
          <button
            onClick={() => setShowNewPost(!showNewPost)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Community Guidelines</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Be respectful and supportive to all members</li>
                <li>• Share experiences, not medical advice</li>
                <li>• Use the anonymous option if you prefer privacy</li>
                <li>• Report any inappropriate content</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* New Post Form */}
        {showNewPost && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Share with the Community</h2>
            
            <form onSubmit={handleSubmitPost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What would you like to talk about?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your message
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your thoughts, experiences, or questions..."
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={newPost.anonymous}
                  onChange={(e) => setNewPost({ ...newPost, anonymous: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  Post anonymously
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Share Post
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewPost(false)}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category.color} hover:opacity-80`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{format(post.timestamp, 'MMM dd, yyyy • h:mm a')}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Flag className="w-4 h-4" />
                </button>
              </div>

              <div className="mb-4">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                  categories.find(cat => cat.id === post.category)?.color || 'bg-gray-100 text-gray-700'
                }`}>
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.replies} replies</span>
                  </button>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Join Discussion
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors shadow-lg">
            Load More Posts
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;