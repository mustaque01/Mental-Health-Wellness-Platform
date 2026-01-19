import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Edit, Save, X } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

const Profile = () => {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Mental health advocate and wellness enthusiast. Passionate about mindfulness and helping others on their journey.',
    birthDate: '1990-05-15',
    emergencyContact: 'Jane Doe - (555) 987-6543'
  });

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const stats = [
    { label: 'Days Active', value: '127' },
    { label: 'Journal Entries', value: '45' },
    { label: 'Mood Logs', value: '89' },
    { label: 'Resources Saved', value: '23' }
  ];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">Profile</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isEditing ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
            <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="p-6 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl">
              <div className="mb-6 text-center">
                <div className="relative inline-block">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="object-cover w-24 h-24 mx-auto mb-4 rounded-full"
                  />
                  {isEditing && (
                    <button 
                      aria-label="Edit profile picture"
                      className="absolute bottom-0 right-0 p-2 text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
                <p className="text-gray-600 capitalize">{user?.role}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{user?.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">{formData.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">{formData.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">Joined March 2024</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-6 mt-6 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Your Progress</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-6 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                {isEditing && (
                  <button
                    onClick={() => setIsEditing(false)}
                    aria-label="Cancel editing"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name-input" className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="location-input" className="block mb-2 text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    id="location-input"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="birthdate-input" className="block mb-2 text-sm font-medium text-gray-700">
                    Birth Date
                  </label>
                  <input
                    id="birthdate-input"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="emergency-contact-input" className="block mb-2 text-sm font-medium text-gray-700">
                    Emergency Contact
                  </label>
                  <input
                    id="emergency-contact-input"
                    type="text"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="bio-textarea" className="block mb-2 text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  id="bio-textarea"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  disabled={!isEditing}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="p-6 mt-6 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">Privacy & Notifications</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900" id="email-notifications-label">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive updates about your wellness journey</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    aria-labelledby="email-notifications-label"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900" id="anonymous-posts-label">Anonymous Community Posts</h4>
                    <p className="text-sm text-gray-600">Post anonymously by default in community</p>
                  </div>
                  <input
                    type="checkbox"
                    className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    aria-labelledby="anonymous-posts-label"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900" id="data-sharing-label">Data Sharing</h4>
                    <p className="text-sm text-gray-600">Share anonymized data for research purposes</p>
                  </div>
                  <input
                    type="checkbox"
                    aria-labelledby="data-sharing-label"
                    className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="p-6 mt-6 border border-red-200 bg-red-50 rounded-xl">
              <h3 className="mb-4 text-lg font-semibold text-red-900">Danger Zone</h3>
              <div className="space-y-3">
                <button className="text-sm font-medium text-red-600 hover:text-red-700">
                  Export My Data
                </button>
                <br />
                <button className="text-sm font-medium text-red-600 hover:text-red-700">
                  Delete Account
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;