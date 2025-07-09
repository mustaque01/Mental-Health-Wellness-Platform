import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Globe } from 'lucide-react';
import { useEmergencyStore } from '../../stores/emergencyStore';

const EmergencyModal = () => {
  const { isModalOpen, closeModal } = useEmergencyStore();

  const emergencyContacts = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support",
      type: "call"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Text with a crisis counselor",
      type: "text"
    },
    {
      name: "International Association for Suicide Prevention",
      number: "Visit Website",
      description: "Global resources and support",
      type: "web",
      link: "https://www.iasp.info/resources/Crisis_Centres/"
    }
  ];

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Crisis Support</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-800 font-medium">
                  If you're in immediate danger, please call 911 or go to your nearest emergency room.
                </p>
              </div>
              
              <p className="text-gray-600 mb-4">
                You're not alone. These resources are available 24/7 to provide support:
              </p>
            </div>

            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {contact.type === 'call' && <Phone className="w-5 h-5 text-blue-600" />}
                      {contact.type === 'text' && <MessageCircle className="w-5 h-5 text-blue-600" />}
                      {contact.type === 'web' && <Globe className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-blue-600 font-medium">{contact.number}</p>
                      <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Remember:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Your feelings are valid</li>
                <li>• This pain is temporary</li>
                <li>• Help is available</li>
                <li>• You matter</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmergencyModal;