import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { SectionHeader } from "../../components/common/SectionHeader";
import { MoodCheckIn } from "../../components/mood/MoodCheckIn";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList, MainTabParamList } from "../../navigation/types";
import { useAuthStore } from "../../store/authStore";
import { useMoodStore } from "../../store/moodStore";
import type { MoodValue } from "../../types";

type Props = BottomTabScreenProps<MainTabParamList, "Home">;

const quickCards = [
  { title: "Community", icon: "people-outline" as const, route: "Community" as const },
  { title: "Journal", icon: "book-outline" as const, route: "Journal" as const },
  { title: "Therapists", icon: "heart-outline" as const, route: "Therapists" as const },
  { title: "Crisis", icon: "alert-circle-outline" as const, stackRoute: "Crisis" as const }
];

export function HomeScreen({ navigation }: Props) {
  const user = useAuthStore((state) => state.user);
  const todayMood = useMoodStore((state) => state.todayMood);
  const saveTodayMood = useMoodStore((state) => state.saveTodayMood);
  const stackNavigation = navigation.getParent() as StackNavigationProp<AppStackParamList> | undefined;

  return (
    <Screen>
      <LinearGradient colors={[colors.primary, "#3EA58D"]} style={styles.hero}>
        <Text style={styles.greeting}>Hi {user?.name || "Friend"}</Text>
        <Text style={styles.heroText}>Take one gentle step for your mind today.</Text>
      </LinearGradient>

      <MoodCheckIn
        selectedMood={todayMood}
        onSelectMood={(mood) => saveTodayMood(mood as MoodValue)}
      />

      <SectionHeader title="Quick access" subtitle="Choose the support you need right now." />
      <View style={styles.quickGrid}>
        {quickCards.map((item) => (
          <Pressable
            key={item.title}
            onPress={() =>
              item.stackRoute ? stackNavigation?.navigate(item.stackRoute) : navigation.navigate(item.route)
            }
            style={styles.quickCard}
          >
            <Ionicons name={item.icon} size={26} color={colors.primary} />
            <Text style={styles.quickTitle}>{item.title}</Text>
          </Pressable>
        ))}
      </View>

      <Card style={styles.tipCard}>
        <Text style={styles.tipTitle}>Daily mental health tip</Text>
        <Text style={styles.tipText}>
          Drink water before your next task. Small physical care can soften mental pressure.
        </Text>
      </Card>

      <SectionHeader title="Recent activity" />
      <View style={styles.feed}>
        {["You checked into Anxiety Support", "New journal prompt saved", "Dr. Asha is available today"].map(
          (activity) => (
            <Card key={activity} style={styles.activity}>
              <Text style={styles.activityText}>{activity}</Text>
            </Card>
          )
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  activity: {
    paddingVertical: 14
  },
  activityText: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold
  },
  feed: {
    gap: 10
  },
  greeting: {
    color: colors.white,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black
  },
  hero: {
    borderRadius: 24,
    gap: 8,
    marginBottom: 18,
    padding: 22
  },
  heroText: {
    color: "#E8FFF8",
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  quickCard: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    gap: 10,
    minWidth: "45%",
    padding: 16
  },
  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 18
  },
  quickTitle: {
    color: colors.text,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  tipCard: {
    backgroundColor: colors.secondary,
    gap: 6,
    marginBottom: 18
  },
  tipText: {
    color: colors.muted,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  tipTitle: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  }
});
