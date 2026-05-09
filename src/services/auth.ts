import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInAnonymously as firebaseSignInAnonymously,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut
} from "firebase/auth";

import { firebaseAuth } from "./firebase";

/** Creates a Firebase user with email and password credentials. */
export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(firebaseAuth, email.trim(), password);
}

/** Signs an existing Firebase user in with email and password credentials. */
export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
}

/** Starts a Firebase anonymous session for privacy-first usage. */
export function signInAnonymously() {
  return firebaseSignInAnonymously(firebaseAuth);
}

/** Ends the active Firebase auth session. */
export function signOut() {
  return firebaseSignOut(firebaseAuth);
}

/** Sends a Firebase password reset email to the user. */
export function resetPassword(email: string) {
  return sendPasswordResetEmail(firebaseAuth, email.trim());
}
