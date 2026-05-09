export const colors = {
  primary: "#2E7D6B",
  secondary: "#F5F0FF",
  background: "#FAFAFA",
  text: "#1A1A2E",
  error: "#E63946",
  warning: "#F4A261",
  success: "#2A9D8F",
  white: "#FFFFFF",
  muted: "#6B7280",
  border: "#E6E1F2",
  card: "#FFFFFF"
} as const;

export type ColorName = keyof typeof colors;
