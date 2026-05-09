import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../components/Screen";

export function HomeScreen() {
  return (
    <Screen>
      <View style={styles.card}>
        <Text style={styles.title}>How are you feeling today?</Text>
        <Text style={styles.body}>
          Check in with yourself, read a calming prompt, or find a supportive community thread.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    color: "#4B5563",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20
  },
  title: {
    color: "#1F2933",
    fontSize: 24,
    fontWeight: "800"
  }
});
