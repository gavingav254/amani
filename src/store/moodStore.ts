import { create } from "zustand";

import { moodHistory, moodOptions } from "../utils/sampleData";
import type { MoodEntry, MoodValue } from "../types";

type MoodState = {
  todayMood: MoodValue | null;
  moodHistory: MoodEntry[];
  saveTodayMood: (mood: MoodValue) => void;
};

export const useMoodStore = create<MoodState>((set) => ({
  todayMood: null,
  moodHistory,
  saveTodayMood: (mood) =>
    set((state) => {
      const option = moodOptions.find((item) => item.mood === mood);
      const entry: MoodEntry = {
        id: `mood-${Date.now()}`,
        uid: "demo",
        date: "Today",
        mood,
        emoji: option?.emoji ?? "🙂",
        note: option?.label
      };

      return {
        todayMood: mood,
        moodHistory: [entry, ...state.moodHistory.filter((item) => item.date !== "Today")]
      };
    })
}));
