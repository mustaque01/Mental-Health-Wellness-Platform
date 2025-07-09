import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Calendar, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useMoodStore } from '../stores/moodStore';
import { format } from 'date-fns';

const MoodTracker = () => {
  const { entries, addEntry } = useMoodStore();
  const [selectedMood, setSelectedMood] = useState(5);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [showForm, setShowForm] = useState(false);

  const emotions = [
    'Happy', 'Sad', 'Angry', 'Anxious', 'Calm', 'Excited',
    'Frustrated', 'Grateful', 'Lonely', 'Confident', 'Overwhelmed', 'Peaceful'
  ];

  const moodEmojis = {
    1: '😢', 2: '😔', 3: '😐', 4: '🙂', 5: '😊',
    6: '😄', 7: '😁', 8: '🤗', 9: '😍', 10: '🤩'
  };

  const chartData = entries.slice(0, 30).reverse().map(entry => ({
    date: format(entry.timestamp, 'MMM dd'),
    mood: entry.mood,
    fullDate: entry.date
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEntry(selectedMood, selectedEmotions, note);
    setSelectedMood(5);
    setSelectedEmotions([]);
    setNote('');
    setShowForm(false);
  };

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const averageMood = entries.length > 0 
    ? (entries.reduce((sum, entry) => sum + entry.mood, 0) / entries.length).toFixed(1)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Mood Tracker</h1>
            <p className="text-gray-600">Track your emotional journey over time</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Log Mood</span>
          </button>
        </motion.div>

        {/* Mood Entry Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">How are you feeling today?</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mood Scale */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Rate your mood (1-10)
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mood) => (
                    <button
                      key={mood}
                      type="button"
                      onClick={() => setSelectedMood(mood)}
                      className={`w-12 h-12 text-2xl rounded-lg transition-all ${
                        selectedMood === mood
                          ? 'bg-blue-500 text-white scale-110'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {moodEmojis[mood as keyof typeof moodEmojis]}
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  {selectedMood}/10 - {moodEmojis[selectedMood as keyof typeof moodEmojis]}
                </p>
              </div>

              {/* Emotions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What emotions are you experiencing?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {emotions.map((emotion) => (
                    <button
                      key={emotion}
                      type="button"
                      onClick={() => toggleEmotion(emotion)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                        selectedEmotions.includes(emotion)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {emotion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add a note (optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe what's influencing your mood today..."
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Save Entry
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Average Mood</p>
                <p className="text-2xl font-bold text-gray-900">{averageMood}/10</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Entries</p>
                <p className="text-2xl font-bold text-gray-900">{entries.length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">{entries.filter(e => 
                  new Date(e.timestamp).getMonth() === new Date().getMonth()
                ).length}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mood Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Mood Trends (Last 30 Days)</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[1, 10]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recent Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Entries</h2>
          <div className="space-y-4">
            {entries.slice(0, 10).map((entry) => (
              <div key={entry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">
                    {moodEmojis[entry.mood as keyof typeof moodEmojis]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {format(entry.timestamp, 'MMMM dd, yyyy')}
                    </p>
                    <p className="text-sm text-gray-600">
                      {entry.emotions.join(', ')}
                    </p>
                    {entry.note && (
                      <p className="text-sm text-gray-500 mt-1">{entry.note}</p>
                    )}
                  </div>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {entry.mood}/10
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MoodTracker;