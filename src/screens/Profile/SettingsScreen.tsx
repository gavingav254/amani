import type { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { ToggleRow } from "../../components/common/ToggleRow";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList } from "../../navigation/types";
import { useAuthStore } from "../../store/authStore";

type Props = StackScreenProps<AppStackParamList, "Settings">;

export function SettingsScreen({ navigation }: Props) {
  const [notifications, setNotifications] = useState(true);
  const [privateJournal, setPrivateJournal] = useState(true);
  const [language, setLanguage] = useState<"English" | "Swahili">("English");
  const isAnonymous = useAuthStore((state) => state.isAnonymous);
  const updateProfile = useAuthStore((state) => state.updateProfile);

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <Text style={styles.title}>Settings</Text>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <ToggleRow
          label="Daily check-in reminders"
          helper="A gentle nudge to pause and notice how you feel."
          value={notifications}
          onValueChange={setNotifications}
        />
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy controls</Text>
        <ToggleRow
          label="Anonymous mode"
          helper="Hide your name in community spaces."
          value={isAnonymous}
          onValueChange={(value) => updateProfile({ isAnonymous: value })}
        />
        <ToggleRow
          label="Keep journal private"
          helper="Journal entries stay visible only to you."
          value={privateJournal}
          onValueChange={setPrivateJournal}
        />
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Language</Text>
        <View style={styles.languageRow}>
          {(["English", "Swahili"] as const).map((item) => (
            <Pressable
              key={item}
              onPress={() => setLanguage(item)}
              style={[styles.languageButton, language === item && styles.languageActive]}
            >
              <Text style={[styles.languageText, language === item && styles.languageTextActive]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      </Card>

      <Card style={styles.section}>
        {["About Amani", "Terms", "Privacy Policy"].map((item) => (
          <Text key={item} style={styles.linkRow}>
            {item}
          </Text>
        ))}
      </Card>

      <Pressable style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete account</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    marginBottom: 16
  },
  deleteButton: {
    alignItems: "center",
    borderColor: colors.error,
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 4,
    padding: 16
  },
  deleteText: {
    color: colors.error,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.black
  },
  languageActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  languageButton: {
    alignItems: "center",
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 12
  },
  languageRow: {
    flexDirection: "row",
    gap: 10
  },
  languageText: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold
  },
  languageTextActive: {
    color: colors.white
  },
  linkRow: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    paddingVertical: 8
  },
  section: {
    gap: 16,
    marginBottom: 16
  },
  sectionTitle: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  },
  title: {
    color: colors.text,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black,
    marginBottom: 18
  }
});
