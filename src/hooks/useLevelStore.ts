import { create } from 'zustand';

export interface LevelState {
  currentLevel: number;
  setLevel: (level: number) => void;
}

export const useLevelStore = create<LevelState>((set) => ({
  currentLevel: 0,
  setLevel: (level: number) => set({ currentLevel: level }),
}));
