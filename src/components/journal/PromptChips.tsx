import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

type PromptChipsProps = {
  prompts: string[];
  selectedPrompt: string;
  onSelectPrompt: (prompt: string) => void;
};

export function PromptChips({ prompts, selectedPrompt, onSelectPrompt }: PromptChipsProps) {
  return (
    <View style={styles.wrap}>
      {prompts.map((prompt) => {
        const selected = prompt === selectedPrompt;

        return (
          <Pressable
            key={prompt}
            onPress={() => onSelectPrompt(prompt)}
            style={[styles.chip, selected && styles.selectedChip]}
          >
            <Text style={[styles.label, selected && styles.selectedLabel]}>{prompt}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  label: {
    color: colors.text,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.semibold
  },
  selectedChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  selectedLabel: {
    color: colors.white
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  }
});
