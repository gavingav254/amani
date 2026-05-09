import type { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { colors } from "../../constants/colors";

type CardProps = PropsWithChildren<{
  style?: ViewStyle;
}>;

export function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export const cardShadow = {
  shadowColor: colors.text,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.07,
  shadowRadius: 20,
  elevation: 3
};

const styles = StyleSheet.create({
  card: {
    ...cardShadow,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16
  }
});
