import type { Circle, JournalEntry, MoodEntry, Post, Resource, Therapist } from "../types";

export const moodOptions = [
  { mood: 1, emoji: "😢", label: "Heavy", color: "#E63946" },
  { mood: 2, emoji: "😕", label: "Low", color: "#F4A261" },
  { mood: 3, emoji: "😐", label: "Okay", color: "#7C8491" },
  { mood: 4, emoji: "🙂", label: "Good", color: "#2A9D8F" },
  { mood: 5, emoji: "😄", label: "Bright", color: "#2E7D6B" }
] as const;

export const circles: Circle[] = [
  {
    id: "anxiety",
    name: "Anxiety Support",
    description: "Gentle check-ins for racing thoughts and panic moments.",
    memberCount: 1240,
    recentActivity: "12 new posts today",
    joined: true
  },
  {
    id: "grief",
    name: "Grief and Loss",
    description: "A quiet space to remember, mourn, and be held.",
    memberCount: 860,
    recentActivity: "4 guided reflections shared",
    joined: false
  },
  {
    id: "relationships",
    name: "Relationships",
    description: "Talk through family, friendships, love, and boundaries.",
    memberCount: 1512,
    recentActivity: "Active conversation now",
    joined: true
  },
  {
    id: "stress",
    name: "Stress and Work",
    description: "Support for school, hustle, work, and money pressure.",
    memberCount: 1998,
    recentActivity: "23 members checked in",
    joined: false
  },
  {
    id: "depression",
    name: "Depression",
    description: "For days that feel dim, slow, or hard to explain.",
    memberCount: 1104,
    recentActivity: "Moderator online",
    joined: false
  },
  {
    id: "addiction",
    name: "Addiction Recovery",
    description: "Small brave steps, accountability, and relapse support.",
    memberCount: 642,
    recentActivity: "Weekly recovery thread open",
    joined: false
  },
  {
    id: "parenting",
    name: "Parenting",
    description: "Care for caregivers raising children while carrying a lot.",
    memberCount: 734,
    recentActivity: "New sleep support discussion",
    joined: false
  }
];

export const postsByCircle: Record<string, Post[]> = {
  anxiety: [
    {
      id: "post-1",
      circleId: "anxiety",
      authorName: "Anonymous",
      anonymous: true,
      content:
        "I used the 4-7-8 breathing exercise before a matatu ride today. It helped more than I expected.",
      likes: 34,
      comments: 8,
      createdAt: "Today, 8:20 AM"
    },
    {
      id: "post-2",
      circleId: "anxiety",
      authorName: "Wanjiku",
      anonymous: false,
      content:
        "Reminder: a difficult morning does not decide the whole day. Take one small step.",
      imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
      likes: 52,
      comments: 14,
      createdAt: "Yesterday"
    }
  ]
};

export const moodHistory: MoodEntry[] = [
  { id: "m1", uid: "demo", date: "Mon", mood: 3, emoji: "😐", note: "Steady day" },
  { id: "m2", uid: "demo", date: "Tue", mood: 2, emoji: "😕", note: "Tired" },
  { id: "m3", uid: "demo", date: "Wed", mood: 4, emoji: "🙂", note: "Walk helped" },
  { id: "m4", uid: "demo", date: "Thu", mood: 3, emoji: "😐", note: "Neutral" },
  { id: "m5", uid: "demo", date: "Fri", mood: 5, emoji: "😄", note: "Good call" },
  { id: "m6", uid: "demo", date: "Sat", mood: 4, emoji: "🙂", note: "Rested" },
  { id: "m7", uid: "demo", date: "Sun", mood: 5, emoji: "😄", note: "Best day" }
];

export const journalEntries: JournalEntry[] = [
  {
    id: "j1",
    uid: "demo",
    date: "9 May 2026",
    mood: 4,
    prompt: "What are you grateful for?",
    content: "A peaceful breakfast and a friend who checked in.",
    sharedAnonymously: false
  },
  {
    id: "j2",
    uid: "demo",
    date: "8 May 2026",
    mood: 3,
    prompt: "What's been on your mind?",
    content: "I want to build healthier routines without pressuring myself.",
    sharedAnonymously: true
  }
];

export const therapists: Therapist[] = [
  {
    id: "t1",
    name: "Dr. Asha Mwangi",
    photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
    specialty: "Anxiety and trauma",
    rating: 4.9,
    pricePerSession: 1800,
    language: "English, Swahili",
    gender: "Female",
    availableNow: true,
    bio: "A Nairobi-based counselling psychologist who blends CBT, trauma-informed care, and culturally grounded listening.",
    qualifications: ["MA Counselling Psychology", "8 years experience", "Trauma-informed CBT"],
    reviews: ["She helped me feel safe quickly.", "Warm, practical, and very present."],
    availability: ["Today 4:00 PM", "Sunday 10:00 AM", "Monday 6:30 PM"]
  },
  {
    id: "t2",
    name: "Brian Otieno",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600",
    specialty: "Relationships",
    rating: 4.8,
    pricePerSession: 1500,
    language: "English, Luo, Swahili",
    gender: "Male",
    availableNow: false,
    bio: "Brian supports couples, young adults, and families through conflict, grief, and communication challenges.",
    qualifications: ["Registered counsellor", "Family systems training", "6 years experience"],
    reviews: ["Very respectful and clear.", "Helped me name what I was feeling."],
    availability: ["Monday 8:00 AM", "Tuesday 5:00 PM", "Friday 2:30 PM"]
  },
  {
    id: "t3",
    name: "Malaika Njoroge",
    photoUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
    specialty: "Depression and youth care",
    rating: 4.7,
    pricePerSession: 1200,
    language: "English, Swahili, Sheng",
    gender: "Female",
    availableNow: true,
    bio: "Malaika works with students and young professionals navigating low mood, identity, and pressure.",
    qualifications: ["BA Psychology", "Youth mental health facilitator", "Peer support trainer"],
    reviews: ["She made therapy feel normal.", "Easy to talk to."],
    availability: ["Today 7:00 PM", "Saturday 11:00 AM", "Wednesday 3:00 PM"]
  }
];

export const resources: Resource[] = [
  { id: "r1", title: "How to calm panic in public", category: "Articles", duration: "5 min", saved: true },
  { id: "r2", title: "Grounding meditation for sleep", category: "Meditations", duration: "12 min", saved: false },
  { id: "r3", title: "Breathing box: 4 counts", category: "Breathing Exercises", duration: "3 min", saved: false },
  { id: "r4", title: "Understanding grief waves", category: "Videos", duration: "8 min", saved: true },
  { id: "r5", title: "Healthy boundaries with family", category: "Articles", duration: "6 min", saved: false },
  { id: "r6", title: "Quick reset before work", category: "Meditations", duration: "7 min", saved: false }
];
