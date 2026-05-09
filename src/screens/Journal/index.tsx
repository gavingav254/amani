import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { SectionHeader } from "../../components/common/SectionHeader";
import { PromptChips } from "../../components/journal/PromptChips";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList, MainTabParamList } from "../../navigation/types";
import { useJournalStore } from "../../store/journalStore";

type Props = BottomTabScreenProps<MainTabParamList, "Journal">;

const prompts = [
  "How are you feeling today?",
  "What are you grateful for?",
  "What's been on your mind?"
];

export function JournalScreen({ navigation }: Props) {
  const entries = useJournalStore((state) => state.entries);
  const stackNavigation = navigation.getParent() as StackNavigationProp<AppStackParamList> | undefined;

  return (
    <Screen>
      <SectionHeader
        title="Journal"
        subtitle="Private reflections for the thoughts you do not have to carry alone."
      />

      <PromptChips
        prompts={prompts}
        selectedPrompt={prompts[0]}
        onSelectPrompt={() => stackNavigation?.navigate("JournalEntry")}
      />

      <View style={styles.entries}>
        {entries.map((entry) => (
          <Pressable
            key={entry.id}
            onPress={() => stackNavigation?.navigate("JournalEntry", { entryId: entry.id })}
          >
            <Card style={styles.entryCard}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryDate}>{entry.date}</Text>
                <Text style={styles.moodTag}>Mood {entry.mood}/5</Text>
              </View>
              <Text style={styles.prompt}>{entry.prompt}</Text>
              <Text numberOfLines={2} style={styles.entryText}>
                {entry.content}
              </Text>
            </Card>
          </Pressable>
        ))}
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => stackNavigation?.navigate("JournalEntry")}
        style={styles.fab}
      >
        <Ionicons name="add" color={colors.white} size={32} />
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  entries: {
    gap: 14,
    marginTop: 18,
    paddingBottom: 80
  },
  entryCard: {
    gap: 8
  },
  entryDate: {
    color: colors.muted,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  entryHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  entryText: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  fab: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 32,
    bottom: 22,
    height: 64,
    justifyContent: "center",
    position: "absolute",
    right: 22,
    width: 64
  },
  moodTag: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    color: colors.primary,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.bold,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  prompt: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  }
});
