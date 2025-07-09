import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  Smile,
  Brain,
  Users
} from 'lucide-react';
import { useMoodStore } from '../stores/moodStore';
import { useJournalStore } from '../stores/journalStore';
import { useAuthStore } from '../stores/authStore';
import { format } from 'date-fns';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { entries: moodEntries } = useMoodStore();
  const { entries: journalEntries, getTodaysPrompt } = useJournalStore();
  
  const recentMoods = moodEntries.slice(0, 7);
  const todaysPrompt = getTodaysPrompt();
  const averageMood = moodEntries.length > 0 
    ? (moodEntries.slice(0, 7).reduce((sum, entry) => sum + entry.mood, 0) / Math.min(7, moodEntries.length)).toFixed(1)
    : 0;

  const quickActions = [
    {
      title: "Log Today's Mood",
      description: "How are you feeling right now?",
      icon: Heart,
      link: "/mood",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Write in Journal",
      description: "Reflect on your thoughts",
      icon: BookOpen,
      link: "/journal",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Take Assessment",
      description: "Check your mental health",
      icon: Brain,
      link: "/quiz",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Join Community",
      description: "Connect with others",
      icon: Users,
      link: "/community",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            {format(new Date(), 'EEEE, MMMM do, yyyy')} • Here's your wellness overview
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-pink-100 rounded-lg">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">7-Day Average Mood</p>
                <p className="text-2xl font-bold text-gray-900">{averageMood}/10</p>
              </div>
            </div>
            <div className="flex space-x-1 mt-3">
              {recentMoods.map((entry, index) => (
                <div
                  key={index}
                  className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
                    style={{ width: `${(entry.mood / 10) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Journal Entries</p>
                <p className="text-2xl font-bold text-gray-900">{journalEntries.length}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Keep writing to track your growth</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Streak</p>
                <p className="text-2xl font-bold text-gray-900">12 days</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Great consistency!</p>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Get started</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Today's Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-8"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Today's Journal Prompt</h3>
              <p className="text-blue-100 mb-4">{todaysPrompt}</p>
              <Link
                to="/journal"
                className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Start Writing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Recent Moods */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Moods</h3>
            <div className="space-y-3">
              {recentMoods.slice(0, 5).map((entry, index) => (
                <div key={entry.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <Smile className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{format(entry.timestamp, 'MMM dd')}</p>
                      <p className="text-sm text-gray-600">{entry.emotions.join(', ')}</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{entry.mood}/10</span>
                </div>
              ))}
            </div>
            <Link
              to="/mood"
              className="inline-flex items-center text-blue-600 font-medium mt-4 hover:text-blue-700"
            >
              View all moods
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Recent Journal Entries */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Journal Entries</h3>
            <div className="space-y-3">
              {journalEntries.slice(0, 3).map((entry, index) => (
                <div key={entry.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{entry.title}</h4>
                    <span className="text-xs text-gray-500">{format(entry.timestamp, 'MMM dd')}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{entry.content}</p>
                  <div className="mt-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      entry.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                      entry.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {entry.sentiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center text-blue-600 font-medium mt-4 hover:text-blue-700"
            >
              View all entries
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;