import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6
  },
  subtitle: {
    color: colors.muted,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  title: {
    color: colors.text,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black,
    lineHeight: fonts.lineHeights["2xl"]
  }
});
