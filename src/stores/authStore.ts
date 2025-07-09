import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'therapist';
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role?: 'user' | 'therapist') => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const user = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'user' as const,
      avatar: `https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400`
    };
    set({ user, isAuthenticated: true });
  },
  register: async (email: string, password: string, name: string, role = 'user') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const user = {
      id: '1',
      email,
      name,
      role,
      avatar: `https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400`
    };
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));