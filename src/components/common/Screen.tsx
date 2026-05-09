import type { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { colors } from "../../constants/colors";

type ScreenProps = PropsWithChildren<{
  scroll?: boolean;
  padded?: boolean;
}>;

export function Screen({ children, scroll = true, padded = true }: ScreenProps) {
  const content = <View style={[styles.content, padded && styles.padded]}>{children}</View>;

  return (
    <SafeAreaView style={styles.safeArea}>
      {scroll ? (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1
  },
  padded: {
    padding: 20
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1
  },
  scrollContent: {
    flexGrow: 1
  }
});
