export type MainTabParamList = {
  Home: undefined;
  Community: undefined;
  Journal: undefined;
  Therapists: undefined;
  Profile: undefined;
};

export type AppStackParamList = {
  MainTabs: undefined;
  CircleFeed: { circleId: string };
  JournalEntry: { entryId?: string } | undefined;
  MoodTracker: undefined;
  Resources: undefined;
  Crisis: undefined;
  TherapistProfile: { therapistId: string };
  Settings: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  App: undefined;
};
