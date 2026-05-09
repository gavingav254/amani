import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../screens/LoginScreen";
import { OnboardingScreen } from "../screens/OnboardingScreen";
import type { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
