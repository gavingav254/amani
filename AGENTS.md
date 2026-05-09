# Amani Project Guide

## Purpose

Amani is a React Native Expo Android app for Kenyan mental health community support. Amani means "Peace" in Swahili. The product should feel calm, respectful, private, and practical.

## Tech Stack

- Expo + React Native
- TypeScript
- React Navigation
- Firebase Auth and Firestore
- Zustand for local state
- react-native-chart-kit for mood charts
- expo-notifications for future reminders

## Structure

- `src/components/common` - Shared UI primitives such as buttons, cards, search, screen layout, and toggles.
- `src/components/mood` - Mood-specific widgets.
- `src/components/circles` - Community circle and post components.
- `src/components/journal` - Journal-specific controls.
- `src/screens` - Feature screens organized by domain.
- `src/navigation` - Root stack, app stack, bottom tabs, and route types.
- `src/services` - Firebase, auth, and Firestore wrappers.
- `src/store` - Zustand stores for auth, mood, journal, and community state.
- `src/constants` - Colors, fonts, and spacing tokens.
- `src/types` - Shared TypeScript interfaces.
- `src/utils` - Seed data and formatting helpers.
- `src/hooks` - Reusable hooks.

## Design Rules

- Use `colors.primary` for the main green: `#2E7D6B`.
- Use `colors.secondary` for soft purple surfaces: `#F5F0FF`.
- Keep screens light mode, calm, readable, and minimal.
- Use rounded corners around `16`.
- Prefer shared components from `src/components/common` before adding one-off UI.
- Keep copy warm, friendly, and direct.

## Navigation

- `RootNavigator` shows onboarding/auth when no user exists.
- `AppNavigator` contains `MainTabs` and detail screens.
- Detail screens such as `CircleFeed`, `JournalEntry`, `MoodTracker`, `Resources`, `Crisis`, `TherapistProfile`, and `Settings` live outside the tab navigator, so the tab bar is hidden automatically.

## State

- `authStore` owns local demo auth state.
- `moodStore` owns today's mood and mood history.
- `journalStore` owns journal entries.
- `communityStore` owns circles and active posts.

Firebase service files are prepared, but current screens use local Zustand state so the app runs before real Firebase credentials are added.

## Firebase

Replace placeholders in `src/services/firebase.ts` with real project credentials. Service wrappers in `src/services/auth.ts` and `src/services/firestore.ts` are ready to connect screens to real data.

## Coding Conventions

- Use functional components and hooks only.
- Keep all app code in TypeScript.
- Add short comments for service/store functions when they clarify behavior.
- Avoid hard-coded colors in screens unless they are one-off semantic accents; prefer constants.
- Keep feature data shaped by interfaces in `src/types/index.ts`.

## Before Pushing

Run:

```bash
npm install
npm run typecheck
```

Then commit and push with a clear feature message.
