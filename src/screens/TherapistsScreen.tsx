import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../components/Screen";

const therapists = [
  "Licensed counsellors in Nairobi",
  "Online therapy options",
  "Emergency contacts and helplines"
];

export function TherapistsScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Therapists</Text>
      <View style={styles.list}>
        {therapists.map((item) => (
          <View key={item} style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 12,
    marginTop: 18
  },
  row: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16
  },
  rowText: {
    color: "#1F2933",
    fontSize: 16,
    fontWeight: "600"
  },
  title: {
    color: "#1F2933",
    fontSize: 28,
    fontWeight: "800"
  }
});
