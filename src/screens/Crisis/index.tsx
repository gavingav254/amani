import type { StackScreenProps } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppButton } from "../../components/common/AppButton";
import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import { useEmergencyCall } from "../../hooks/useEmergencyCall";
import type { AppStackParamList } from "../../navigation/types";

type Props = StackScreenProps<AppStackParamList, "Crisis">;

const contacts = [
  { name: "Befrienders Kenya", phone: "+254 722 178 177" },
  { name: "Niskize", phone: "0900 620 800" },
  { name: "Mathare Hospital", phone: "+254 20 2012000" }
];

export function CrisisScreen({ navigation }: Props) {
  const callSupport = useEmergencyCall();

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>

      <Card style={styles.emergencyCard}>
        <Text style={styles.emergencyTitle}>Need urgent support?</Text>
        <Text style={styles.emergencyText}>
          If you may harm yourself or someone else, call emergency services or a trusted person now.
        </Text>
        <AppButton
          label="I Need Help Now"
          onPress={() => callSupport("+254 722 178 177")}
          variant="danger"
        />
      </Card>

      <Text style={styles.sectionTitle}>Emergency contacts</Text>
      <View style={styles.contacts}>
        {contacts.map((contact) => (
          <Card key={contact.name} style={styles.contactCard}>
            <View style={styles.contactCopy}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.phone}>{contact.phone}</Text>
            </View>
            <Pressable onPress={() => callSupport(contact.phone)} style={styles.callButton}>
              <Ionicons name="call" color={colors.white} size={20} />
            </Pressable>
          </Card>
        ))}
      </View>

      <Card style={styles.supportCard}>
        <Text style={styles.sectionTitle}>AI chat support</Text>
        <Text style={styles.supportText}>
          A grounding chat companion can help you slow down while you contact a real person.
        </Text>
        <AppButton label="Start calm chat" onPress={() => undefined} />
      </Card>

      <Card style={styles.breathingCard}>
        <Text style={styles.sectionTitle}>Breathing quick-start</Text>
        <Text style={styles.breathingText}>Breathe in for 4. Hold for 4. Out for 6. Repeat gently.</Text>
      </Card>
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
  breathingCard: {
    backgroundColor: colors.secondary,
    gap: 8,
    marginTop: 16
  },
  breathingText: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  callButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 18,
    height: 42,
    justifyContent: "center",
    width: 42
  },
  contactCard: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between"
  },
  contactCopy: {
    flex: 1,
    gap: 4
  },
  contactName: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.black
  },
  contacts: {
    gap: 12
  },
  emergencyCard: {
    backgroundColor: "#FFF1F2",
    gap: 12,
    marginBottom: 20
  },
  emergencyText: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  emergencyTitle: {
    color: colors.error,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black
  },
  phone: {
    color: colors.muted,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  sectionTitle: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black,
    marginBottom: 12
  },
  supportCard: {
    gap: 8,
    marginTop: 18
  },
  supportText: {
    color: colors.muted,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  }
});
