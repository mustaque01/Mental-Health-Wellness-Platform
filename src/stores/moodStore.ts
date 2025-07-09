import { create } from 'zustand';
import { format } from 'date-fns';

interface MoodEntry {
  id: string;
  mood: number;
  emotions: string[];
  note: string;
  date: string;
  timestamp: Date;
}

interface MoodState {
  entries: MoodEntry[];
  addEntry: (mood: number, emotions: string[], note: string) => void;
  getEntriesForPeriod: (days: number) => MoodEntry[];
}

const generateMockData = (): MoodEntry[] => {
  const entries: MoodEntry[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    entries.push({
      id: `entry-${i}`,
      mood: Math.floor(Math.random() * 10) + 1,
      emotions: ['happy', 'calm', 'grateful'].slice(0, Math.floor(Math.random() * 3) + 1),
      note: 'Feeling good today',
      date: format(date, 'yyyy-MM-dd'),
      timestamp: date
    });
  }
  
  return entries;
};

export const useMoodStore = create<MoodState>((set, get) => ({
  entries: generateMockData(),
  addEntry: (mood: number, emotions: string[], note: string) => {
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      mood,
      emotions,
      note,
      date: format(new Date(), 'yyyy-MM-dd'),
      timestamp: new Date()
    };
    set(state => ({ entries: [newEntry, ...state.entries] }));
  },
  getEntriesForPeriod: (days: number) => {
    const entries = get().entries;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return entries.filter(entry => entry.timestamp >= cutoff);
  }
}));