import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Calendar, MessageCircle, Filter } from 'lucide-react';

const TherapistDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'anxiety', name: 'Anxiety & Panic' },
    { id: 'depression', name: 'Depression' },
    { id: 'trauma', name: 'Trauma & PTSD' },
    { id: 'relationships', name: 'Relationship Issues' },
    { id: 'family', name: 'Family Therapy' },
    { id: 'addiction', name: 'Addiction' },
    { id: 'eating', name: 'Eating Disorders' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'new-york', name: 'New York, NY' },
    { id: 'los-angeles', name: 'Los Angeles, CA' },
    { id: 'chicago', name: 'Chicago, IL' },
    { id: 'houston', name: 'Houston, TX' },
    { id: 'online', name: 'Online Only' }
  ];

  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Licensed Clinical Psychologist",
      specialties: ["Anxiety & Panic", "Depression", "CBT"],
      location: "New York, NY",
      rating: 4.9,
      reviews: 127,
      experience: "15+ years",
      price: "$120-150",
      bio: "Specializing in anxiety and depression with a focus on cognitive behavioral therapy. I believe in creating a safe, non-judgmental space for healing.",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400",
      availableSlots: ["Today 3:00 PM", "Tomorrow 10:00 AM", "Thu 2:00 PM"],
      insurance: ["Aetna", "Blue Cross", "Cigna"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Relationship Issues", "Family Therapy", "Couples Counseling"],
      location: "Los Angeles, CA",
      rating: 4.8,
      reviews: 89,
      experience: "12+ years",
      price: "$100-130",
      bio: "Helping couples and families build stronger relationships through evidence-based therapeutic approaches.",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
      availableSlots: ["Today 4:00 PM", "Tomorrow 11:00 AM", "Fri 1:00 PM"],
      insurance: ["United Healthcare", "Kaiser", "Anthem"]
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Licensed Clinical Social Worker",
      specialties: ["Trauma & PTSD", "Depression", "EMDR"],
      location: "Chicago, IL",
      rating: 4.9,
      reviews: 156,
      experience: "18+ years",
      price: "$110-140",
      bio: "Trauma-informed care specialist with extensive experience in EMDR and helping clients heal from past experiences.",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      availableSlots: ["Tomorrow 9:00 AM", "Wed 3:00 PM", "Thu 11:00 AM"],
      insurance: ["Blue Cross", "Humana", "Medicare"]
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Licensed Professional Counselor",
      specialties: ["Addiction", "Men's Issues", "Group Therapy"],
      location: "Houston, TX",
      rating: 4.7,
      reviews: 73,
      experience: "10+ years",
      price: "$90-120",
      bio: "Specializing in addiction recovery and men's mental health issues. Offering both individual and group therapy sessions.",
      image: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400",
      availableSlots: ["Today 5:00 PM", "Tomorrow 2:00 PM", "Sat 10:00 AM"],
      insurance: ["Aetna", "Tricare", "BCBS"]
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      title: "Licensed Therapist - Online Only",
      specialties: ["Eating Disorders", "Body Image", "Teen Therapy"],
      location: "Online Only",
      rating: 4.8,
      reviews: 94,
      experience: "14+ years",
      price: "$80-110",
      bio: "Specialized in eating disorders and body image issues. Offering convenient online therapy sessions with flexible scheduling.",
      image: "https://images.pexels.com/photos/5452299/pexels-photo-5452299.jpeg?auto=compress&cs=tinysrgb&w=400",
      availableSlots: ["Today 6:00 PM", "Tomorrow 8:00 AM", "Daily slots available"],
      insurance: ["Most major insurances accepted"]
    }
  ];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            therapist.specialties.some(spec => spec.toLowerCase().includes(selectedSpecialty.toLowerCase()));
    const matchesLocation = selectedLocation === 'all' || 
                           therapist.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Find Your Therapist</h1>
          <p className="text-gray-600 text-lg">Connect with licensed mental health professionals</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="lg:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name or specialty..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Specialty Filter */}
            <div>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {specialties.map(specialty => (
                  <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Therapist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTherapists.map((therapist, index) => (
            <motion.div
              key={therapist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{therapist.name}</h3>
                    <p className="text-gray-600 text-sm">{therapist.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{therapist.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{therapist.reviews} reviews</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">{therapist.price}</p>
                    <p className="text-sm text-gray-600">per session</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{therapist.location}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{therapist.experience} experience</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {therapist.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">{therapist.bio}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Available Appointments</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapist.availableSlots.slice(0, 3).map((slot, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-lg"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Insurance Accepted</h4>
                  <p className="text-sm text-gray-600">{therapist.insurance.join(', ')}</p>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Book Session</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTherapists.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-500 mb-2">No therapists found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Are you a mental health professional?</h2>
          <p className="text-blue-100 mb-6">
            Join our network of therapists and help more people on their mental health journey.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Join Our Network
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TherapistDirectory;