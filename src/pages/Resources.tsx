import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, BookOpen, Video, Headphones, Heart } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'anxiety', name: 'Anxiety' },
    { id: 'depression', name: 'Depression' },
    { id: 'stress', name: 'Stress Management' },
    { id: 'sleep', name: 'Sleep' },
    { id: 'mindfulness', name: 'Mindfulness' },
    { id: 'relationships', name: 'Relationships' }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'article', name: 'Articles' },
    { id: 'video', name: 'Videos' },
    { id: 'audio', name: 'Audio' },
    { id: 'book', name: 'Books' }
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Complete Guide",
      description: "Learn about anxiety symptoms, causes, and effective coping strategies from mental health professionals.",
      category: "anxiety",
      type: "article",
      author: "Dr. Sarah Johnson",
      readTime: "10 min read",
      rating: 4.8,
      link: "#",
      image: "https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Mindfulness Meditation for Beginners",
      description: "A gentle introduction to mindfulness practice with guided exercises and practical tips.",
      category: "mindfulness",
      type: "video",
      author: "Mindful Living Academy",
      readTime: "25 min watch",
      rating: 4.9,
      link: "#",
      image: "https://images.pexels.com/photos/3820295/pexels-photo-3820295.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Sleep Hygiene: Better Rest for Better Mental Health",
      description: "Discover evidence-based strategies to improve your sleep quality and support your mental wellbeing.",
      category: "sleep",
      type: "article",
      author: "Sleep Foundation Team",
      readTime: "7 min read",
      rating: 4.7,
      link: "#",
      image: "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Overcoming Depression: Hope and Healing",
      description: "A comprehensive guide to understanding depression and finding effective treatment options.",
      category: "depression",
      type: "book",
      author: "Dr. Michael Chen",
      readTime: "Full book",
      rating: 4.6,
      link: "#",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Daily Stress Relief Techniques",
      description: "Quick and effective stress management techniques you can use anywhere, anytime.",
      category: "stress",
      type: "audio",
      author: "Wellness Podcast Network",
      readTime: "15 min listen",
      rating: 4.8,
      link: "#",
      image: "https://images.pexels.com/photos/2405955/pexels-photo-2405955.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Building Healthy Relationships",
      description: "Learn communication skills and boundary-setting techniques for healthier relationships.",
      category: "relationships",
      type: "video",
      author: "Relationship Wellness Center",
      readTime: "35 min watch",
      rating: 4.5,
      link: "#",
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return BookOpen;
      case 'video': return Video;
      case 'audio': return Headphones;
      case 'book': return BookOpen;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-700';
      case 'video': return 'bg-red-100 text-red-700';
      case 'audio': return 'bg-green-100 text-green-700';
      case 'book': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Mental Health Resources</h1>
          <p className="text-gray-600 text-lg">Curated content to support your wellness journey</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="lg:w-48">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => {
            const TypeIcon = getTypeIcon(resource.type);
            
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      <TypeIcon className="w-3 h-3 mr-1" />
                      {resource.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium capitalize">
                      {resource.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-700 font-medium">{resource.author}</p>
                      <p className="text-xs text-gray-500">{resource.readTime}</p>
                    </div>
                  </div>

                  <a
                    href={resource.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    <span>Access Resource</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-500 mb-2">No resources found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Personalized Support?</h2>
            <p className="text-blue-100 mb-6">
              Connect with licensed therapists who can provide personalized guidance for your mental health journey.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Find a Therapist
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;