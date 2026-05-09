import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppButton } from "../../components/common/AppButton";
import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList, MainTabParamList } from "../../navigation/types";
import { useAuthStore } from "../../store/authStore";
import { useCommunityStore } from "../../store/communityStore";
import { useJournalStore } from "../../store/journalStore";
import { useMoodStore } from "../../store/moodStore";

type Props = BottomTabScreenProps<MainTabParamList, "Profile">;

export function ProfileScreen({ navigation }: Props) {
  const user = useAuthStore((state) => state.user);
  const isAnonymous = useAuthStore((state) => state.isAnonymous);
  const logout = useAuthStore((state) => state.logout);
  const journalCount = useJournalStore((state) => state.entries.length);
  const moodStreak = useMoodStore((state) => state.moodHistory.length);
  const groupsJoined = useCommunityStore((state) => state.circles.filter((circle) => circle.joined).length);
  const stackNavigation = navigation.getParent() as StackNavigationProp<AppStackParamList> | undefined;

  return (
    <Screen>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user?.name?.charAt(0) ?? "A"}</Text>
        </View>
        <Text style={styles.name}>{user?.name ?? "Friend"}</Text>
        {isAnonymous ? <Text style={styles.badge}>Anonymous mode</Text> : null}
      </View>

      <View style={styles.stats}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{moodStreak}</Text>
          <Text style={styles.statLabel}>Mood streak</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{journalCount}</Text>
          <Text style={styles.statLabel}>Journal entries</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{groupsJoined}</Text>
          <Text style={styles.statLabel}>Groups joined</Text>
        </Card>
      </View>

      <Card style={styles.menu}>
        <Pressable style={styles.menuRow} onPress={() => undefined}>
          <Ionicons name="create-outline" color={colors.primary} size={22} />
          <Text style={styles.menuText}>Edit profile</Text>
        </Pressable>
        <Pressable style={styles.menuRow} onPress={() => stackNavigation?.navigate("MoodTracker")}>
          <Ionicons name="analytics-outline" color={colors.primary} size={22} />
          <Text style={styles.menuText}>Mood insights</Text>
        </Pressable>
        <Pressable style={styles.menuRow} onPress={() => stackNavigation?.navigate("Resources")}>
          <Ionicons name="library-outline" color={colors.primary} size={22} />
          <Text style={styles.menuText}>Saved resources</Text>
        </Pressable>
        <Pressable style={styles.menuRow} onPress={() => stackNavigation?.navigate("Settings")}>
          <Ionicons name="settings-outline" color={colors.primary} size={22} />
          <Text style={styles.menuText}>Settings</Text>
        </Pressable>
      </Card>

      <AppButton label="Logout" onPress={logout} variant="secondary" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 42,
    height: 84,
    justifyContent: "center",
    width: 84
  },
  avatarText: {
    color: colors.white,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 14,
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  menu: {
    gap: 18,
    marginVertical: 20
  },
  menuRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  menuText: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold
  },
  name: {
    color: colors.text,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black
  },
  profileHeader: {
    alignItems: "center",
    gap: 10,
    marginBottom: 22
  },
  statCard: {
    alignItems: "center",
    flex: 1,
    gap: 6,
    paddingHorizontal: 8
  },
  statLabel: {
    color: colors.muted,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.bold,
    textAlign: "center"
  },
  statValue: {
    color: colors.primary,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.black
  },
  stats: {
    flexDirection: "row",
    gap: 10
  }
});
