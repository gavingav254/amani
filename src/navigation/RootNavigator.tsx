import { createStackNavigator } from "@react-navigation/stack";

import { AuthScreen } from "../screens/Auth";
import { OnboardingScreen } from "../screens/Onboarding";
import { useAuthStore } from "../store/authStore";
import { AppNavigator } from "./AppNavigator";
import type { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const user = useAuthStore((state) => state.user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
