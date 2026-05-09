import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where
} from "firebase/firestore";

import type { Circle, JournalEntry, MoodEntry, Post, User } from "../types";
import { firestore } from "./firebase";

/** Fetches a single user profile document from Firestore. */
export async function getUserProfile(uid: string) {
  const snapshot = await getDoc(doc(firestore, "users", uid));
  return snapshot.exists() ? ({ uid, ...snapshot.data() } as User) : null;
}

/** Creates or updates a user's profile while preserving existing fields. */
export function updateUserProfile(uid: string, data: Partial<User>) {
  return setDoc(doc(firestore, "users", uid), data, { merge: true });
}

/** Reads mood entries for the active user, newest first. */
export async function getMoodHistory(uid: string) {
  const moodQuery = query(
    collection(firestore, "moods"),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );
  const snapshot = await getDocs(moodQuery);
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as MoodEntry[];
}

/** Saves a mood check-in for a user. */
export function saveMoodEntry(uid: string, mood: Omit<MoodEntry, "id" | "uid">) {
  return addDoc(collection(firestore, "moods"), { ...mood, uid });
}

/** Fetches all public community support circles. */
export async function getCircles() {
  const snapshot = await getDocs(collection(firestore, "circles"));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as Circle[];
}

/** Fetches posts inside a community circle, newest first. */
export async function getCirclePosts(circleId: string) {
  const postQuery = query(
    collection(firestore, "circles", circleId, "posts"),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(postQuery);
  return snapshot.docs.map((item) => ({ id: item.id, circleId, ...item.data() })) as Post[];
}

/** Creates a post inside a circle feed. */
export function createPost(circleId: string, post: Omit<Post, "id" | "circleId">) {
  return addDoc(collection(firestore, "circles", circleId, "posts"), post);
}

/** Fetches private journal entries for a user, newest first. */
export async function getJournalEntries(uid: string) {
  const journalQuery = query(
    collection(firestore, "journals"),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );
  const snapshot = await getDocs(journalQuery);
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as JournalEntry[];
}

/** Saves a private journal entry for a user. */
export function saveJournalEntry(uid: string, entry: Omit<JournalEntry, "id" | "uid">) {
  return addDoc(collection(firestore, "journals"), { ...entry, uid });
}
