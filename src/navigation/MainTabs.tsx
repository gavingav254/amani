import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CommunityScreen } from "../screens/CommunityScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { JournalScreen } from "../screens/JournalScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { TherapistsScreen } from "../screens/TherapistsScreen";
import type { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

const tabIcons: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
  Home: "home-outline",
  Community: "people-outline",
  Journal: "book-outline",
  Therapists: "medkit-outline",
  Profile: "person-outline"
};

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#F7F4EE" },
        headerTitleStyle: { color: "#1F2933", fontWeight: "700" },
        tabBarActiveTintColor: "#127C6A",
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E1D8",
          height: 64,
          paddingBottom: 8,
          paddingTop: 8
        },
        tabBarIcon: ({ color, size }) => (
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
