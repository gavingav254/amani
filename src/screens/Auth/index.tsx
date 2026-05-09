import type { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { AppButton } from "../../components/common/AppButton";
import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { RootStackParamList } from "../../navigation/types";
import { useAuthStore } from "../../store/authStore";

type Props = StackScreenProps<RootStackParamList, "Auth">;

export function AuthScreen(_: Props) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInWithEmail = useAuthStore((state) => state.signInWithEmail);
  const signUpWithEmail = useAuthStore((state) => state.signUpWithEmail);
  const continueAnonymously = useAuthStore((state) => state.continueAnonymously);

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Almost there", "Please enter both email and password.");
      return;
    }

    if (mode === "login") {
      signInWithEmail(email);
      return;
    }

    signUpWithEmail(email);
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.hero}>
          <Text style={styles.brand}>Amani</Text>
          <Text style={styles.title}>{mode === "login" ? "Welcome back" : "Create your space"}</Text>
          <Text style={styles.subtitle}>
            A calm place for support, reflection, and professional help when you need it.
          </Text>
        </View>

        <Card style={styles.formCard}>
          <View style={styles.segmented}>
            <Pressable
              onPress={() => setMode("login")}
              style={[styles.segment, mode === "login" && styles.segmentActive]}
            >
              <Text style={[styles.segmentText, mode === "login" && styles.segmentTextActive]}>
                Login
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setMode("signup")}
              style={[styles.segment, mode === "signup" && styles.segmentActive]}
            >
              <Text style={[styles.segmentText, mode === "signup" && styles.segmentTextActive]}>
                Sign Up
              </Text>
            </Pressable>
          </View>

          <Text style={styles.label}>Email</Text>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor={colors.muted}
            style={styles.input}
            value={email}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            placeholder="Your password"
            placeholderTextColor={colors.muted}
            secureTextEntry
            style={styles.input}
            value={password}
          />

          <Pressable onPress={() => Alert.alert("Password reset", "Firebase reset will be connected here.")}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Pressable>

          <AppButton
            label={mode === "login" ? "Login" : "Create Account"}
            onPress={handleSubmit}
          />
          <AppButton
            label="Continue Anonymously"
            onPress={continueAnonymously}
            variant="secondary"
          />
        </Card>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: {
    color: colors.primary,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.black
  },
  container: {
    flex: 1,
    gap: 28,
    justifyContent: "center"
  },
  forgot: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold,
    textAlign: "right"
  },
  formCard: {
    gap: 14
  },
  hero: {
    gap: 8
  },
  input: {
    backgroundColor: colors.secondary,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    color: colors.text,
    fontSize: fonts.sizes.md,
    minHeight: 52,
    paddingHorizontal: 16
  },
  label: {
    color: colors.text,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  segment: {
    alignItems: "center",
    borderRadius: 14,
    flex: 1,
    paddingVertical: 12
  },
  segmentActive: {
    backgroundColor: colors.primary
  },
  segmentText: {
    color: colors.muted,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  segmentTextActive: {
    color: colors.white
  },
  segmented: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    flexDirection: "row",
    padding: 4
  },
  subtitle: {
    color: colors.muted,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  title: {
    color: colors.text,
    fontSize: fonts.sizes["3xl"],
    fontWeight: fonts.weights.black,
    lineHeight: fonts.lineHeights["3xl"]
  }
});
