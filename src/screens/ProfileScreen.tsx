import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../components/Screen";

export function ProfileScreen() {
  return (
    <Screen>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>A</Text>
      </View>
      <Text style={styles.title}>Your profile</Text>
      <Text style={styles.body}>
        Manage privacy, anonymous mode, notification preferences, and saved support resources.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    backgroundColor: "#127C6A",
    borderRadius: 36,
    height: 72,
    justifyContent: "center",
    width: 72
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900"
  },
  body: {
    color: "#4B5563",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10
  },
  title: {
    color: "#1F2933",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 18
  }
});
