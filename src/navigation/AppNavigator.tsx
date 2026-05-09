import { createStackNavigator } from "@react-navigation/stack";

import { CircleFeedScreen } from "../screens/Community/CircleFeedScreen";
import { CrisisScreen } from "../screens/Crisis";
import { JournalEntryScreen } from "../screens/Journal/JournalEntryScreen";
import { MoodTrackerScreen } from "../screens/MoodTracker";
import { ResourcesScreen } from "../screens/Resources";
import { SettingsScreen } from "../screens/Profile/SettingsScreen";
import { TherapistProfileScreen } from "../screens/Therapists/TherapistProfileScreen";
import { MainTabs } from "./MainTabs";
import type { AppStackParamList } from "./types";

const Stack = createStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="CircleFeed" component={CircleFeedScreen} />
      <Stack.Screen name="JournalEntry" component={JournalEntryScreen} />
      <Stack.Screen name="MoodTracker" component={MoodTrackerScreen} />
      <Stack.Screen name="Resources" component={ResourcesScreen} />
      <Stack.Screen name="Crisis" component={CrisisScreen} />
      <Stack.Screen name="TherapistProfile" component={TherapistProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
