import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { Circle } from "../../types";
import { formatMembers } from "../../utils/format";
import { AppButton } from "../common/AppButton";
import { Card } from "../common/Card";

type CircleCardProps = {
  circle: Circle;
  onOpen: () => void;
  onToggleJoin: () => void;
};

export function CircleCard({ circle, onOpen, onToggleJoin }: CircleCardProps) {
  return (
    <Pressable onPress={onOpen}>
      <Card style={styles.card}>
        <View style={styles.topRow}>
          <View style={styles.copy}>
            <Text style={styles.name}>{circle.name}</Text>
            <Text style={styles.description}>{circle.description}</Text>
          </View>
          <AppButton
            label={circle.joined ? "Leave" : "Join"}
            onPress={onToggleJoin}
            variant={circle.joined ? "ghost" : "primary"}
            style={styles.button}
          />
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{formatMembers(circle.memberCount)}</Text>
          <Text style={styles.meta}>{circle.recentActivity}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 40,
    minWidth: 76
  },
  card: {
    gap: 14
  },
  copy: {
    flex: 1,
    gap: 6
  },
  description: {
    color: colors.muted,
    fontSize: fonts.sizes.sm,
    lineHeight: fonts.lineHeights.sm
  },
  meta: {
    color: colors.primary,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.bold
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  name: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  },
  topRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12
  }
});
