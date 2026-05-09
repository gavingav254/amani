import { StyleSheet, Text, View } from "react-native";

type OnboardingSlideProps = {
  accent: string;
  body: string;
  title: string;
};

export function OnboardingSlide({ accent, body, title }: OnboardingSlideProps) {
  return (
    <View style={styles.slide}>
      <View style={[styles.mark, { backgroundColor: accent }]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    color: "#4B5563",
    fontSize: 17,
    lineHeight: 26,
    marginTop: 14,
    textAlign: "center"
  },
  mark: {
    borderRadius: 36,
    height: 72,
    marginBottom: 32,
    width: 72
  },
  slide: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  title: {
    color: "#1F2933",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center"
  }
});
