import { create } from "zustand";

import type { JournalEntry } from "../types";
import { journalEntries } from "../utils/sampleData";
import { todayLabel } from "../utils/format";

type JournalState = {
  entries: JournalEntry[];
  saveEntry: (entry: Omit<JournalEntry, "id" | "uid" | "date">) => void;
};

export const useJournalStore = create<JournalState>((set) => ({
  entries: journalEntries,
  saveEntry: (entry) =>
    set((state) => ({
      entries: [
        {
          id: `journal-${Date.now()}`,
          uid: "demo",
          date: todayLabel(),
          ...entry
        },
        ...state.entries
      ]
    }))
}));
