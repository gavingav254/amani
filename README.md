# Amani

Amani is a React Native Expo Android app for Kenyan mental health community support. Amani means "Peace" in Swahili.

## Features

- Three-slide onboarding flow.
- Login, sign up, forgot password link, and anonymous mode.
- Home dashboard with greeting, mood check-in, quick actions, daily tip, and activity feed.
- Community circles with search, join/leave actions, and post feeds.
- Anonymous posting with optional image support.
- Private journal list and full-screen entry editor.
- Mood tracker with weekly chart, calendar mood colors, history, and insights.
- Therapist discovery, filters, cards, profile, pricing, reviews, and booking CTA.
- Resources library with category filters, search, and bookmarks.
- Crisis support with Kenyan emergency contacts and one-tap call actions.
- Profile and settings screens with privacy, notifications, language, and account controls.

## Tech Stack

- Expo + React Native
- TypeScript
- React Navigation
- Firebase Auth and Firestore
- Zustand
- react-native-chart-kit
- expo-linear-gradient
- expo-notifications
- AsyncStorage

## Folder Structure

```text
src/
  components/common/
  components/mood/
  components/circles/
  components/journal/
  screens/Onboarding/
  screens/Auth/
  screens/Home/
  screens/Community/
  screens/Journal/
  screens/Therapists/
  screens/MoodTracker/
  screens/Resources/
  screens/Crisis/
  screens/Profile/
  navigation/
  services/
  hooks/
  store/
  utils/
  constants/
  types/
```

## Setup

```bash
npm install
npm run android
```

To run in Expo without opening Android immediately:

```bash
npm start
```

## Environment Variables

Firebase credentials are currently placeholders in `src/services/firebase.ts`.

You will need:

```env
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

When you add real credentials, update `src/services/firebase.ts` or wire these values through your preferred Expo environment setup.

## Development Notes

The UI currently uses local Zustand seed data so the Android app can run before Firebase is fully configured. Firebase service wrappers are already created in `src/services/auth.ts` and `src/services/firestore.ts` for the next integration step.

## Scripts

```bash
npm start
npm run android
npm run ios
npm run web
npm run typecheck
```
