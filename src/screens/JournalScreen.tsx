import { StyleSheet, Text, TextInput } from "react-native";

import { Screen } from "../components/Screen";

export function JournalScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Journal</Text>
      <TextInput
        multiline
        placeholder="Write what is on your mind..."
        placeholderTextColor="#8B928A"
        style={styles.input}
        textAlignVertical="top"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D5D0C6",
    borderRadius: 16,
    borderWidth: 1,
    color: "#1F2933",
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    padding: 16
  },
  title: {
    color: "#1F2933",
    fontSize: 28,
    fontWeight: "800"
  }
});
