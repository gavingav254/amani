import type { StackScreenProps } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { SearchInput } from "../../components/common/SearchInput";
import { SectionHeader } from "../../components/common/SectionHeader";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList } from "../../navigation/types";
import type { Resource } from "../../types";
import { resources as seedResources } from "../../utils/sampleData";

type Props = StackScreenProps<AppStackParamList, "Resources">;

const categories: Array<Resource["category"]> = [
  "Articles",
  "Videos",
  "Meditations",
  "Breathing Exercises"
];

export function ResourcesScreen({ navigation }: Props) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Resource["category"]>("Articles");
  const [savedIds, setSavedIds] = useState(seedResources.filter((item) => item.saved).map((item) => item.id));

  const visibleResources = useMemo(
    () =>
      seedResources.filter(
        (resource) =>
          resource.category === selectedCategory &&
          resource.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, selectedCategory]
  );

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <SectionHeader
        title="Resources Library"
        subtitle="Read, watch, breathe, and save what supports you."
      />
      <SearchInput value={query} onChangeText={setQuery} placeholder="Search resources" />

      <View style={styles.categories}>
        {categories.map((category) => (
          <Pressable
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[styles.category, selectedCategory === category && styles.categoryActive]}
          >
            <Text
              style={[styles.categoryText, selectedCategory === category && styles.categoryTextActive]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.grid}>
        {visibleResources.map((resource) => {
          const saved = savedIds.includes(resource.id);

          return (
            <Card key={resource.id} style={styles.resourceCard}>
              <View style={styles.resourceTop}>
                <Ionicons
                  name={saved ? "bookmark" : "bookmark-outline"}
                  color={colors.primary}
                  size={24}
                  onPress={() =>
                    setSavedIds((ids) =>
                      saved ? ids.filter((id) => id !== resource.id) : [...ids, resource.id]
                    )
                  }
                />
              </View>
              <Text style={styles.resourceTitle}>{resource.title}</Text>
              <Text style={styles.duration}>{resource.duration}</Text>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    marginBottom: 16
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16
  },
  category: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  categoryActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  categoryText: {
    color: colors.text,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  categoryTextActive: {
    color: colors.white
  },
  duration: {
    color: colors.muted,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 18
  },
  resourceCard: {
    gap: 12,
    minHeight: 150,
    width: "47%"
  },
  resourceTitle: {
    color: colors.text,
    flex: 1,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.black,
    lineHeight: fonts.lineHeights.md
  },
  resourceTop: {
    alignItems: "flex-end"
  }
});
