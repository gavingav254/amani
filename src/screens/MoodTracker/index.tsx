import type { StackScreenProps } from "@react-navigation/stack";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { SectionHeader } from "../../components/common/SectionHeader";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList } from "../../navigation/types";
import { useMoodStore } from "../../store/moodStore";
import { moodOptions } from "../../utils/sampleData";

type Props = StackScreenProps<AppStackParamList, "MoodTracker">;

const calendarDays = Array.from({ length: 30 }, (_, index) => ({
  day: index + 1,
  mood: ((index % 5) + 1) as 1 | 2 | 3 | 4 | 5
}));

export function MoodTrackerScreen({ navigation }: Props) {
  const moodHistory = useMoodStore((state) => state.moodHistory);
  const chartWidth = Dimensions.get("window").width - 56;

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <SectionHeader
        title="Mood Tracker"
        subtitle="Gentle patterns can show you what helps."
      />

      <Card style={styles.chartCard}>
        <Text style={styles.cardTitle}>Weekly mood chart</Text>
        <LineChart
          data={{
            labels: moodHistory.slice(-7).map((item) => item.date.slice(0, 3)),
            datasets: [{ data: moodHistory.slice(-7).map((item) => item.mood) }]
          }}
          width={chartWidth}
          height={210}
          chartConfig={{
            backgroundGradientFrom: colors.white,
            backgroundGradientTo: colors.white,
            color: () => colors.primary,
            decimalPlaces: 0,
            labelColor: () => colors.muted,
            propsForDots: { r: "5", strokeWidth: "2", stroke: colors.primary }
          }}
          bezier
          style={styles.chart}
        />
      </Card>

      <Card style={styles.calendarCard}>
        <Text style={styles.cardTitle}>Monthly calendar</Text>
        <View style={styles.calendarGrid}>
          {calendarDays.map((item) => {
            const mood = moodOptions.find((option) => option.mood === item.mood);
            return (
              <View key={item.day} style={[styles.day, { backgroundColor: mood?.color }]}>
                <Text style={styles.dayText}>{item.day}</Text>
              </View>
            );
          })}
        </View>
      </Card>

      <Card style={styles.insightCard}>
        <Text style={styles.cardTitle}>Insights</Text>
        <Text style={styles.insightText}>
          You feel best on Sundays. Protect that rest rhythm where you can.
        </Text>
      </Card>

      <View style={styles.history}>
        <Text style={styles.cardTitle}>Mood log history</Text>
        {moodHistory.map((item) => (
          <Card key={`${item.id}-${item.date}`} style={styles.historyRow}>
            <Text style={styles.historyEmoji}>{item.emoji}</Text>
            <View style={styles.historyCopy}>
              <Text style={styles.historyDate}>{item.date}</Text>
              <Text style={styles.historyNote}>{item.note}</Text>
            </View>
          </Card>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    marginBottom: 16
  },
  calendarCard: {
    gap: 14,
    marginTop: 16
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  cardTitle: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  },
  chart: {
    borderRadius: 16,
    marginLeft: -12,
    marginTop: 8
  },
  chartCard: {
    marginTop: 18
  },
  day: {
    alignItems: "center",
    borderRadius: 12,
    height: 38,
    justifyContent: "center",
    width: 38
  },
  dayText: {
    color: colors.white,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.black
  },
  history: {
    gap: 10,
    marginTop: 18
  },
  historyCopy: {
    gap: 2
  },
  historyDate: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold
  },
  historyEmoji: {
    fontSize: 26
  },
  historyNote: {
    color: colors.muted,
    fontSize: fonts.sizes.sm
  },
  historyRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    paddingVertical: 12
  },
  insightCard: {
    backgroundColor: colors.secondary,
    gap: 8,
    marginTop: 16
  },
  insightText: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  }
});
