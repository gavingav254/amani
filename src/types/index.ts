export type MoodValue = 1 | 2 | 3 | 4 | 5;

export interface User {
  uid: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  isAnonymous: boolean;
  language: "English" | "Swahili";
  groupsJoined: string[];
}

export interface MoodEntry {
  id: string;
  uid: string;
  date: string;
  mood: MoodValue;
  emoji: string;
  note?: string;
}

export interface JournalEntry {
  id: string;
  uid: string;
  date: string;
  mood: MoodValue;
  prompt: string;
  content: string;
  sharedAnonymously: boolean;
}

export interface Circle {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  recentActivity: string;
  joined: boolean;
}

export interface Post {
  id: string;
  circleId: string;
  authorName: string;
  anonymous: boolean;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface Therapist {
  id: string;
  name: string;
  photoUrl: string;
  specialty: string;
  rating: number;
  pricePerSession: number;
  language: string;
  gender: "Female" | "Male" | "Non-binary";
  availableNow: boolean;
  bio: string;
  qualifications: string[];
  reviews: string[];
  availability: string[];
}

export interface Booking {
  id: string;
  uid: string;
  therapistId: string;
  sessionType: "text" | "voice" | "video";
  date: string;
  price: number;
  status: "pending" | "confirmed" | "cancelled";
}

export interface Resource {
  id: string;
  title: string;
  category: "Articles" | "Videos" | "Meditations" | "Breathing Exercises";
  duration: string;
  saved: boolean;
}
