import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";

import { PrimaryButton } from "../components/PrimaryButton";
import { Screen } from "../components/Screen";
import type { AuthStackParamList, RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const rootNavigation = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();

  const handleEmailLogin = () => {
    // TODO: Connect this to Firebase email auth.
    rootNavigation?.replace("Main");
  };

  const handleAnonymousLogin = () => {
    // TODO: Replace this with Firebase anonymous auth.
    rootNavigation?.replace("Main");
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View>
          <Text style={styles.eyebrow}>Welcome to</Text>
          <Text style={styles.title}>Amani</Text>
          <Text style={styles.body}>
            Sign in to keep your journal private, join caring conversations, and find support.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            autoCapitalize="none"
            autoComplete="email"
            inputMode="email"
            keyboardType="email-address"
            placeholder="you@example.com"
            placeholderTextColor="#8B928A"
            style={styles.input}
          />
          <PrimaryButton label="Continue with email" onPress={handleEmailLogin} />
          <PrimaryButton
            label="Continue anonymously"
            onPress={handleAnonymousLogin}
            variant="outline"
          />
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    color: "#4B5563",
    fontSize: 17,
    lineHeight: 26,
    marginTop: 14
  },
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  eyebrow: {
    color: "#C96B3C",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  form: {
    gap: 14
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D5D0C6",
    borderRadius: 12,
    borderWidth: 1,
    color: "#1F2933",
    fontSize: 16,
    minHeight: 52,
    paddingHorizontal: 16
  },
  label: {
    color: "#1F2933",
    fontSize: 15,
    fontWeight: "700"
  },
  title: {
    color: "#1F2933",
    fontSize: 44,
    fontWeight: "900",
    marginTop: 4
  }
});
