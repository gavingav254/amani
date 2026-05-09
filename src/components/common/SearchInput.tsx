import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

type SearchInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
};

export function SearchInput({ value, onChangeText, placeholder }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" color={colors.muted} size={20} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    minHeight: 52,
    paddingHorizontal: 16
  },
  input: {
    color: colors.text,
    flex: 1,
    fontSize: fonts.sizes.md
  }
});
