import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useEmergencyStore } from '../../stores/emergencyStore';

const EmergencyButton = () => {
  const { openModal } = useEmergencyStore();

  return (
    <motion.button
      onClick={openModal}
      className="fixed z-50 flex items-center justify-center text-white transition-colors bg-red-500 rounded-full shadow-lg bottom-6 right-6 w-14 h-14 hover:bg-red-600"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <Phone className="w-6 h-6" />
    </motion.button>
  );
};

export default EmergencyButton;