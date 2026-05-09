import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../constants/colors";
import { CommunityScreen } from "../screens/Community";
import { HomeScreen } from "../screens/Home";
import { JournalScreen } from "../screens/Journal";
import { ProfileScreen } from "../screens/Profile";
import { TherapistsScreen } from "../screens/Therapists";
import type { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

const tabIcons: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
  Home: "home-outline",
  Community: "people-outline",
  Journal: "book-outline",
  Therapists: "heart-outline",
  Profile: "person-outline"
};

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: { name: keyof MainTabParamList } }) => ({
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { color: colors.text, fontWeight: "800" },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#7C8491",
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: "#E7E2F5",
          height: 66,
          paddingBottom: 8,
          paddingTop: 8,
          shadowColor: colors.text,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 12
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700"
        },
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name={tabIcons[route.name]} color={color} size={size} />
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="Therapists" component={TherapistsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
