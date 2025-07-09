import { create } from 'zustand';

interface EmergencyState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useEmergencyStore = create<EmergencyState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));