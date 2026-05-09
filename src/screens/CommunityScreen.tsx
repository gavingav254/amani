import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../components/Screen";

export function CommunityScreen() {
  return (
    <Screen>
      <View style={styles.section}>
        <Text style={styles.title}>Community</Text>
        <Text style={styles.body}>
          Moderated support groups for students, parents, workers, and anyone needing a safe place
          to be heard.
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
  section: {
    gap: 4
  },
  title: {
    color: "#1F2933",
    fontSize: 28,
    fontWeight: "800"
  }
});
