import { Pressable, StyleSheet, Text } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "filled" | "outline";
};

export function PrimaryButton({ label, onPress, variant = "filled" }: PrimaryButtonProps) {
  const isOutline = variant === "outline";

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isOutline ? styles.outline : styles.filled,
        pressed && styles.pressed
      ]}
    >
      <Text style={[styles.label, isOutline ? styles.outlineLabel : styles.filledLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 12,
    minHeight: 52,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  filled: {
    backgroundColor: "#127C6A"
  },
  filledLabel: {
    color: "#FFFFFF"
  },
  label: {
    fontSize: 16,
    fontWeight: "700"
  },
  outline: {
    backgroundColor: "#FFFFFF",
    borderColor: "#127C6A",
    borderWidth: 1
  },
  outlineLabel: {
    color: "#127C6A"
  },
  pressed: {
    opacity: 0.82
  }
});
