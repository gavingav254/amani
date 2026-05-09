import type { StackScreenProps } from "@react-navigation/stack";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";

import { AppButton } from "../../components/common/AppButton";
import { Screen } from "../../components/common/Screen";
import { PromptChips } from "../../components/journal/PromptChips";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList } from "../../navigation/types";
import { useJournalStore } from "../../store/journalStore";
import type { MoodValue } from "../../types";
import { moodOptions } from "../../utils/sampleData";

type Props = StackScreenProps<AppStackParamList, "JournalEntry">;

const prompts = [
  "How are you feeling today?",
  "What are you grateful for?",
  "What's been on your mind?"
];

export function JournalEntryScreen({ navigation, route }: Props) {
  const entries = useJournalStore((state) => state.entries);
  const saveEntry = useJournalStore((state) => state.saveEntry);
  const existingEntry = useMemo(
    () => entries.find((entry) => entry.id === route.params?.entryId),
    [entries, route.params?.entryId]
  );
  const [selectedPrompt, setSelectedPrompt] = useState(existingEntry?.prompt ?? prompts[0]);
  const [content, setContent] = useState(existingEntry?.content ?? "");
  const [mood, setMood] = useState<MoodValue>(existingEntry?.mood ?? 3);
  const [sharedAnonymously, setSharedAnonymously] = useState(existingEntry?.sharedAnonymously ?? false);

  const handleSave = () => {
    if (!content.trim()) {
      return;
    }

    saveEntry({
      prompt: selectedPrompt,
      content: content.trim(),
      mood,
      sharedAnonymously
    });
    navigation.goBack();
  };

  return (
    <Screen scroll={false}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <Text style={styles.title}>New journal entry</Text>

      <PromptChips
        prompts={prompts}
        selectedPrompt={selectedPrompt}
        onSelectPrompt={setSelectedPrompt}
      />

      <Text style={styles.label}>Mood tag</Text>
      <View style={styles.moods}>
        {moodOptions.map((item) => (
          <Pressable
            key={item.mood}
            onPress={() => setMood(item.mood)}
            style={[styles.moodButton, mood === item.mood && { borderColor: item.color }]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        multiline
        onChangeText={setContent}
        placeholder="Write freely. This space is yours."
        placeholderTextColor={colors.muted}
        style={styles.editor}
        textAlignVertical="top"
        value={content}
      />

      <View style={styles.shareRow}>
        <Text style={styles.shareText}>Share anonymously to community</Text>
        <Switch value={sharedAnonymously} onValueChange={setSharedAnonymously} />
      </View>

      <AppButton label="Save Entry" onPress={handleSave} />
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
  editor: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    color: colors.text,
    flex: 1,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md,
    marginVertical: 16,
    padding: 16
  },
  emoji: {
    fontSize: 24
  },
  label: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    marginTop: 18
  },
  moodButton: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: "transparent",
    borderRadius: 16,
    borderWidth: 2,
    height: 52,
    justifyContent: "center",
    width: 52
  },
  moods: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10
  },
  shareRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
  },
  shareText: {
    color: colors.text,
    flex: 1,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold
  },
  title: {
    color: colors.text,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black,
    marginBottom: 18
  }
});
