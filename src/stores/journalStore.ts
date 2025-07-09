import { create } from 'zustand';
import { format } from 'date-fns';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  prompt: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  date: string;
  timestamp: Date;
}

interface JournalState {
  entries: JournalEntry[];
  dailyPrompts: string[];
  addEntry: (title: string, content: string, prompt: string) => void;
  getTodaysPrompt: () => string;
}

const DAILY_PROMPTS = [
  "What are three things you're grateful for today?",
  "Describe a moment when you felt truly peaceful.",
  "What challenge did you overcome recently?",
  "Write about someone who makes you feel supported.",
  "What would you tell your younger self?",
  "Describe your ideal day of self-care.",
  "What emotion did you experience most today?",
  "Write about a goal you're working toward.",
  "What made you smile today?",
  "How did you practice kindness today?",
];

const generateMockEntries = (): JournalEntry[] => {
  const entries: JournalEntry[] = [];
  const today = new Date();
  
  for (let i = 5; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    entries.push({
      id: `entry-${i}`,
      title: `Journal Entry - ${format(date, 'MMM dd')}`,
      content: `Today was a reflective day. I spent time thinking about my goals and what I want to achieve. The weather was nice, and I took a walk in the park which helped clear my mind. I'm feeling optimistic about the future and grateful for the support system I have.`,
      prompt: DAILY_PROMPTS[i % DAILY_PROMPTS.length],
      sentiment: ['positive', 'neutral', 'negative'][Math.floor(Math.random() * 3)] as any,
      date: format(date, 'yyyy-MM-dd'),
      timestamp: date
    });
  }
  
  return entries;
};

export const useJournalStore = create<JournalState>((set, get) => ({
  entries: generateMockEntries(),
  dailyPrompts: DAILY_PROMPTS,
  addEntry: (title: string, content: string, prompt: string) => {
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      title,
      content,
      prompt,
      sentiment: 'neutral', // Would be calculated by sentiment analysis
      date: format(new Date(), 'yyyy-MM-dd'),
      timestamp: new Date()
    };
    set(state => ({ entries: [newEntry, ...state.entries] }));
  },
  getTodaysPrompt: () => {
    const today = new Date().getDate();
    const prompts = get().dailyPrompts;
    return prompts[today % prompts.length];
  }
}));