import type { StackScreenProps } from "@react-navigation/stack";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { AppButton } from "../../components/common/AppButton";
import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList } from "../../navigation/types";
import { therapists } from "../../utils/sampleData";

type Props = StackScreenProps<AppStackParamList, "TherapistProfile">;

const pricing = [
  { type: "Text", price: "KSh 800" },
  { type: "Voice", price: "KSh 1,200" },
  { type: "Video", price: "KSh 1,800" }
];

export function TherapistProfileScreen({ navigation, route }: Props) {
  const therapist = therapists.find((item) => item.id === route.params.therapistId) ?? therapists[0];

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <Image source={{ uri: therapist.photoUrl }} style={styles.heroImage} />
      <Text style={styles.name}>{therapist.name}</Text>
      <Text style={styles.specialty}>{therapist.specialty}</Text>
      <Text style={styles.bio}>{therapist.bio}</Text>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Qualifications</Text>
        {therapist.qualifications.map((item) => (
          <Text key={item} style={styles.listItem}>
            • {item}
          </Text>
        ))}
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>
        <View style={styles.availability}>
          {therapist.availability.map((slot) => (
            <Text key={slot} style={styles.slot}>
              {slot}
            </Text>
          ))}
        </View>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Pricing tiers</Text>
        <View style={styles.pricingGrid}>
          {pricing.map((item) => (
            <View key={item.type} style={styles.priceCard}>
              <Text style={styles.priceType}>{item.type}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        {therapist.reviews.map((review) => (
          <Text key={review} style={styles.review}>
            "{review}"
          </Text>
        ))}
      </Card>

      <AppButton label="Book Now" onPress={() => undefined} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  availability: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  back: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    marginBottom: 16
  },
  bio: {
    color: colors.muted,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md,
    marginBottom: 18
  },
  heroImage: {
    borderRadius: 24,
    height: 230,
    marginBottom: 18,
    width: "100%"
  },
  listItem: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  name: {
    color: colors.text,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black
  },
  price: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.black
  },
  priceCard: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    flex: 1,
    gap: 4,
    minWidth: "30%",
    padding: 12
  },
  priceType: {
    color: colors.text,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  pricingGrid: {
    flexDirection: "row",
    gap: 10
  },
  review: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontStyle: "italic",
    lineHeight: fonts.lineHeights.md
  },
  section: {
    gap: 10,
    marginBottom: 14
  },
  sectionTitle: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  },
  slot: {
    backgroundColor: "#E7F7F1",
    borderRadius: 14,
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  specialty: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    marginBottom: 10
  }
});
