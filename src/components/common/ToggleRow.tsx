import { StyleSheet, Switch, Text, View } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

type ToggleRowProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  helper?: string;
};

export function ToggleRow({ label, value, onValueChange, helper }: ToggleRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.copy}>
        <Text style={styles.label}>{label}</Text>
        {helper ? <Text style={styles.helper}>{helper}</Text> : null}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#D4D8DD", true: "#BDE5D7" }}
        thumbColor={value ? colors.primary : colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  copy: {
    flex: 1,
    gap: 4
  },
  helper: {
    color: colors.muted,
    fontSize: fonts.sizes.sm,
    lineHeight: fonts.lineHeights.sm
  },
  label: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between"
  }
});
