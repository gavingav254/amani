import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { AppButton } from "../../components/common/AppButton";
import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { SectionHeader } from "../../components/common/SectionHeader";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList, MainTabParamList } from "../../navigation/types";
import { therapists } from "../../utils/sampleData";

type Props = BottomTabScreenProps<MainTabParamList, "Therapists">;

const filters = ["Anxiety", "Under KSh 1500", "Swahili", "Female"];

export function TherapistsScreen({ navigation }: Props) {
  const stackNavigation = navigation.getParent() as StackNavigationProp<AppStackParamList> | undefined;

  return (
    <Screen>
      <SectionHeader
        title="Find a Therapist"
        subtitle="Browse verified Kenyan counsellors and choose the care that fits."
      />

      <View style={styles.filters}>
        {filters.map((filter) => (
          <View key={filter} style={styles.filterChip}>
            <Text style={styles.filterText}>{filter}</Text>
          </View>
        ))}
      </View>

      <View style={styles.list}>
        {therapists.map((therapist) => (
          <Card key={therapist.id} style={styles.card}>
            <Image source={{ uri: therapist.photoUrl }} style={styles.photo} />
            <View style={styles.therapistCopy}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{therapist.name}</Text>
                {therapist.availableNow ? (
                  <Text style={styles.available}>Available Now</Text>
                ) : null}
              </View>
              <Text style={styles.specialty}>{therapist.specialty}</Text>
              <View style={styles.metaRow}>
                <Ionicons name="star" size={16} color={colors.warning} />
                <Text style={styles.meta}>{therapist.rating}</Text>
                <Text style={styles.meta}>KSh {therapist.pricePerSession}/session</Text>
              </View>
              <Text style={styles.meta}>{therapist.language}</Text>
              <AppButton
                label="Book Session"
                onPress={() =>
                  stackNavigation?.navigate("TherapistProfile", { therapistId: therapist.id })
                }
                style={styles.bookButton}
              />
              <Pressable
                onPress={() =>
                  stackNavigation?.navigate("TherapistProfile", { therapistId: therapist.id })
                }
              >
                <Text style={styles.profileLink}>View profile</Text>
              </Pressable>
            </View>
          </Card>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  available: {
    backgroundColor: "#E7F7F1",
    borderRadius: 10,
    color: colors.success,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.black,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  bookButton: {
    marginTop: 8,
    minHeight: 44
  },
  card: {
    flexDirection: "row",
    gap: 14
  },
  filterChip: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  filterText: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16
  },
  list: {
    gap: 14,
    marginTop: 18
  },
  meta: {
    color: colors.muted,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.semibold
  },
  metaRow: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6
  },
  name: {
    color: colors.text,
    flex: 1,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  },
  nameRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 8
  },
  photo: {
    borderRadius: 16,
    height: 104,
    width: 92
  },
  profileLink: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold,
    marginTop: 8,
    textAlign: "center"
  },
  specialty: {
    color: colors.text,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  therapistCopy: {
    flex: 1,
    gap: 5
  }
});
