import type { StackScreenProps } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from "react-native";

import { AppButton } from "../../components/common/AppButton";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { RootStackParamList } from "../../navigation/types";

type Props = StackScreenProps<RootStackParamList, "Onboarding">;

const slides = [
  {
    title: "You are not alone",
    body: "Find a safe community of Kenyans who listen without judgement.",
    icon: "people-circle-outline" as const
  },
  {
    title: "Track your mood",
    body: "Notice patterns, celebrate bright days, and care for the heavy ones.",
    icon: "analytics-outline" as const
  },
  {
    title: "Talk to a professional",
    body: "Discover therapists and support resources that fit your life.",
    icon: "heart-circle-outline" as const
  }
];

export function OnboardingScreen({ navigation }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList<(typeof slides)[number]>>(null);
  const { width } = useWindowDimensions();

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveIndex(Math.round(event.nativeEvent.contentOffset.x / width));
  };

  const handleNext = () => {
    if (activeIndex === slides.length - 1) {
      navigation.navigate("Auth");
      return;
    }

    listRef.current?.scrollToIndex({ index: activeIndex + 1 });
  };

  return (
    <LinearGradient colors={[colors.secondary, colors.background]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Amani</Text>
        <Pressable onPress={() => navigation.navigate("Auth")}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>

      <FlatList
        ref={listRef}
        data={slides}
        horizontal
        keyExtractor={(item) => item.title}
        onMomentumScrollEnd={handleScrollEnd}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <View style={styles.illustration}>
              <Ionicons name={item.icon} color={colors.primary} size={96} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((slide, index) => (
            <View key={slide.title} style={[styles.dot, index === activeIndex && styles.dotActive]} />
          ))}
        </View>
        <AppButton
          label={activeIndex === slides.length - 1 ? "Get Started" : "Next"}
          onPress={handleNext}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  body: {
    color: colors.muted,
    fontSize: fonts.sizes.lg,
    lineHeight: fonts.lineHeights.lg,
    marginTop: 14,
    paddingHorizontal: 24,
    textAlign: "center"
  },
  brand: {
    color: colors.primary,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.black
  },
  container: {
    flex: 1
  },
  dot: {
    backgroundColor: "#D6D0E8",
    borderRadius: 5,
    height: 10,
    width: 10
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 30
  },
  dots: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginBottom: 24
  },
  footer: {
    padding: 24
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 56
  },
  illustration: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 80,
    height: 160,
    justifyContent: "center",
    marginBottom: 40,
    width: 160
  },
  skip: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24
  },
  title: {
    color: colors.text,
    fontSize: fonts.sizes["3xl"],
    fontWeight: fonts.weights.black,
    lineHeight: fonts.lineHeights["3xl"],
    textAlign: "center"
  }
});
