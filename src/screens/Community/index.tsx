import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from "@react-navigation/stack";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

import { CircleCard } from "../../components/circles/CircleCard";
import { Screen } from "../../components/common/Screen";
import { SearchInput } from "../../components/common/SearchInput";
import { SectionHeader } from "../../components/common/SectionHeader";
import type { AppStackParamList, MainTabParamList } from "../../navigation/types";
import { useCommunityStore } from "../../store/communityStore";

type Props = BottomTabScreenProps<MainTabParamList, "Community">;

export function CommunityScreen({ navigation }: Props) {
  const [query, setQuery] = useState("");
  const circles = useCommunityStore((state) => state.circles);
  const toggleCircleJoin = useCommunityStore((state) => state.toggleCircleJoin);
  const stackNavigation = navigation.getParent() as StackNavigationProp<AppStackParamList> | undefined;

  const filteredCircles = useMemo(
    () =>
      circles.filter((circle) =>
        `${circle.name} ${circle.description}`.toLowerCase().includes(query.toLowerCase())
      ),
    [circles, query]
  );

  return (
    <Screen>
      <SectionHeader
        title="Community Circles"
        subtitle="Find people who understand what you are carrying."
      />
      <SearchInput value={query} onChangeText={setQuery} placeholder="Search circles" />
      <View style={styles.list}>
        {filteredCircles.map((circle) => (
          <CircleCard
            key={circle.id}
            circle={circle}
            onOpen={() => stackNavigation?.navigate("CircleFeed", { circleId: circle.id })}
            onToggleJoin={() => toggleCircleJoin(circle.id)}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 14,
    marginTop: 16
  }
});
