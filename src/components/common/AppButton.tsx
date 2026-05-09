import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  style?: ViewStyle;
};

export function AppButton({ label, onPress, variant = "primary", style }: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style
      ]}
    >
      <Text style={[styles.label, variant === "ghost" && styles.ghostLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 16,
    justifyContent: "center",
    minHeight: 52,
    paddingHorizontal: 18
  },
  danger: {
    backgroundColor: colors.error
  },
  ghost: {
    backgroundColor: "transparent"
  },
  ghostLabel: {
    color: colors.primary
  },
  label: {
    color: colors.white,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold
  },
  pressed: {
    opacity: 0.84
  },
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.text
  }
});
