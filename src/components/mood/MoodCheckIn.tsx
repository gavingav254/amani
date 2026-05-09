import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { MoodValue } from "../../types";
import { moodOptions } from "../../utils/sampleData";
import { Card } from "../common/Card";

type MoodCheckInProps = {
  selectedMood: MoodValue | null;
  onSelectMood: (mood: MoodValue) => void;
};

export function MoodCheckIn({ selectedMood, onSelectMood }: MoodCheckInProps) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Daily mood check-in</Text>
      <Text style={styles.subtitle}>Tap the face that feels closest to your day.</Text>
      <View style={styles.moods}>
        {moodOptions.map((item) => {
          const selected = selectedMood === item.mood;

          return (
            <Pressable
              key={item.mood}
              accessibilityRole="button"
              onPress={() => onSelectMood(item.mood)}
              style={[styles.moodButton, selected && { borderColor: item.color }]}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={[styles.moodLabel, selected && { color: item.color }]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 8
  },
  emoji: {
    fontSize: 26
  },
  moodButton: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: "transparent",
    borderRadius: 16,
    borderWidth: 2,
    flex: 1,
    gap: 4,
    minHeight: 82,
    justifyContent: "center",
    padding: 8
  },
  moodLabel: {
    color: colors.muted,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.bold
  },
  moods: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8
  },
  subtitle: {
    color: colors.muted,
    fontSize: fonts.sizes.sm
  },
  title: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  }
});
