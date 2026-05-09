import { Linking } from "react-native";

/** Opens the Android phone dialer with the selected support number. */
export function useEmergencyCall() {
  return (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/\s/g, "");
    Linking.openURL(`tel:${cleanNumber}`);
  };
}
