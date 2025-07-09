import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import Navbar from './components/layout/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import MoodTracker from './pages/MoodTracker';
import Journal from './pages/Journal';
import Resources from './pages/Resources';
import Quiz from './pages/Quiz';
import Community from './pages/Community';
import TherapistDirectory from './pages/TherapistDirectory';
import Profile from './pages/Profile';
import EmergencyModal from './components/emergency/EmergencyModal';
import EmergencyButton from './components/emergency/EmergencyButton';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <LandingPage />} />
          <Route path="/mood" element={<MoodTracker />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/community" element={<Community />} />
          <Route path="/therapists" element={<TherapistDirectory />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {isAuthenticated && <EmergencyButton />}
        <EmergencyModal />
      </div>
    </Router>
  );
}

export default App;