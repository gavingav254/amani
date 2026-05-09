import type { PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

type ScreenProps = PropsWithChildren<{
  padded?: boolean;
}>;

export function Screen({ children, padded = true }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, padded && styles.padded]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  padded: {
    paddingHorizontal: 24,
    paddingVertical: 20
  },
  safeArea: {
    backgroundColor: "#F7F4EE",
    flex: 1
  }
});
