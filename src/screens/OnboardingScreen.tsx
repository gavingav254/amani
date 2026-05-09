import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from "react-native";

import { OnboardingSlide } from "../components/OnboardingSlide";
import { PrimaryButton } from "../components/PrimaryButton";
import { Screen } from "../components/Screen";
import type { AuthStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "Onboarding">;

const slides = [
  {
    accent: "#127C6A",
    title: "Find calm, pamoja",
    body: "Amani gives you a gentle space to talk, listen, and feel less alone."
  },
  {
    accent: "#C96B3C",
    title: "Community that understands",
    body: "Join supportive conversations shaped around everyday Kenyan life."
  },
  {
    accent: "#345995",
    title: "Care when you need it",
    body: "Track your thoughts and discover therapists you can reach out to."
  }
];

export function OnboardingScreen({ navigation }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList<(typeof slides)[number]>>(null);
  const { width } = useWindowDimensions();

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(nextIndex);
  };

  const handleNext = () => {
    if (activeIndex === slides.length - 1) {
      navigation.navigate("Login");
      return;
    }

    listRef.current?.scrollToIndex({ index: activeIndex + 1 });
  };

  return (
    <Screen padded={false}>
      <View style={styles.header}>
        <Text style={styles.brand}>Amani</Text>
        <Text style={styles.skip} onPress={() => navigation.navigate("Login")}>
          Skip
        </Text>
      </View>

      <FlatList
        ref={listRef}
        data={slides}
        horizontal
        keyExtractor={(item) => item.title}
        onMomentumScrollEnd={handleScrollEnd}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={{ width }}>
            <OnboardingSlide {...item} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((slide, index) => (
            <View
              key={slide.title}
              style={[styles.dot, index === activeIndex && styles.activeDot]}
            />
          ))}
        </View>
        <PrimaryButton
          label={activeIndex === slides.length - 1 ? "Get started" : "Next"}
          onPress={handleNext}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: "#127C6A",
    width: 28
  },
  brand: {
    color: "#127C6A",
    fontSize: 24,
    fontWeight: "900"
  },
  dot: {
    backgroundColor: "#D5D0C6",
    borderRadius: 5,
    height: 10,
    width: 10
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
    paddingTop: 18
  },
  skip: {
    color: "#4B5563",
    fontSize: 16,
    fontWeight: "600"
  }
});
